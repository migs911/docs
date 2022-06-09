"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8814],{8814:function(t,e,n){n.r(e),n.d(e,{dyte_file_message:function(){return St},dyte_image_message:function(){return Ut},dyte_text_message:function(){return Nt}});var r=n(13441),a=n(73781),i=n(10620),o=n(14878),s=n(22194),u=n(10670);function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t,e){(0,a.r)(2,arguments);var n=(0,a.t)(t).getTime(),r=c(e);return new Date(n+r)}function l(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function h(t,e){(0,a.r)(2,arguments);var n=(0,a.t)(t),r=(0,a.t)(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function f(t){return(0,a.r)(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function m(t){if((0,a.r)(1,arguments),!f(t)&&"number"!=typeof t)return!1;var e=(0,a.t)(t);return!isNaN(Number(e))}function g(t,e){(0,a.r)(2,arguments);var n=(0,a.t)(t),r=(0,a.t)(e),i=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return 12*i+o}function w(t){(0,a.r)(1,arguments);var e=(0,a.t)(t);return e.setHours(23,59,59,999),e}function v(t){(0,a.r)(1,arguments);var e=(0,a.t)(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function b(t){(0,a.r)(1,arguments);var e=(0,a.t)(t);return w(e).getTime()===v(e).getTime()}function y(t,e){(0,a.r)(2,arguments);var n,r=(0,a.t)(t),i=(0,a.t)(e),o=h(r,i),s=Math.abs(g(r,i));if(s<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*s);var u=h(r,i)===-o;b((0,a.t)(t))&&1===s&&1===h(t,i)&&(u=!1),n=o*(s-Number(u))}return 0===n?0:n}function p(t,e,n){(0,a.r)(2,arguments);var r=(0,a.d)(t,e)/1e3;return(0,a.g)(null==n?void 0:n.roundingMethod)(r)}var M={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var C={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var x={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function P(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?U(u,(function(t){return t.test(s)})):S(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(s.length);return{value:o,rest:d}}}function S(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function U(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Y,W={ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Y.matchPattern);if(!n)return null;var r=n[0],a=t.match(Y.parsePattern);if(!a)return null;var i=Y.valueCallback?Y.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},N={code:"en-US",formatDistance:function(t,e,n){var r,a=M[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:C,formatRelative:function(t,e,n,r){return D[t]},localize:x,match:W,options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(t,e){(0,a.r)(2,arguments);var n=c(e);return d(t,-n)}var O=864e5;function j(t){(0,a.r)(1,arguments);var e=1,n=(0,a.t)(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function q(t){(0,a.r)(1,arguments);var e=(0,a.t)(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=j(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=j(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function _(t){(0,a.r)(1,arguments);var e=q(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=j(n);return r}var H=6048e5;function F(t,e){(0,a.r)(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,o=null==i?0:c(i),s=null==n.weekStartsOn?o:c(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=(0,a.t)(t),d=u.getUTCDay(),l=(d<s?7:0)+d-s;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function L(t,e){(0,a.r)(1,arguments);var n=(0,a.t)(t),r=n.getUTCFullYear(),i=e||{},o=i.locale,s=o&&o.options&&o.options.firstWeekContainsDate,u=null==s?1:c(s),d=null==i.firstWeekContainsDate?u:c(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var h=F(l,e),f=new Date(0);f.setUTCFullYear(r,0,d),f.setUTCHours(0,0,0,0);var m=F(f,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function X(t,e){(0,a.r)(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:c(i),s=null==n.firstWeekContainsDate?o:c(n.firstWeekContainsDate),u=L(t,e),d=new Date(0);d.setUTCFullYear(u,0,s),d.setUTCHours(0,0,0,0);var l=F(d,e);return l}var z=6048e5;function B(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var A=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return B("yy"===e?r%100:r,e.length)},R=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):B(n+1,2)},Q=function(t,e){return B(t.getUTCDate(),e.length)},G=function(t,e){return B(t.getUTCHours()%12||12,e.length)},I=function(t,e){return B(t.getUTCHours(),e.length)},$=function(t,e){return B(t.getUTCMinutes(),e.length)},J=function(t,e){return B(t.getUTCSeconds(),e.length)},V=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return B(Math.floor(r*Math.pow(10,n-3)),e.length)},K="midnight",Z="noon",tt="morning",et="afternoon",nt="evening",rt="night",at={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return A(t,e)},Y:function(t,e,n,r){var a=L(t,r),i=a>0?a:1-a;return"YY"===e?B(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):B(i,e.length)},R:function(t,e){return B(q(t),e.length)},u:function(t,e){return B(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return R(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){(0,a.r)(1,arguments);var n=(0,a.t)(t),r=F(n,e).getTime()-X(n,e).getTime();return Math.round(r/z)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):B(i,e.length)},I:function(t,e,n){var r=function(t){(0,a.r)(1,arguments);var e=(0,a.t)(t),n=j(e).getTime()-_(e).getTime();return Math.round(n/H)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):B(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Q(t,e)},D:function(t,e,n){var r=function(t){(0,a.r)(1,arguments);var e=(0,a.t)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/O)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return B(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return B(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return B(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?Z:0===a?K:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?nt:a>=12?et:a>=4?tt:rt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return G(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):I(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):$(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):J(t,e)},S:function(t,e){return V(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return ot(a);case"XXXX":case"XX":return st(a);default:return st(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return ot(a);case"xxxx":case"xx":return st(a);default:return st(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+it(a,":");default:return"GMT"+st(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+it(a,":");default:return"GMT"+st(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return B(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return B((r._originalDate||t).getTime(),e.length)}};function it(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+B(i,2)}function ot(t,e){return t%60==0?(t>0?"-":"+")+B(Math.abs(t)/60,2):st(t,e)}function st(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+B(Math.floor(a/60),2)+n+B(a%60,2)}function ut(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function ct(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var dt={p:ct,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return ut(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ut(a,e)).replace("{{time}}",ct(i,e))}},lt=["D","DD"],ht=["YY","YYYY"];function ft(t){return-1!==lt.indexOf(t)}function mt(t){return-1!==ht.indexOf(t)}function gt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,yt=/''/g,pt=/[a-zA-Z]/;function Mt(t){return t.match(bt)[1].replace(yt,"'")}function Tt(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}var Ct=1440,Dt=43200;const kt=(t,e)=>{const n=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.r)(2,arguments);var r=n.locale||N;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=h(t,e);if(isNaN(i))throw new RangeError("Invalid time value");var o,s,u=Tt(n);u.addSuffix=Boolean(n.addSuffix),u.comparison=i,i>0?(o=(0,a.t)(e),s=(0,a.t)(t)):(o=(0,a.t)(t),s=(0,a.t)(e));var c,d=p(s,o),f=(l(s)-l(o))/1e3,m=Math.round((d-f)/60);if(m<2)return n.includeSeconds?d<5?r.formatDistance("lessThanXSeconds",5,u):d<10?r.formatDistance("lessThanXSeconds",10,u):d<20?r.formatDistance("lessThanXSeconds",20,u):d<40?r.formatDistance("halfAMinute",null,u):d<60?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",1,u):0===m?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",m,u);if(m<45)return r.formatDistance("xMinutes",m,u);if(m<90)return r.formatDistance("aboutXHours",1,u);if(m<Ct){var g=Math.round(m/60);return r.formatDistance("aboutXHours",g,u)}if(m<2520)return r.formatDistance("xDays",1,u);if(m<Dt){var w=Math.round(m/Ct);return r.formatDistance("xDays",w,u)}if(m<86400)return c=Math.round(m/Dt),r.formatDistance("aboutXMonths",c,u);if((c=y(s,o))<12){var v=Math.round(m/Dt);return r.formatDistance("xMonths",v,u)}var b=c%12,M=Math.floor(c/12);return b<3?r.formatDistance("aboutXYears",M,u):b<9?r.formatDistance("overXYears",M,u):r.formatDistance("almostXYears",M+1,u)}(t,e,{addSuffix:!0});return["in less than a minute","less than a minute ago"].includes(n)?"just now":n.replace("minute","min")},xt=t=>function(t,e,n){(0,a.r)(2,arguments);var r=String(e),i=n||{},o=i.locale||N,s=o.options&&o.options.firstWeekContainsDate,u=null==s?1:c(s),d=null==i.firstWeekContainsDate?u:c(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=o.options&&o.options.weekStartsOn,f=null==h?0:c(h),g=null==i.weekStartsOn?f:c(i.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var w=(0,a.t)(t);if(!m(w))throw new RangeError("Invalid time value");var v=l(w),b=E(w,v),y={firstWeekContainsDate:d,weekStartsOn:g,locale:o,_originalDate:w};return r.match(vt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,dt[e])(t,o.formatLong,y):t})).join("").match(wt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Mt(n);var a=at[r];if(a)return!i.useAdditionalWeekYearTokens&&mt(n)&&gt(n,e,t),!i.useAdditionalDayOfYearTokens&&ft(n)&&gt(n,e,t),a(b,n,o.localize,y);if(r.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(t,"PPpp"),Pt=({name:t,time:e,now:n})=>(0,r.h)("div",{class:"head"},(0,r.h)("div",{class:"name"},(0,i.s)((0,i.f)(t),20)),(0,r.h)("div",{class:"time",title:xt(e)},kt(e,n))),St=class{constructor(t){(0,r.r)(this,t),this.now=new Date,this.isContinued=!1,this.iconPack=o.d}render(){const t=(0,i.a)(this.message.link);return(0,r.h)(r.H,null,!this.isContinued&&(0,r.h)(Pt,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,r.h)("div",{class:"body"},(0,r.h)("div",{class:"file"},(0,r.h)("div",{class:"file-data"},(0,r.h)("div",{class:"name"},this.message.name),(0,r.h)("div",{class:"file-data-split"},(0,r.h)("div",{class:"ext"},(0,s.g)(this.message.name)),(0,r.h)("span",{class:"divider"}),(0,r.h)("div",{class:"size"},(0,s.a)(this.message.size)))),(0,r.h)("dyte-button",{variant:"outline",kind:"icon",onClick:()=>(0,s.d)(t,{name:this.message.name,fallbackName:"file"})},(0,r.h)("dyte-icon",{icon:this.iconPack.download})))))}},Ut=class{constructor(t){(0,r.r)(this,t),this.showModal=(0,r.c)(this,"dyteViewImage",7),this.now=new Date,this.isContinued=!1,this.iconPack=o.d,this.t=(0,u.u)(),this.status="loading"}render(){return(0,r.h)(r.H,null,!this.isContinued&&(0,r.h)(Pt,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,r.h)("div",{class:"body"},(0,r.h)("div",{class:{image:!0,loaded:"loaded"===this.status}},(0,r.h)("img",{src:(0,i.a)(this.message.link),onLoad:()=>{this.status="loaded"},onError:()=>{this.status="errored"},onClick:()=>{"loaded"===this.status&&this.showModal.emit(this.message)}}),"loading"===this.status&&(0,r.h)("div",{class:"image-spinner",title:this.t("Loading image"),"aria-label":this.t("Loading image")},(0,r.h)("dyte-spinner",null)),"errored"===this.status&&(0,r.h)("div",{class:"image-errored",title:this.t("Image not found"),"aria-label":this.t("Image not found")},(0,r.h)("dyte-icon",{icon:this.iconPack.image_off})),"loaded"===this.status&&(0,r.h)("div",{class:"actions"},(0,r.h)("dyte-button",{class:"action",variant:"outline",kind:"icon",onClick:()=>this.showModal.emit(this.message)},(0,r.h)("dyte-icon",{icon:this.iconPack.arrow_expand})),(0,r.h)("dyte-button",{class:"action",variant:"outline",kind:"icon",onClick:()=>(0,s.d)(this.message.link,{fallbackName:"image"})},(0,r.h)("dyte-icon",{icon:this.iconPack.download}))))))}};Ut.style=".image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";const Yt=/(https?:\/\/[^\s]+)/,Wt=({message:t})=>t.split("\n").map((t=>(0,r.h)("p",null,(t=>{const e=t.split(" "),n=e.length-1;return e.map(((t,e)=>Yt.test(t)?(0,r.h)("span",null,(0,r.h)("a",{href:t,target:"_blank",rel:"noopener noreferrer"},t),e!==n?" ":""):`${t}${e!==n?" ":""}`))})(t)))),Nt=class{constructor(t){(0,r.r)(this,t),this.now=new Date,this.isContinued=!1}render(){return(0,r.h)(r.H,null,!this.isContinued&&(0,r.h)(Pt,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,r.h)("div",{class:"body"},(0,r.h)("div",{class:{text:!0,emoji:(0,i.h)(this.message.message)}},(0,r.h)(Wt,{message:this.message.message}))))}}},22194:function(t,e,n){n.d(e,{a:function(){return i},d:function(){return o},g:function(){return a}});var r=n(10620);const a=t=>t.split(".").pop(),i=t=>{const e=Math.floor(Math.log(t)/Math.log(1024));return`${(t/1024**e).toFixed(2)} ${["B","kB","MB","GB","TB"][e]}`},o=async(t,e)=>{t=(0,r.a)(t);let n=null==e?void 0:e.name;const a=await fetch(t);if(!a.ok)return void window.open(t,"_blank");const i=URL.createObjectURL(await a.blob()),o=document.createElement("a");o.href=i,o.download=null!=n?n:((t,e="file")=>{const n=new URL(t),r=decodeURIComponent(n.pathname.split("/").pop());return"/"!==r?r:e})(t,null==e?void 0:e.fallbackName),o.click()}},73781:function(t,e,n){function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t,e){return r(2,arguments),a(t).getTime()-a(e).getTime()}n.d(e,{d:function(){return i},g:function(){return s},r:function(){return r},t:function(){return a}});var o={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function s(t){return t?o[t]:o.trunc}},10670:function(t,e,n){n.d(e,{g:function(){return a},u:function(){return i}});const r={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},a=async t=>{if(null==t||"en"===t||""===t.trim())return r;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},r,await e.json()):r}catch(e){return r}},i=(t=r)=>e=>{var n;return null!==(n=t[e])&&void 0!==n?n:e}},10620:function(t,e,n){n.d(e,{a:function(){return i},f:function(){return o},h:function(){return a},s:function(){return r}});const r=(t,e=20)=>null==t?"":t.length>e?`${t.substring(0,e)}...`:t,a=t=>/^\p{Emoji}+$/u.test(t),i=t=>t.trim().toLowerCase().startsWith("javascript:")?"https://dyte.io":t,o=t=>""===(t=t.trim())?"Participant":t}}]);