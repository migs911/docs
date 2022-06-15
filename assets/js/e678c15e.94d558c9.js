"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[10439],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(n),l=i,m=f["".concat(c,".").concat(l)]||f[l]||d[l]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function l(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={sidebar_position:4,web_core_version:"0.26.0"},c=void 0,s={unversionedId:"Reference/DyteParticipantMap",id:"version-0.26.x/Reference/DyteParticipantMap",isDocsHomePage:!1,title:"DyteParticipantMap",description:"This is a map of participants, indexed by participant.id (a participant's peer ID).",source:"@site/web-core_versioned_docs/version-0.26.x/Reference/DyteParticipantMap.md",sourceDirName:"Reference",slug:"/Reference/DyteParticipantMap",permalink:"/web-core/Reference/DyteParticipantMap",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/Reference/DyteParticipantMap.md",tags:[],version:"0.26.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655272142,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,web_core_version:"0.26.0"},sidebar:"version-0.26.x/mainSidebar",previous:{title:"DyteParticipants",permalink:"/web-core/Reference/DyteParticipants"},next:{title:"DyteParticipant",permalink:"/web-core/Reference/DyteParticipant"}},u=[],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_DyteParticipantMap"}),(0,a.kt)("p",null,"This is a map of participants, indexed by ",(0,a.kt)("inlineCode",{parentName:"p"},"participant.id")," (a participant's peer ID).\nThis map emits an event whenever a participant present in the map emits an event.\nFor example, when a participant is added to this map, a ",(0,a.kt)("inlineCode",{parentName:"p"},"participantJoined")," event is\nemitted from the map. When a participant object emits an event ",(0,a.kt)("inlineCode",{parentName:"p"},"videoUpdate"),", the map\nre-emits that event (provided the participant is present in the map)."))}f.isMDXComponent=!0}}]);