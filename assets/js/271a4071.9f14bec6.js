"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[55016],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},d="Installation",s={unversionedId:"installation",id:"version-0.1.x/installation",isDocsHomePage:!1,title:"Installation",description:"1. In your project, add the Maven repository https://maven.dyte.in. The repository typically goes into the build.gradle file in the root of your project.",source:"@site/android_versioned_docs/version-0.1.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/android/0.1.x/installation",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.1.x/installation.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Palash",lastUpdatedAt:1652433695,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.1.30/mainSidebar",next:{title:"Quickstart",permalink:"/android/0.1.x/quickstart"}},p=[],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your project, add the Maven repository ",(0,o.kt)("inlineCode",{parentName:"li"},"https://maven.dyte.in"),". The repository typically goes into the ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle")," file in the root of your project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'allprojects {\n    repositories {\n        google()\n        jcenter()\n        maven {\n            url "https://maven.dyte.in"\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the dependency ",(0,o.kt)("inlineCode",{parentName:"li"},"com.dyteclientmobile:sdk"),". Dependency definitions belong in the individual module ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle")," files.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    // (other dependencies)\n        implementation \"com.dyteclientmobile:sdk:+\"\n    // optionally if you app does not have support libraries\n    implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.0.0'\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"(optional) Register the activity in ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n            android:name="com.dyteclientmobile.DyteMeetingActivity"\n            android:launchMode="singleTask"\n            android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"\n            android:windowSoftInputMode="adjustResize">\n </activity>\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The below instructions are for the release builds, debug builds should work without any additional steps."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the following line importing the proguard configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")))}u.isMDXComponent=!0}}]);