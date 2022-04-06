"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[31743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:7},l="DyteMeeting.Events",s={unversionedId:"reference/dyte-meeting-events",id:"version-0.15.x/reference/dyte-meeting-events",isDocsHomePage:!1,title:"DyteMeeting.Events",description:"DyteMeeting.Events is an enum that enumerates different events that can occur in between a meeting.",source:"@site/javascript_versioned_docs/version-0.15.x/reference/dyte-meeting-events.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting-events",permalink:"/javascript/0.15.x/reference/dyte-meeting-events",editUrl:"https://github.com/dyte-in/docs/tree/main/javascript_versioned_docs/version-0.15.x/reference/dyte-meeting-events.mdx",tags:[],version:"0.15.x",lastUpdatedBy:"Palash",lastUpdatedAt:1649253592,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-0.15.x/mainSidebar",previous:{title:"DyteErrors",permalink:"/javascript/0.15.x/reference/dyte-errors"},next:{title:"DyteUIConfig",permalink:"/javascript/0.15.x/reference/dyte-ui-config"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeetingevents"},"DyteMeeting.Events"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting.Events")," is an enum that enumerates different events that can occur in between a meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"DyteMeeting.Events {\n    connect,\n    meetingJoined,\n    disconnect,\n    meetingEnded,\n    participantJoin,\n    participantLeave,\n    chatMessage,\n    roomMessage,\n    message,\n    activeSpeaker,\n    recordingStarted,\n    recordingStopped,\n    localMediaConnected\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Triggered when"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connect"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant has connected to the meeting but hasn\u2019t started producing or consuming content streams - think of this as establishing a successful connection to the meeting and nothing else")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingJoined"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant actually joins the meeting, and can start producing as well as consuming content streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disconnect"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant gets disconnected from the meeting for any reason")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingEnded"),(0,i.kt)("td",{parentName:"tr",align:null},"the meeting is ended by the host or by the organization (as an admin function)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantJoin"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant joins the meeting ("join" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"meetingJoined")," event)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantLeave"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant disconnects from the meeting ("disconnect" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"disconnect")," event)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chatMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant receives a chat message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"roomMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"a custom message is broadcast to all participants in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"a custom message is targeted to a particular participant in the meeting and only the target participant receives this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"activeSpeaker"),(0,i.kt)("td",{parentName:"tr",align:null},"the active speaker in the meeting changes - active speaker is the participant whose audio level has most recently been the highest (kind of like LRU with the selection factor being audio level)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"recordingStarted"),(0,i.kt)("td",{parentName:"tr",align:null},"a recording of the meeting is started by the host or by the organization (as an admin function)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"recordingStopped"),(0,i.kt)("td",{parentName:"tr",align:null},"a recording of the meeting is stopped by the host or by the organization (as an admin function)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"localMediaConnected"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant's local media input devices (camera, mic) are initialized and connected to the meeting for the first time")))))}m.isMDXComponent=!0}}]);