"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[38600],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:1,title:"Introduction",description:"Local user setup guide.",slug:"/local-user/introduction",tags:["web-core","local-user","self"]},s="Introduction - Local User",d={unversionedId:"LocalUser/introduction",id:"version-0.24.x/LocalUser/introduction",isDocsHomePage:!1,title:"Introduction",description:"Local user setup guide.",source:"@site/web-core_versioned_docs/version-0.24.x/03-LocalUser/01-introduction.mdx",sourceDirName:"03-LocalUser",slug:"/local-user/introduction",permalink:"/web-core/0.24.x/local-user/introduction",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.24.x/03-LocalUser/01-introduction.mdx",tags:[{label:"web-core",permalink:"/web-core/0.24.x/tags/web-core"},{label:"local-user",permalink:"/web-core/0.24.x/tags/local-user"},{label:"self",permalink:"/web-core/0.24.x/tags/self"}],version:"0.24.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655108963,formattedLastUpdatedAt:"6/13/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",description:"Local user setup guide.",slug:"/local-user/introduction",tags:["web-core","local-user","self"]},sidebar:"version-0.24.x/mainSidebar",previous:{title:"Installation",permalink:"/web-core/0.24.x/installation"},next:{title:"Events",permalink:"/web-core/0.24.x/local-user/events"}},u=[{value:"Properties",id:"properties",children:[]},{value:"Change default audio / video settings",id:"change-default-audio--video-settings",children:[]},{value:"Setup tracks",id:"setup-tracks",children:[]},{value:"Change the name of the local user",id:"change-the-name-of-the-local-user",children:[]},{value:"Mute/Unmute microphone",id:"muteunmute-microphone",children:[]},{value:"Enable/Disable camera",id:"enabledisable-camera",children:[]},{value:"Enable / Disable Screen share",id:"enable--disable-screen-share",children:[]},{value:"Preview media",id:"preview-media",children:[{value:"Enable / Disable Audio and Video Preview",id:"enable--disable-audio-and-video-preview",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction---local-user"},"Introduction - Local User"),(0,r.kt)("p",null,"The local user has the methods and properties on the local user media controls. Accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," key within the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting")," object, the local user also contains the access control (permissions) and theming-related properties that will help to render the meeting state."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Here is a list of properties that local user provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": The ID of the participant pertaining to local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Contains Name of the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSpecificId"),": Identifier provided by the developer while adding the participant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomJoined"),": A boolean value indicating if the local user has joined the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preview"),": The local audio and video stream for the preview purpose (it will be populated after calling ",(0,r.kt)("inlineCode",{parentName:"li"},"enablePreview"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions"),": The permissions related to various capabilities within a meeting context for the local user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mediaPermissions"),": The current audio and video permissions given by the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audioTrack"),": The audio track for the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"videoTrack"),": The video track for the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenShareTracks"),": The screen share video and audio tracks for the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audioEnabled"),": A boolean value indicating if the audio currently enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"videoEnabled"),": A boolean value indicating if the video currently enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenShareEnabled"),": A boolean value indicating if the screen share is currently enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suggestedTheme"),": The suggested theme for building the user interface.")),(0,r.kt)("h2",{id:"change-default-audio--video-settings"},"Change default audio / video settings"),(0,r.kt)("p",null,"By default as soon as you join the meeting the SDK will produce your video and audio streams.\nTo change this behaviour use the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const meeting = await DyteClient.init({\n    roomName,\n    authToken,\n    defaults: {\n        audio: false, // Disable user's audio by default\n        video: true, // Enable user's video by default\n    },\n});\n")),(0,r.kt)("h2",{id:"setup-tracks"},"Setup tracks"),(0,r.kt)("p",null,"If audio and video tracks are disabled during the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteClient")," initialization process. You can setup the audio and video tracks by simply calling setup tracks method like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.setupTracks({ audio: true, video: true });\n")),(0,r.kt)("h2",{id:"change-the-name-of-the-local-user"},"Change the name of the local user"),(0,r.kt)("p",null,"Change the user's name by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setName")," method. The changed name will reflect across all participants ONLY if the change happens before joining the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await meeting.self.setName('New Name');\n")),(0,r.kt)("h2",{id:"muteunmute-microphone"},"Mute/Unmute microphone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Mute Audio\nawait meeting.self.disableAudio();\n// Unmute Audio\nawait meeting.self.enableAudio();\n// Get current status\nmeeting.self.audioEnabled;\n")),(0,r.kt)("h2",{id:"enabledisable-camera"},"Enable/Disable camera"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Disable Video\nawait meeting.self.disableVideo();\n// Enable Video\nawait meeting.self.enableVideo();\n// Get current status\nmeeting.self.videoEnabled;\n")),(0,r.kt)("h2",{id:"enable--disable-screen-share"},"Enable / Disable Screen share"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Enable Screenshare\nawait meeting.self.enableScreenShare();\n// Disable Screenshare\nawait meeting.self.disableScreenShare();\n// Get current status\nmeeting.self.screenShareEnabled;\n")),(0,r.kt)("h2",{id:"preview-media"},"Preview media"),(0,r.kt)("p",null,"Preview methods can be used to test the video / audio stream before sharing them with the meeting."),(0,r.kt)("h3",{id:"enable--disable-audio-and-video-preview"},"Enable / Disable Audio and Video Preview"),(0,r.kt)("p",null,"Enable a preview for audio and video. This will populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," property for the local user.\nYou can check if the streams are enabled in the preview using ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.self.preview.audioEnabled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.self.preview.videoEnabled"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Enable preview\nawait meeting.self.enablePreview();\n// Disable preview\nawait meeting.self.disablePreview();\n// Enable only audio preview\nawait meeting.self.enablePreview({ video: false });\n// Enable only video preview\nawait meeting.self.enablePreview({ audio: false });\n")))}p.isMDXComponent=!0}}]);