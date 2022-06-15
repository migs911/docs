"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[50156],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,g=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:1},c="DyteMeeting (React component)",p={unversionedId:"reference/dyte-meeting",id:"version-0.15.x/reference/dyte-meeting",isDocsHomePage:!1,title:"DyteMeeting (React component)",description:"DyteMeeting is a React component that can be included in your React application to show the Dyte Meeting UI.",source:"@site/react_versioned_docs/version-0.15.x/reference/dyte-meeting.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting",permalink:"/react/0.15.x/reference/dyte-meeting",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.15.x/reference/dyte-meeting.mdx",tags:[],version:"0.15.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655272142,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.15.x/mainSidebar",previous:{title:"Sample app",permalink:"/react/0.15.x/sample-app"},next:{title:"Connection Config",permalink:"/react/0.15.x/reference/connection-config"}},d=[{value:"Props",id:"props",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeeting-react-component"},"DyteMeeting (React component)"),(0,i.kt)("p",null,"DyteMeeting is a React component that can be included in your React application to show the Dyte Meeting UI."),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onInit"),(0,i.kt)("td",{parentName:"tr",align:null},"function(meeting: DyteMeeting)"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"On successful meeting creation, returns the meeting to the callback function provided (see ",(0,i.kt)("a",{parentName:"td",href:"./meeting"},"Meeting object")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onError"),(0,i.kt)("td",{parentName:"tr",align:null},"function(error: Error)"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"On error during meeting creation, returns the relevant error to the callback function provided (see ",(0,i.kt)("a",{parentName:"td",href:"./../usage#errors"},"Error handling")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"orgId")," obtained from Dyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"ConnectionConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting config object used to start the meeting (see ",(0,i.kt)("a",{parentName:"td",href:"./connection-config"},"Connection config")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uiConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"DyteUIConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"UI configuration options (see ",(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"UI layout")," for more details)")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The version of the Dyte client SDK being used")))))}m.isMDXComponent=!0}}]);