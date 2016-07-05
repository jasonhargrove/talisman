webpackJsonp([6],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=i(2),$=n(a),l=i(18),s=i(12),r=n(s),u=i(405),o=n(u),c=i(407),A=n(c),d=i(408),f=n(d),y=i(409),g=n(y);(0,l.render)($["default"].createElement(r["default"],{algorithm:o["default"]}),document.getElementById("lancaster-mount")),(0,l.render)($["default"].createElement(r["default"],{algorithm:A["default"]}),document.getElementById("lovins-mount")),(0,l.render)($["default"].createElement(r["default"],{algorithm:f["default"]}),document.getElementById("porter-mount")),(0,l.render)($["default"].createElement(r["default"],{algorithm:g["default"]}),document.getElementById("s-stemmer-mount"))},12:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),$=n(a),l=i(15),s=i(13),r=n(s),u=function(e){return e},o=function(e,t){return e===t},c=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),A=c(function(e){var t=e.algorithm,i=e.codeRenderer,n=void 0===i?u:i,a=e.comparator,l=void 0===a?o:a,s=e.wordOne,c=e.wordTwo,A=e.setWordOne,d=e.setWordTwo,f=s?t(s):null,y=c?t(c):null,g=f?n(f):"",m=y?n(y):"",v="·",h="default";return f&&y&&(l(f,y)?(v="=~",h="success"):(v="!~",h="error")),$["default"].createElement("table",null,$["default"].createElement("tbody",null,$["default"].createElement("tr",null,$["default"].createElement("td",null,$["default"].createElement(r["default"],{placeholder:"Word 1",value:s,onChange:function(e){return A(e.target.value)},status:h})),$["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},$["default"].createElement("strong",null,v)),$["default"].createElement("td",null,$["default"].createElement(r["default"],{placeholder:"Word 2",value:c,onChange:function(e){return d(e.target.value)},status:h}))),$["default"].createElement("tr",null,$["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},g," "),$["default"].createElement("td",null),$["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "))))});t["default"]=A},405:function(e,t){"use strict";function i(e){return u.test(e.charAt(0))?e.length>1:e.length>2&&u.test(e)}function n(e){var t=e.toLowerCase(),n=!0,l=r[t.charAt(t.length-1)];if(!l)return t;for(var u=-1,o=l.length;++u<o;){var c=l[u],A=c[0],d=c[1],f=c[2];if(n||f!==a){var y=t.length-A.length;if(!(y<0||t.substr(y)!==A)){if(f===s)return t;var g=t.substr(0,y)+d;if(i(g)&&(t=g,f===$)){if(n=!1,l=r[t.charAt(t.length-1)],!l)return t;u=-1,o=l.length}}}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a="INTACT",$="CONTINUE",l="STOP",s="PROTECT",r={a:[["ia","",a],["a","",a]],b:[["bb","b",l]],c:[["ytic","ys",l],["ic","",$],["nc","nt",$]],d:[["dd","d",l],["ied","y",$],["ceed","cess",l],["eed","ee",l],["ed","",$],["hood","",$]],e:[["e","",$]],f:[["lief","liev",l],["if","",$]],g:[["ing","",$],["iag","y",l],["ag","",$],["gg","g",l]],h:[["th","",a],["guish","ct",l],["ish","",$]],i:[["i","",a],["i","y",$]],j:[["ij","id",l],["fuj","fus",l],["uj","ud",l],["oj","od",l],["hej","her",l],["verj","vert",l],["misj","mit",l],["nj","nd",l],["j","s",l]],l:[["ifiabl","",l],["iabl","y",l],["abl","",$],["ibl","",l],["bil","bl",$],["cl","c",l],["iful","y",l],["ful","",$],["ul","",l],["ial","",$],["ual","",$],["al","",$],["ll","l",l]],m:[["ium","",l],["um","",a],["ism","",$],["mm","m",l]],n:[["sion","j",$],["xion","ct",l],["ion","",$],["ian","",$],["an","",$],["een","",s],["en","",$],["nn","n",l]],p:[["ship","",$],["pp","p",l]],r:[["er","",$],["ear","",s],["ar","",l],["ior","",$],["or","",$],["ur","",$],["rr","r",l],["tr","t",$],["ier","y",$]],s:[["ies","y",$],["sis","s",l],["is","",$],["ness","",$],["ss","",s],["ous","",$],["us","",a],["s","",$],["s","",l]],t:[["plicat","ply",l],["at","",$],["ment","",$],["ent","",$],["ant","",$],["ript","rib",l],["orpt","orb",l],["duct","duc",l],["sumpt","sum",l],["cept","ceiv",l],["olut","olv",l],["sist","",s],["ist","",$],["tt","t",l]],u:[["iqu","",l],["ogu","og",l]],v:[["siv","j",$],["eiv","",s],["iv","",$]],y:[["bly","bl",$],["ily","y",$],["ply","",s],["ly","",$],["ogy","og",l],["phy","ph",l],["omy","om",l],["opy","op",l],["ity","",$],["ety","",$],["lty","l",l],["istry","",l],["ary","",$],["ory","",$],["ify","",l],["ncy","nt",$],["acy","",$]],z:[["iz","",$],["yz","ys",l]]},u=/[aeiouy]/},407:function(e,t){"use strict";function i(e){e=e.toLowerCase().replace(/^a-z'/g,"");for(var t=e,i=0,n=a.length;i<n;i++){var $=a[i],l=$[0],u=$[1];if(t=e.replace(l,""),t.length>1&&t.length<e.length&&s[u](t))break}/[bdglmnprst]{2,}$/.test(t)&&t[t.length-1]===t[t.length-2]&&(t=t.slice(0,-1));for(var o=0,c=r.length;o<c;o++){var A=r[o],l=A[0],d=A[1];t=t.replace(l,d)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;for(var n=[/alistically$/,"B",/arizability$/,"A",/izationally$/,"B",/antialness$/,"A",/arisations$/,"A",/arizations$/,"A",/entialness$/,"A",/allically$/,"C",/antaneous$/,"A",/antiality$/,"A",/arisation$/,"A",/arization$/,"A",/ationally$/,"B",/ativeness$/,"A",/eableness$/,"E",/entations$/,"A",/entiality$/,"A",/entialize$/,"A",/entiation$/,"A",/ionalness$/,"A",/istically$/,"A",/itousness$/,"A",/izability$/,"A",/izational$/,"A",/ableness$/,"A",/arizable$/,"A",/entation$/,"A",/entially$/,"A",/eousness$/,"A",/ibleness$/,"A",/icalness$/,"A",/ionalism$/,"A",/ionality$/,"A",/ionalize$/,"A",/iousness$/,"A",/izations$/,"A",/lessness$/,"A",/ability$/,"A",/aically$/,"A",/alistic$/,"B",/alities$/,"A",/ariness$/,"E",/aristic$/,"A",/arizing$/,"A",/ateness$/,"A",/atingly$/,"A",/ational$/,"B",/atively$/,"A",/ativism$/,"A",/elihood$/,"E",/encible$/,"A",/entally$/,"A",/entials$/,"A",/entiate$/,"A",/entness$/,"A",/fulness$/,"A",/ibility$/,"A",/icalism$/,"A",/icalist$/,"A",/icality$/,"A",/icalize$/,"A",/ication$/,"G",/icianry$/,"A",/ination$/,"A",/ingness$/,"A",/ionally$/,"A",/isation$/,"A",/ishness$/,"A",/istical$/,"A",/iteness$/,"A",/iveness$/,"A",/ivistic$/,"A",/ivities$/,"A",/ization$/,"F",/izement$/,"A",/oidally$/,"A",/ousness$/,"A",/aceous$/,"A",/acious$/,"B",/action$/,"G",/alness$/,"A",/ancial$/,"A",/ancies$/,"A",/ancing$/,"B",/ariser$/,"A",/arized$/,"A",/arizer$/,"A",/atable$/,"A",/ations$/,"B",/atives$/,"A",/eature$/,"Z",/efully$/,"A",/encies$/,"A",/encing$/,"A",/ential$/,"A",/enting$/,"C",/entist$/,"A",/eously$/,"A",/ialist$/,"A",/iality$/,"A",/ialize$/,"A",/ically$/,"A",/icance$/,"A",/icians$/,"A",/icists$/,"A",/ifully$/,"A",/ionals$/,"A",/ionate$/,"D",/ioning$/,"A",/ionist$/,"A",/iously$/,"A",/istics$/,"A",/izable$/,"E",/lessly$/,"A",/nesses$/,"A",/oidism$/,"A",/acies$/,"A",/acity$/,"A",/aging$/,"B",/aical$/,"A",/alist$/,"A",/alism$/,"B",/ality$/,"A",/alize$/,"A",/allic$/,"BB",/anced$/,"B",/ances$/,"B",/antic$/,"C",/arial$/,"A",/aries$/,"A",/arily$/,"A",/arity$/,"B",/arize$/,"A",/aroid$/,"A",/ately$/,"A",/ating$/,"I",/ation$/,"B",/ative$/,"A",/ators$/,"A",/atory$/,"A",/ature$/,"E",/early$/,"Y",/ehood$/,"A",/eless$/,"A",/elity$/,"A",/ement$/,"A",/enced$/,"A",/ences$/,"A",/eness$/,"E",/ening$/,"E",/ental$/,"A",/ented$/,"C",/ently$/,"A",/fully$/,"A",/ially$/,"A",/icant$/,"A",/ician$/,"A",/icide$/,"A",/icism$/,"A",/icist$/,"A",/icity$/,"A",/idine$/,"I",/iedly$/,"A",/ihood$/,"A",/inate$/,"A",/iness$/,"A",/ingly$/,"B",/inism$/,"J",/inity$/,"CC",/ional$/,"A",/ioned$/,"A",/ished$/,"A",/istic$/,"A",/ities$/,"A",/itous$/,"A",/ively$/,"A",/ivity$/,"A",/izers$/,"F",/izing$/,"F",/oidal$/,"A",/oides$/,"A",/otide$/,"A",/ously$/,"A",/able$/,"A",/ably$/,"A",/ages$/,"B",/ally$/,"B",/ance$/,"B",/ancy$/,"B",/ants$/,"B",/aric$/,"A",/arly$/,"K",/ated$/,"I",/ates$/,"A",/atic$/,"B",/ator$/,"A",/ealy$/,"Y",/edly$/,"E",/eful$/,"A",/eity$/,"A",/ence$/,"A",/ency$/,"A",/ened$/,"E",/enly$/,"E",/eous$/,"A",/hood$/,"A",/ials$/,"A",/ians$/,"A",/ible$/,"A",/ibly$/,"A",/ical$/,"A",/ides$/,"L",/iers$/,"A",/iful$/,"A",/ines$/,"M",/ings$/,"N",/ions$/,"B",/ious$/,"A",/isms$/,"B",/ists$/,"A",/itic$/,"H",/ized$/,"F",/izer$/,"F",/less$/,"A",/lily$/,"A",/ness$/,"A",/ogen$/,"A",/ward$/,"A",/wise$/,"A",/ying$/,"B",/yish$/,"A",/acy$/,"A",/age$/,"B",/aic$/,"A",/als$/,"BB",/ant$/,"B",/ars$/,"O",/ary$/,"F",/ata$/,"A",/ate$/,"A",/eal$/,"Y",/ear$/,"Y",/ely$/,"E",/ene$/,"E",/ent$/,"C",/ery$/,"E",/ese$/,"A",/ful$/,"A",/ial$/,"A",/ian$/,"A",/ics$/,"A",/ide$/,"L",/ied$/,"A",/ier$/,"A",/ies$/,"P",/ily$/,"A",/ine$/,"M",/ing$/,"N",/ion$/,"Q",/ish$/,"C",/ism$/,"B",/ist$/,"A",/ite$/,"AA",/ity$/,"A",/ium$/,"A",/ive$/,"A",/ize$/,"F",/oid$/,"A",/one$/,"R",/ous$/,"A",/ae$/,"A",/al$/,"BB",/ar$/,"X",/as$/,"B",/ed$/,"E",/en$/,"F",/es$/,"E",/ia$/,"A",/ic$/,"A",/is$/,"A",/ly$/,"B",/on$/,"S",/or$/,"T",/um$/,"U",/us$/,"V",/yl$/,"R",/s'/,"A",/'s$/,"A",/a$/,"A",/e$/,"A",/i$/,"A",/o$/,"A",/s$/,"W",/y$/,"B"],a=[],$=0,l=n.length;$<l;$+=2)a.push([n[$],n[$+1]]);var s={A:function(){return!0},B:function(e){return e.length>2},C:function(e){return e.length>3},D:function(e){return e.length>4},E:function(e){return!/e$/.test(e)},F:function(e){return s.B(e)&&s.E(e)},G:function(e){return s.B(e)&&/f$/.test(e)},H:function(e){return/(t|ll)$/.test(e)},I:function(e){return!/[oe]$/.test(e)},J:function(e){return!/[ae]$/.test(e)},K:function(e){return s.B(e)&&/(l|i|(u\we))$/.test(e)},L:function(e){return!/(u|x|([^o]s))$/.test(e)},M:function(e){return!/[acem]$/.test(e)},N:function(e){return/s\w{2}$/.test(e)?s.C(e):s.B(e)},O:function(e){return/[li]$/.test(e)},P:function(e){return!/c$/.test(e)},Q:function(e){return s.B(e)&&!/[ln]$/.test(e)},R:function(e){return/[nr]$/.test(e)},S:function(e){return/(dr|[^t]t)$/.test(e)},T:function(e){return/(s|[^o]t)$/.test(e)},U:function(e){return/[lmnr]$/.test(e)},V:function(e){return/c$/.test(e)},W:function(e){return!/[su]$/.test(e)},X:function(e){return/(l|i|u\we)$/.test(e)},Y:function(e){return/in$/.test(e)},Z:function(e){return!/f$/.test(e)},AA:function(e){return/([dflt]|ph|th|er|or|es)$/.test(e)},BB:function(e){return s.B(e)&&!/(met|ryst)/.test(e)},CC:function(e){return/l$/.test(e)}},r=[[/iev$/,"ief"],[/uct$/,"uc"],[/umpt$/,"um"],[/rpt$/,"rb"],[/urs$/,"ur"],[/istr$/,"ister"],[/metr$/,"meter"],[/olv$/,"olut"],[/([^aoi])ul$/,"$1l"],[/bex$/,"bic"],[/dex$/,"dic"],[/pex$/,"pic"],[/tex$/,"tic"],[/ax$/,"ac"],[/ex$/,"ec"],[/ix$/,"ic"],[/lux$/,"luc"],[/uad$/,"uas"],[/vad$/,"vas"],[/cid$/,"cis"],[/lid$/,"lis"],[/erid$/,"eris"],[/pand$/,"pans"],[/([^s])end$/,"$1ens"],[/ond$/,"ons"],[/lud$/,"lus"],[/rud$/,"rus"],[/([^pt])her$/,"$1hes"],[/mit$/,"mis"],[/([^m])ent$/,"$1ens"],[/ert$/,"ers"],[/([^n])et$/,"$1es"],[/(yt|yz)$/,"ys"]]},408:function(e,t){"use strict";function i(e){return e.slice(0,-1)}function n(e,t){var i=e.exec(t);return e.lastIndex=0,i}function a(e){if(e=e.toLowerCase(),e.length<3)return e;var t=null;if("y"===e[0]&&(e="Y"+e.slice(1)),e=e.replace(p,"$1$2"),e=e.replace(E,"$1$2"),t=n(B,e)){var a=t,$=a[1];m.test($)&&(e=i(e))}else if(t=n(z,e)){var l=t,s=l[1];b.test(s)&&(e=s,w.test(e)?e+="e":x.test(e)?e=i(e):C.test(e)&&(e+="e"))}if(t=n(j,e)){var d=t,f=d[1];e=f+"i"}if(t=n(r,e)){var y=t,g=y[1],T=y[2];m.test(g)&&(e=g+c[T])}if(t=n(u,e)){var I=t,M=I[1],F=I[2];m.test(M)&&(e=M+A[F])}if(t=n(o,e)){var P=t,W=P[1];h.test(W)&&(e=W)}else if(t=n(R,e)){var L=t,S=L[1],N=L[2],Y=S+N;h.test(Y)&&(e=Y)}if(t=n(O,e)){var G=t,J=G[1];(h.test(J)||v.test(J)&&!_.test(J))&&(e=J)}return/ll$/.test(e)&&h.test(e)&&(e=i(e)),e.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var $=["ational","tional","enci","anci","izer","bli","alli","entli","eli","ousli","ization","ation","ator","alism","iveness","fulness","ousness","aliti","iviti","biliti","logi"],l=["icate","ative","alize","iciti","ical","ful","ness"],s=["al","ance","ence","er","ic","able","ible","ant","ement","ment","ent","ou","ism","ate","iti","ous","ive","ize"],r=new RegExp("^(.+?)("+$.join("|")+")$"),u=new RegExp("^(.+?)("+l.join("|")+")$"),o=new RegExp("^(.+?)("+s.join("|")+")$"),c={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},A={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},d="[^aeiou]",f="[aeiouy]",y=""+d+d+"*",g=""+f+f+"*",m=new RegExp("^("+y+")?"+g+y),v=new RegExp("^("+y+")?"+g+y+"("+g+")?$"),h=new RegExp("^("+y+")?"+g+y+g+y),b=new RegExp("^("+y+")?"+f),p=/^(.+?)(ss|i)es$/,E=/^(.+?)([^s])s$/,B=/^(.+?)eed$/,z=/^(.+?)(ed|ing)$/,w=/(at|bl|iz)$/,x=/([^aeiouylsz])\1$/,C=new RegExp("^"+y+f+"[^aeiouwxy]$"),j=new RegExp("^(.*"+f+".*)y$"),R=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,_=new RegExp("^"+y+f+"[^aeiouwxy]$")},409:function(e,t){"use strict";function i(e){var t=e.length;if(t<3||"s"!==e[t-1])return e;var i=e[t-2];if("u"===i||"s"===i)return e;if("e"===i){if(t>3&&"i"===e[t-3]&&"a"!==e[t-4]&&"e"!==e[t-4])return e.slice(0,-3)+"y";if("i"===e[t-3]||"a"===e[t-3]||"o"===e[t-3]||"e"===e[t-3])return e}return e.slice(0,-1)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i}});