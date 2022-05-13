"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[86589],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},c="DyteMeeting (React component)",p={unversionedId:"reference/dyte-meeting",id:"version-0.6.x/reference/dyte-meeting",isDocsHomePage:!1,title:"DyteMeeting (React component)",description:"DyteMeeting is a React component that can be included in your React application to show the Dyte Meeting UI.",source:"@site/react-native_versioned_docs/version-0.6.x/reference/dyte-meeting.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting",permalink:"/react-native/0.6.x/reference/dyte-meeting",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.6.x/reference/dyte-meeting.mdx",tags:[],version:"0.6.x",lastUpdatedBy:"Palash",lastUpdatedAt:1652433695,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6.x/mainSidebar",previous:{title:"Sample app",permalink:"/react-native/0.6.x/sample-app"},next:{title:"Connection Config",permalink:"/react-native/0.6.x/reference/connection-config"}},u=[{value:"Props",id:"props",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dytemeeting-react-component"},"DyteMeeting (React component)"),(0,o.kt)("p",null,"DyteMeeting is a React component that can be included in your React application to show the Dyte Meeting UI."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onInit"),(0,o.kt)("td",{parentName:"tr",align:null},"function(meeting: DyteMeeting)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"On successful meeting creation, returns the meeting to the callback function provided (see ",(0,o.kt)("a",{parentName:"td",href:"./meeting"},"Meeting object")," for more details)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onError"),(0,o.kt)("td",{parentName:"tr",align:null},"function(error: Error)"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"On error during meeting creation, returns the relevant error to the callback function provided (see ",(0,o.kt)("a",{parentName:"td",href:"./../usage#errors"},"Error handling")," for more details)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clientId"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"orgId")," obtained from Dyte")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"meetingConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"ConnectionConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Meeting config object used to start the meeting (see ",(0,o.kt)("a",{parentName:"td",href:"./connection-config"},"Connection config")," for more details)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uiConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"DyteUIConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"UI configuration options (see ",(0,o.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"UI layout")," for more details)")))))}m.isMDXComponent=!0}}]);