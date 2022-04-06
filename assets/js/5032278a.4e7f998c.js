"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5212],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8056:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=n(61422),l=["components"],s={sidebar_position:4},c="Customize the meeting UI",d={unversionedId:"customize-meeting-ui",id:"version-0.1.x/customize-meeting-ui",isDocsHomePage:!1,title:"Customize the meeting UI",description:"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the preset used to generate the authToken, you can override them at the client end based on specific use cases or events.",source:"@site/flutter_versioned_docs/version-0.1.x/customize-meeting-ui.mdx",sourceDirName:".",slug:"/customize-meeting-ui",permalink:"/flutter/0.1.x/customize-meeting-ui",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.1.x/customize-meeting-ui.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Palash",lastUpdatedAt:1649253592,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.1.1/mainSidebar",previous:{title:"Basic Usage",permalink:"/flutter/0.1.x/usage"},next:{title:"Advanced usage",permalink:"/flutter/0.1.x/advanced-usage"}},m=[{value:"Set your logo in the meeting room",id:"set-your-logo-in-the-meeting-room",children:[]},{value:"Change the color scheme to your brand / theme",id:"change-the-color-scheme-to-your-brand--theme",children:[]},{value:"Adjust the meeting size to a custom container",id:"adjust-the-meeting-size-to-a-custom-container",children:[]},{value:"Make the meeting fit your container size (dynamic)",id:"make-the-meeting-fit-your-container-size-dynamic",children:[]},{value:"Hide the bottom control bar",id:"hide-the-bottom-control-bar",children:[]},{value:"Hide individual controls from the bottom control bar",id:"hide-individual-controls-from-the-bottom-control-bar",children:[]},{value:"Hide the header bar",id:"hide-the-header-bar",children:[]},{value:"Hide individual controls from the header bar",id:"hide-individual-controls-from-the-header-bar",children:[]}],u={toc:m};function p(e){var t=e.components,s=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customize-the-meeting-ui"},"Customize the meeting UI"),(0,r.kt)("p",null,"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/home/introduction#glossary"},(0,r.kt)("inlineCode",{parentName:"a"},"preset"))," used to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken"),", you can override them at the client end based on specific use cases or events."),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateUIConfig")," method on ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"meeting")," instance")," and pass the ",(0,r.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},(0,r.kt)("inlineCode",{parentName:"a"},"uiConfigOptions"))," as a parameter to this call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig(uiConfigOptions);\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"uiConfigOptions")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"<String, dynamic>"),"."),(0,r.kt)("p",null,"Described below are various different options that you can customize in a meeting. The complete reference for UI config options can be found ",(0,r.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},"here"),"."),(0,r.kt)("p",null,"Here is a pictorial representation of all the config options defined below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(19310).Z})),(0,r.kt)("h2",{id:"set-your-logo-in-the-meeting-room"},"Set your logo in the meeting room"),(0,r.kt)("p",null,"You can change the logo in the meeting room to reflect your brand or your organization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({ 'logo': '<logoUrlString>' });\n")),(0,r.kt)("h2",{id:"change-the-color-scheme-to-your-brand--theme"},"Change the color scheme to your brand / theme"),(0,r.kt)("p",null,"You can change the color scheme of the meeting to reflect your brand and theme. Dyte allows you to specify four color values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primary"),": color of the primary elements like participant name box"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secondary"),": color of the secondary elements like control bar, control buttons, hover"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"textPrimary"),": color of the text elements"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"videoBackground"),": color behind the video when the video is turned off")),(0,r.kt)("p",null,"The default values for each of these are shown in the below example. Remember to specify all the colors, otherwise this feature won't work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({\n    'colors': {\n        'primary':         '#2160FD',\n        'secondary':       '#262626',\n        'textPrimary':     '#EEEEEE',\n        'videoBackground': '#1A1A1A'\n    }\n});\n")),(0,r.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-themes.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"adjust-the-meeting-size-to-a-custom-container"},"Adjust the meeting size to a custom container"),(0,r.kt)("p",null,"The default behaviour of a meeting on Dyte is to take up the full viewport. However, if you want to customize the size of a meeting to fit within a certain container or ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensions")," as numerical values which are taken as pixels (",(0,r.kt)("inlineCode",{parentName:"p"},"px")," in CSS). Remember to specify both, otherwise this feature won't work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({\n    'dimensions': {\n        'width':  400,\n        'height': 800\n    }\n});\n")),(0,r.kt)("h2",{id:"make-the-meeting-fit-your-container-size-dynamic"},"Make the meeting fit your container size (dynamic)"),(0,r.kt)("p",null,"Similarly, if you want to make the size of a meeting dynamically fit to within the bounds of its parent container or ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensions")," and set the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"fillParent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({\n    'dimensions': {\n        'mode': 'fillParent'\n    }\n});\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use either the ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," OR the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensions"),", but not both."))),(0,r.kt)("h2",{id:"hide-the-bottom-control-bar"},"Hide the bottom control bar"),(0,r.kt)("p",null,"You can hide the bottom control bar by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"controlBar")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", which means the control bar is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({ 'controlBar': true });\n")),(0,r.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-control-bar.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"hide-individual-controls-from-the-bottom-control-bar"},"Hide individual controls from the bottom control bar"),(0,r.kt)("p",null,"You can hide individual controls from the bottom control bar by setting their respective options to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for all controls, which means all the controls are visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({\n    'controlBarElements': {\n        'fullscreen':   true,\n        'share':        true,\n        'screenShare':  true,\n        'layout':       true,\n        'chat':         true,\n        'polls':        true,\n        'participants': true,\n        'plugins':      true\n    }\n});\n")),(0,r.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-control-bar-elements.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"hide-the-header-bar"},"Hide the header bar"),(0,r.kt)("p",null,"You can hide the header bar by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", which means the header is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({ 'header': true });\n")),(0,r.kt)(a.Z,{src:"/ui-customizations/mobile/mobile-header.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"hide-individual-controls-from-the-header-bar"},"Hide individual controls from the header bar"),(0,r.kt)("p",null,"You can hide individual elements from the header bar by setting their respective options to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for all elements, which means all the elements are visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.updateUIConfig({\n    'headerElements': {\n        'logo':             true,\n        'title':            true,\n        'participantCount': true,\n        'clock':            true\n    }\n});\n")))}p.isMDXComponent=!0},61422:function(e,t,n){var i=n(87462),o=n(63366),r=n(67294),a=n(86010),l=n(45697),s=["src","mobile"],c=function(e){var t=e.src,n=e.mobile,l=(0,o.Z)(e,s);return r.createElement("video",(0,i.Z)({className:(0,a.default)("dyte-video-showcase",n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l))};c.propTypes={src:l.string,mobile:l.bool},t.Z=c},86010:function(e,t,n){function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{default:function(){return o}})},19310:function(e,t,n){t.Z=n.p+"assets/images/mobile-meeting-ui-7d5049d1b44d22c253cee52c808fede0.png"}}]);