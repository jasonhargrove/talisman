webpackJsonp([10],{0:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=l(2),u=(n(r),l(18),l(10));n(u)},10:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(2),u=n(r),a=l(16),d=l(12),o=n(d),c=function(e){return e},f=function(e,t){return e===t},s=(0,a.compose)((0,a.withState)("wordOne","setWordOne",""),(0,a.withState)("wordTwo","setWordTwo","")),i=s(function(e){var t=e.algorithm,l=e.codeRenderer,n=void 0===l?c:l,r=e.comparator,a=void 0===r?f:r,d=e.wordOne,s=e.wordTwo,i=e.setWordOne,m=e.setWordTwo,E=d?t(d):null,w=s?t(s):null,v=E?n(E):"",g=w?n(w):"",h="·",p="default";return E&&w&&(a(E,w)?(h="=~",p="success"):(h="!~",p="error")),u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Word 1",value:d,onChange:function(e){return i(e.target.value)},status:p})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,h)),u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Word 2",value:s,onChange:function(e){return m(e.target.value)},status:p}))),u["default"].createElement("tr",null,u["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "),u["default"].createElement("td",null),u["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},g," "))))});t["default"]=i}});