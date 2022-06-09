"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[82495],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),v=o,f=p["".concat(l,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17655:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:2,title:"Events",description:"Local user events guide.",slug:"/local-user/events",tags:["web-core","local-user","self","self events"]},l="Local User - Events",c={unversionedId:"Local User/events",id:"version-0.2/Local User/events",isDocsHomePage:!1,title:"Events",description:"Local user events guide.",source:"@site/react-native-core_versioned_docs/version-0.2/03-Local User/02-events.mdx",sourceDirName:"03-Local User",slug:"/local-user/events",permalink:"/react-native-core/local-user/events",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/03-Local User/02-events.mdx",tags:[{label:"web-core",permalink:"/react-native-core/tags/web-core"},{label:"local-user",permalink:"/react-native-core/tags/local-user"},{label:"self",permalink:"/react-native-core/tags/self"},{label:"self events",permalink:"/react-native-core/tags/self-events"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654782184,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Events",description:"Local user events guide.",slug:"/local-user/events",tags:["web-core","local-user","self","self events"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Introduction",permalink:"/react-native-core/local-user/introduction"},next:{title:"Manage media devices",permalink:"/react-native-core/local-user/manage-media-devices"}},u=[{value:"Video update",id:"video-update",children:[]},{value:"Audio update",id:"audio-update",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-user---events"},"Local User - Events"),(0,a.kt)("p",null,"You can subscribe to data changes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDyteSelector")," hook"),(0,a.kt)("h3",{id:"video-update"},"Video update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the video using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableVideo")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"disableVideo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const videoEnabled = useDyteSelector((m) => m.self.videoEnabled);\n")),(0,a.kt)("h3",{id:"audio-update"},"Audio update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the audio using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableAudio")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"disableAudio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const videoEnabled = useDyteSelector((m) => m.self.audioEnabled);\n")))}p.isMDXComponent=!0}}]);