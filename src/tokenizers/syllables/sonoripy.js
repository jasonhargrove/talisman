/* eslint brace-style: 0 */
/**
 * Talisman tokenizers/syllables/sonoripy
 * =======================================
 *
 * Language-independent syllabification algorithm following the sonority
 * sequencing principle. As opposed to LegaliPy, this algorithm doesn't need
 * to be trained on word tokens but must be provided with the target
 * language's sonority hierarchy.
 *
 * [Reference]:
 * https://github.com/henchc/SonoriPy
 *
 * [Authors]:
 * Christopher Hench (UC Berkeley)
 * Alex Estes
 */

/**
 * Constants.
 */
const DEFAULT_HIERARCHY = {
  vowels: 'aeiouy',
  approximates: '',
  nasals: 'lmnrw',
  fricatives: 'zvsf',
  affricates: '',
  stops: 'bcdgtkpqxhj'
};

// Note: it's possible to optimize the value lookup by creating a proper
// map in the factory but this would probably be premature optimization
// considering we'd drop the number of operations from 5 per lookup to 1 only.
const MAP = [
  ['vowels', 5],
  ['approximates', 4],
  ['nasals', 3],
  ['fricatives', 2],
  ['affricates', 1]
];

/**
 * Helpers.
 */

/**
 * Function dropping some useless leading & trailing characters in the given
 * string.
 *
 * @param  {string} string - Target string.
 * @return {string}        - The stripped string.
 */
function strip(string) {
  return string.replace(/(?:^[.:;?!()'"]+)|(?:[.:;?!()'"]+$)/g, '');
}

/**
 * Function used to retokenize syllables tokens by avoiding parts that would
 * not have vowels at all by merging them with the precedent token.
 *
 * @param  {RegExp} vowelsRegex - The regex used to test the presence of
 *                                vowels in the syllables.
 * @param  {array}  syllables   - The tokens.
 * @return {array}              - The merged tokens.
 */
export function merge(vowelsRegex, syllables) {
  let safeSyllables = [],
      front = '';

  for (let i = 0, l = syllables.length; i < l; i++) {
    const syllable = syllables[i];

    if (!vowelsRegex.test(syllable)) {
      if (!safeSyllables.length)
        front += syllable;
      else
        safeSyllables = safeSyllables
          .slice(0, -1)
          .concat(safeSyllables.slice(-1) + syllable);
    }
    else {
      if (!safeSyllables.length)
        safeSyllables.push(front + syllable);
      else
        safeSyllables.push(syllable);
    }
  }

  return safeSyllables;
}

/**
 * Tokenizer function factory aiming at building the required function.
 *
 * @param  {object}   options              - Possible options:
 * @param  {object}   [options.hierarchy]  - Target language's hierarchy.
 * @return {function}                      - The tokenizer function.
 */
export default function createTokenizer(options) {
  options = options || {};

  const hierarchy = options.hierarchy;

  if (!hierarchy)
    throw new Error('talisman/tokenizers/syllables/sonoripy: a hierachy must be provided.');

  const sets = {},
        vowels = hierarchy.vowels;

  // Iterating on default hierarchy to ensure every key is set
  for (const k in DEFAULT_HIERARCHY)
    sets[k] = new Set(hierarchy[k] || '');

  // Creating a vowel regex
  const vowelsRegex = new RegExp(`[${vowels}]`);

  /**
   * Created tokenizer function.
   *
   * @param  {string} word - The word to tokenize.
   * @return {array}       - The syllables as tokens.
   */
  return function(word) {

    // Normalizing the word
    const normalizedWord = strip(word);

    //-- 1) Tagging letters & counting vowels
    let vowelCount = 0;
    const taggedLetters = [];

    for (let i = 0, l = normalizedWord.length; i < l; i++) {
      const letter = normalizedWord[i],
            lowerLetter = letter.toLowerCase();

      let found = false;

      if (sets.vowels.has(lowerLetter))
        vowelCount++;

      for (let j = 0, m = MAP.length; j < m; j++) {
        const [type, value] = MAP[j];

        if (sets[type].has(lowerLetter)) {
          taggedLetters.push([letter, value]);
          found = true;
          break;
        }
      }

      // Default
      if (!found)
        taggedLetters.push([letter, 0]);
    }

    //-- 2) Dividing the syllables
    const syllables = [];

    // If the word is monosyllabic, we can stop right there
    // FIXME: check if we need to edit for last step?
    if (vowelCount <= 1)
      return [word];

    let syllable = taggedLetters[0][0];

    for (let i = 1, l = taggedLetters.length; i < l; i++) {
      const [letter, value] = taggedLetters[i],
            valueBefore = (taggedLetters[i - 1] || [])[1],
            valueAfter = (taggedLetters[i + 1] || [])[1];

      // If we reached the end of the word
      if (i === l - 1) {
        syllable += letter;
        syllables.push(syllable);
      }

      // Cases triggering syllable break
      else if (
        (value === valueAfter && value === valueBefore) ||
        (value === valueAfter && value < valueBefore)
      ) {
        syllable += letter;
        syllables.push(syllable);
        syllable = '';
      }

      else if (value < valueAfter && value < valueBefore) {
        syllables.push(syllable);
        syllable = letter;
      }

      // Cases that do not trigger syllable break
      // (I dropped the condition & placed it as else because it hurts
      // performance otherwise)
      else /* if (
        (value < valueAfter && value > valueBefore) ||
        (value > valueAfter && value < valueBefore) ||
        (value > valueAfter && value > valueBefore) ||
        (value > valueAfter && value === valueBefore) ||
        (value === valueAfter && value > valueBefore) ||
        (value < valueAfter && value === valueBefore)
      ) */ {
        syllable += letter;
      }
    }

    //-- 3) Ensuring we don't have a syllable without vowel
    const safeSyllables = merge(vowelsRegex, syllables);

    return safeSyllables;
  };
}

/**
 * Exporting a default version of the tokenizer.
 */
const defaultTokenizer = createTokenizer({hierarchy: DEFAULT_HIERARCHY});
export default defaultTokenizer;
