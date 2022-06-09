"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[92124],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,v=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:2,title:"Manage media devices",description:"Local user media guide.",slug:"/local-user/manage-media-devices",tags:["web-core","local-user","self","self events"]},s="Manage Media Devices",l={unversionedId:"Local User/manage-media-devices",id:"version-0.2/Local User/manage-media-devices",isDocsHomePage:!1,title:"Manage media devices",description:"Local user media guide.",source:"@site/web-core_versioned_docs/version-0.2/03-Local User/03-manage-media-devices.mdx",sourceDirName:"03-Local User",slug:"/local-user/manage-media-devices",permalink:"/web-core/local-user/manage-media-devices",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.2/03-Local User/03-manage-media-devices.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"local-user",permalink:"/web-core/tags/local-user"},{label:"self",permalink:"/web-core/tags/self"},{label:"self events",permalink:"/web-core/tags/self-events"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654782184,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Manage media devices",description:"Local user media guide.",slug:"/local-user/manage-media-devices",tags:["web-core","local-user","self","self events"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Events",permalink:"/web-core/local-user/events"},next:{title:"Room Metadata",permalink:"/web-core/room-metadata"}},d=[{value:"Set device",id:"set-device",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-media-devices"},"Manage Media Devices"),(0,i.kt)("p",null,"Media devices represents the hardwar    for the camera, microphone and speaker devices.\nTo get the list of media devices that are currently being used, you can use the following methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get all media devices\nconst devices = meeting.self.getAllDevices();\n// Get all audio devices\nconst audioDevices = meeting.self.getAudioDevices();\n// Get all video devices\nconst videoDevices = meeting.self.getVideoDevices();\n// Get all speakers\nconst speakerDevices = meeting.self.getSpeakerDevices();\n// Get device by ID\nconst device = meeting.self.getDeviceById('12345', 'audio');\n// Fetch current media devices being used \nconst currentDevices = meeting.self.getCurrentDevices();\n")),(0,i.kt)("h2",{id:"set-device"},"Set device"),(0,i.kt)("p",null,"To set a device as an active device, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"setDevice")," method. This takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"MediaDeviceInfo")," object, and replaces the same ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," device. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"meeting.self.setDevice(device);\n")))}m.isMDXComponent=!0}}]);