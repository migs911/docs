"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69042],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={title:"Room Metadata",description:"All metadata pertaining to a meeting.",slug:"room-metadata",tags:["web-core","room-metadata"]},l="Room Metadata",m={unversionedId:"room-metadata",id:"version-0.25.x/room-metadata",isDocsHomePage:!1,title:"Room Metadata",description:"All metadata pertaining to a meeting.",source:"@site/web-core_versioned_docs/version-0.25.x/04-room-metadata.mdx",sourceDirName:".",slug:"/room-metadata",permalink:"/web-core/0.25.x/room-metadata",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.25.x/04-room-metadata.mdx",tags:[{label:"web-core",permalink:"/web-core/0.25.x/tags/web-core"},{label:"room-metadata",permalink:"/web-core/0.25.x/tags/room-metadata"}],version:"0.25.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655108963,formattedLastUpdatedAt:"6/13/2022",sidebarPosition:4,frontMatter:{title:"Room Metadata",description:"All metadata pertaining to a meeting.",slug:"room-metadata",tags:["web-core","room-metadata"]},sidebar:"version-0.25.x/mainSidebar",previous:{title:"Manage media devices",permalink:"/web-core/0.25.x/local-user/manage-media-devices"},next:{title:"Participants",permalink:"/web-core/0.25.x/Participants/participants"}},s=[],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"room-metadata"},"Room Metadata"),(0,r.kt)("p",null,"All metadata pertaining to a meeting is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.meta"),". This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomName"),": The name of the room the current participant is connected to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"joined"),": Indicates whether the participant has successfully joined the room successfully or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomType"),": Indicates the meeting is a group-call or a webinar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"meetingTitle"),": The title of the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"meetingStartedTimestamp"),": The timestamp when the meeting started.")),(0,r.kt)("p",null,"For example, if you want to get the name of the room the current participant is connected to, you can do so by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructuring the metadata to get roomName and joined\nconst { roomName, joined } = meeting.meta;\n\nif (joined) {\n    console.log(`The local user has joined room ${roomName}.`);\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object also emits for indicating the change in the connection state of the room. For example, you can listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"connected")," event to know when the local user has successfully joined the room, and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected")," event to find out if the local user's connection has dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.meta.on('connected', () => {\n    console.log(`The local user has successfully joined the room ${meeting.meta.roomName}`);\n});\n\nmeeting.meta.on('disconnected', () => {\n    console.log(`The local user got disconnected from the room ${meeting.meta.roomName}`);\n});\n")))}p.isMDXComponent=!0}}]);