"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[22410],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||a;return t?i.createElement(m,l(l({ref:n},p),{},{components:t})):i.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},81435:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],o={title:"Functions to disable plugins",description:"Methods on a plugin in a meeting.",slug:"disable-plugins",tags:["web-core","plugins"]},u="Functions to disable plugins",s={unversionedId:"Plugins/disable-plugin",id:"version-0.25.x/Plugins/disable-plugin",isDocsHomePage:!1,title:"Functions to disable plugins",description:"Methods on a plugin in a meeting.",source:"@site/web-core_versioned_docs/version-0.25.x/08-Plugins/03-disable-plugin.mdx",sourceDirName:"08-Plugins",slug:"/Plugins/disable-plugins",permalink:"/web-core/0.25.x/Plugins/disable-plugins",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.25.x/08-Plugins/03-disable-plugin.mdx",tags:[{label:"web-core",permalink:"/web-core/0.25.x/tags/web-core"},{label:"plugins",permalink:"/web-core/0.25.x/tags/plugins"}],version:"0.25.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655108963,formattedLastUpdatedAt:"6/13/2022",sidebarPosition:3,frontMatter:{title:"Functions to disable plugins",description:"Methods on a plugin in a meeting.",slug:"disable-plugins",tags:["web-core","plugins"]},sidebar:"version-0.25.x/mainSidebar",previous:{title:"Functions to enable plugins",permalink:"/web-core/0.25.x/Plugins/enable-plugin"},next:{title:"DyteClient",permalink:"/web-core/0.25.x/Reference/DyteClient"}},p=[{value:"Remove Plugin View",id:"remove-plugin-view",children:[]},{value:"Deactivate Plugins",id:"deactivate-plugins",children:[]},{value:"Disable Plugins",id:"disable-plugins",children:[]}],c={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-to-disable-plugins"},"Functions to disable plugins"),(0,a.kt)("p",null,"Each plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.plugins")," object is of type ",(0,a.kt)("a",{parentName:"p",href:"./introduction"},(0,a.kt)("inlineCode",{parentName:"a"},"DytePlugin"))," and exposes the following functions to disable plugins."),(0,a.kt)("h2",{id:"remove-plugin-view"},"Remove Plugin View"),(0,a.kt)("p",null,"This method is used for cleaning up event listeners attached to an iframe. It must be used before the iframe is removed from the DOM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\n\nplugins.forEach(async (plugin: DytePlugin) => {\n    await plugin.removePluginView();\n})\n")),(0,a.kt)("h2",{id:"deactivate-plugins"},"Deactivate Plugins"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deactivate()")," method deactivates the plugin for all users in the meeting. When you deactivate a plugin, it gets removed from the active plugins map and can only be accessed from ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.plugins.all"),"."),(0,a.kt)("p",null,"The snippet below displays all active plugins and deactivate a plugin on click."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.active.toArray();\n\nplugins.forEach((plugin: DytePlugin) => {\n  const button = document.createElement('button');\n  button.innerText = `Deactivate ${plugin.name}`;\n  button.onclick = async () => {\n    await plugin.deactivate();\n  }\n  document.body.appendChild(button);\n})\n")),(0,a.kt)("p",null,"Here is another way you can deactivate a plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const plugins = meeting.plugins.active.toArray();\nconst plugin = plugins.find((p) => p.name === "YouTube");\n\nawait plugin?.deactivate();\n')),(0,a.kt)("h2",{id:"disable-plugins"},"Disable Plugins"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"disable()")," method deactivates the plugin for the current user. This does not affect other users in the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const plugins = meeting.plugins.active.toArray();\nconst plugin = plugins.find((p) => p.name === "YouTube");\n\nawait plugin?.disable();\n')))}g.isMDXComponent=!0}}]);