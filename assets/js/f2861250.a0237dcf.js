"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89807],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(61422),l=["components"],s={sidebar_position:4},c="Customize the meeting UI",u={unversionedId:"customize-meeting-ui",id:"version-0.1.x/customize-meeting-ui",isDocsHomePage:!1,title:"Customize the meeting UI",description:"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the preset used to generate the authToken, you can override them at the client end based on specific use cases or events.",source:"@site/android_versioned_docs/version-0.1.x/customize-meeting-ui.mdx",sourceDirName:".",slug:"/customize-meeting-ui",permalink:"/android/0.1.x/customize-meeting-ui",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.1.x/customize-meeting-ui.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"vi_mi",lastUpdatedAt:1649252694,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.1.30/mainSidebar",previous:{title:"Basic Usage",permalink:"/android/0.1.x/usage"},next:{title:"Advanced usage",permalink:"/android/0.1.x/advanced-usage"}},d=[{value:"Set your logo in the meeting room",id:"set-your-logo-in-the-meeting-room",children:[]},{value:"Change the color scheme to your brand / theme",id:"change-the-color-scheme-to-your-brand--theme",children:[]},{value:"Hide the bottom control bar",id:"hide-the-bottom-control-bar",children:[]},{value:"Hide individual controls from the bottom control bar",id:"hide-individual-controls-from-the-bottom-control-bar",children:[]},{value:"Hide the header bar",id:"hide-the-header-bar",children:[]},{value:"Hide individual controls from the header bar",id:"hide-individual-controls-from-the-header-bar",children:[]}],m={toc:d};function p(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customize-the-meeting-ui"},"Customize the meeting UI"),(0,i.kt)("p",null,"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/home/introduction#glossary"},(0,i.kt)("inlineCode",{parentName:"a"},"preset"))," used to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken"),", you can override them at the client end based on specific use cases or events."),(0,i.kt)("p",null,"Call the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateUIConfig")," method on ",(0,i.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,i.kt)("inlineCode",{parentName:"a"},"DyteMeeting")," instance")," and pass the ",(0,i.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},(0,i.kt)("inlineCode",{parentName:"a"},"uiConfigOptions"))," as a stringified JSON parameter to this call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.updateUIConfig(uiConfigOptions);\n")),(0,i.kt)("p",null,"Described below are various different options that you can customize in a meeting. The complete reference for UI config options can be found ",(0,i.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},"here"),"."),(0,i.kt)("p",null,"Here is a pictorial representation of all the config options defined below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(19310).Z})),(0,i.kt)("h2",{id:"set-your-logo-in-the-meeting-room"},"Set your logo in the meeting room"),(0,i.kt)("p",null,"You can change the logo in the meeting room to reflect your brand or your organization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"logo": "logoUrlString"\n')),(0,i.kt)("h2",{id:"change-the-color-scheme-to-your-brand--theme"},"Change the color scheme to your brand / theme"),(0,i.kt)("p",null,"You can change the color scheme of the meeting to reflect your brand and theme. Dyte allows you to specify four color values."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primary"),": color of the primary elements like participant name box"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secondary"),": color of the secondary elements like control bar, control buttons, hover"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"textPrimary"),": color of the text elements"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"videoBackground"),": color behind the video when the video is turned off")),(0,i.kt)("p",null,"The default values for each of these are shown in the below example. Remember to specify all the colors, otherwise this feature won't work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"colors": {\n    "primary":         "#2160FD",\n    "secondary":       "#262626",\n    "textPrimary":     "#EEEEEE",\n    "videoBackground": "#1A1A1A"\n}\n')),(0,i.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-themes.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,i.kt)("h2",{id:"hide-the-bottom-control-bar"},"Hide the bottom control bar"),(0,i.kt)("p",null,"You can hide the bottom control bar by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"controlBar")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", which means the control bar is visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"controlBar": true\n')),(0,i.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-control-bar.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,i.kt)("h2",{id:"hide-individual-controls-from-the-bottom-control-bar"},"Hide individual controls from the bottom control bar"),(0,i.kt)("p",null,"You can hide individual controls from the bottom control bar by setting their respective options to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for all controls, which means all the controls are visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"controlBarElements": {\n    "fullscreen":   true,\n    "share":        true,\n    "screenShare":  true,\n    "layout":       true,\n    "chat":         true,\n    "polls":        true,\n    "participants": true,\n    "plugins":      true\n}\n')),(0,i.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-control-bar-elements.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,i.kt)("h2",{id:"hide-the-header-bar"},"Hide the header bar"),(0,i.kt)("p",null,"You can hide the header bar by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", which means the header is visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"header": true\n')),(0,i.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-header.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,i.kt)("h2",{id:"hide-individual-controls-from-the-header-bar"},"Hide individual controls from the header bar"),(0,i.kt)("p",null,"You can hide individual elements from the header bar by setting their respective options to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for all elements, which means all the elements are visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"headerElements": {\n    "logo":             true,\n    "title":            true,\n    "participantCount": true,\n    "clock":            true\n}\n')))}p.isMDXComponent=!0},61422:function(e,t,n){var o=n(87462),r=n(63366),i=n(67294),a=n(86010),l=n(45697),s=["src","mobile"],c=function(e){var t=e.src,n=e.mobile,l=(0,r.Z)(e,s);return i.createElement("video",(0,o.Z)({className:(0,a.default)("dyte-video-showcase",n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l))};c.propTypes={src:l.string,mobile:l.bool},t.Z=c},86010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:function(){return r}})},19310:function(e,t,n){t.Z=n.p+"assets/images/mobile-meeting-ui-7d5049d1b44d22c253cee52c808fede0.png"}}]);