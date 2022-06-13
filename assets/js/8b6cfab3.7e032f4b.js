"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[80290],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),s=o,f=d["".concat(m,".").concat(s)]||d[s]||p[s]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35297:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={sidebar_position:14,web_core_version:"0.25.0"},m=void 0,c={unversionedId:"Reference/DyteRemote",id:"version-0.25.x/Reference/DyteRemote",isDocsHomePage:!1,title:"DyteRemote",description:"This module provides the ability to control a remotely shared screen using mouse and keyboard.",source:"@site/web-core_versioned_docs/version-0.25.x/Reference/DyteRemote.md",sourceDirName:"Reference",slug:"/Reference/DyteRemote",permalink:"/web-core/0.25.x/Reference/DyteRemote",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.25.x/Reference/DyteRemote.md",tags:[],version:"0.25.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655108963,formattedLastUpdatedAt:"6/13/2022",sidebarPosition:14,frontMatter:{sidebar_position:14,web_core_version:"0.25.0"},sidebar:"version-0.25.x/mainSidebar",previous:{title:"DyteThemePreset",permalink:"/web-core/0.25.x/Reference/DyteThemePreset"},next:{title:"DyteRecording",permalink:"/web-core/0.25.x/Reference/DyteRecording"}},u=[{value:"meeting.remote.requestControl(peerId) \u21d2",id:"meetingremoterequestcontrolpeerid-",children:[]},{value:"meeting.remote.acceptControl(requestId)",id:"meetingremoteacceptcontrolrequestid",children:[]},{value:"meeting.remote.endControl()",id:"meetingremoteendcontrol",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_DyteRemote"}),(0,a.kt)("p",null,"This module provides the ability to control a remotely shared screen using mouse and keyboard.\nMethods are available to request, accept and end control of shared screen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DyteRemote"},"DyteRemote"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DyteRemote+requestControl"},".requestControl(peerId)")," \u21d2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DyteRemote+acceptControl"},".acceptControl(requestId)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DyteRemote+endControl"},".endControl()"))))),(0,a.kt)("a",{name:"module_DyteRemote+requestControl"}),(0,a.kt)("h3",{id:"meetingremoterequestcontrolpeerid-"},"meeting.remote.requestControl(peerId) \u21d2"),(0,a.kt)("p",null,"Sends a request to a peer for remote control."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DyteRemote"},(0,a.kt)("code",null,"DyteRemote")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": request identifier for the control request.  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"peerId"),(0,a.kt)("td",{parentName:"tr",align:null},"The peer that needs to receive the remote control request")))),(0,a.kt)("a",{name:"module_DyteRemote+acceptControl"}),(0,a.kt)("h3",{id:"meetingremoteacceptcontrolrequestid"},"meeting.remote.acceptControl(requestId)"),(0,a.kt)("p",null,"Accepts a remote control request from a peer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DyteRemote"},(0,a.kt)("code",null,"DyteRemote")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requestId"),(0,a.kt)("td",{parentName:"tr",align:null},"The request identifier that needs to be accepted")))),(0,a.kt)("a",{name:"module_DyteRemote+endControl"}),(0,a.kt)("h3",{id:"meetingremoteendcontrol"},"meeting.remote.endControl()"),(0,a.kt)("p",null,"End an active remote control."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DyteRemote"},(0,a.kt)("code",null,"DyteRemote"))))}d.isMDXComponent=!0}}]);