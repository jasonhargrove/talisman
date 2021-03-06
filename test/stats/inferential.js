/**
 * Talisman stats/inferential tests
 * =================================
 *
 */
import {assert} from 'chai';
import {
  variance,
  stdev,
  sampleVariance,
  sampleStdev,
  sampleCovariance,
  sampleCorrelation
} from '../../src/stats/inferential';

describe('inferential', function() {
  const data = [13, 14, 15, 8, 20];

  describe('#.sampleVariance', function() {

    it('should return the sample variance of the given sequence.', function() {
      assert.strictEqual(sampleVariance(data), 18.5);
    });

    it('should return 0 if the length of the sequence is 1.', function() {
      assert.strictEqual(sampleVariance([5]), 0);
    });

    it('should throw if the given list is empty.', function() {
      assert.throws(function() {
        sampleVariance([]);
      }, /empty/);
    });
  });

  describe('#.sampleStdev', function() {

    it('should return the sample variance of the given sequence.', function() {
      assert.strictEqual(sampleStdev(data), Math.sqrt(18.5));
    });

    it('should return 0 if the length of the sequence is 1.', function() {
      assert.strictEqual(sampleStdev([5]), 0);
    });

    it('should throw if the given list is empty.', function() {
      assert.throws(function() {
        sampleStdev([]);
      }, /empty/);
    });
  });

  describe('#.variance', function() {
    it('should be possible to pass a custom ddof.', function() {
      assert.strictEqual(variance(3, data), 37);
    });

    it('should return 0 if the length of the sequence is too small.', function() {
      assert.strictEqual(variance(3, [1, 2]), 0);
    });
  });

  describe('#.stdev', function() {
    it('should be possible to pass a custom ddof.', function() {
      assert.strictEqual(stdev(3, data), Math.sqrt(37));
    });

    it('should return 0 if the length of the sequence is too small.', function() {
      assert.strictEqual(stdev(3, [1, 2]), 0);
    });
  });

  describe('#.sampleCovariance', function() {
    it('should throw when incorrect arguments are passed.', function() {

      assert.throws(function() {
        sampleCovariance([1, 2, 3], [1, 2]);
      }, /size/);

      assert.throws(function() {
        sampleCovariance([1], [1]);
      }, /item/);
    });

    it('should properly compute the covariance between the two given samples.', function() {
      const sample1 = [4, 5, 6, 3, 5],
            sample2 = [4, 5, 9, 10, 7];

      assert.strictEqual(sampleCovariance(sample1, sample2), -0.25);
    });
  });

  describe('#.sampleCorrelation', function() {
    it('should properly compute the correlation between the two given samples.', function() {
      const sample1 = [4, 5, 6, 3, 5],
            sample2 = [4, 5, 9, 10, 7];

      assert.approximately(sampleCorrelation(sample1, sample2), -0.086, 0.001);
    });
  });
});
