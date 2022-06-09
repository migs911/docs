"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[56578],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99606:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=t(55064),l=t(58215),s=["components"],u={sidebar_position:3},c="Basic Usage",d={unversionedId:"usage",id:"version-0.2.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Configure the meeting connection",source:"@site/android_versioned_docs/version-0.2.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/android/0.2.x/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.2.x/usage.mdx",tags:[],version:"0.2.x",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1654782184,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.2.3/mainSidebar",previous:{title:"Quickstart",permalink:"/android/0.2.x/quickstart"},next:{title:"Customize the meeting UI",permalink:"/android/0.2.x/customize-meeting-ui"}},p=[{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[{value:"Include Dyte&#39;s Activity in your app",id:"include-dytes-activity-in-your-app",children:[]},{value:"Include Dyte&#39;s Meeting View in your app",id:"include-dytes-meeting-view-in-your-app",children:[]}]}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("h2",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,r.kt)("p",null,"You need to pass a ",(0,r.kt)("a",{parentName:"p",href:"./reference/connection-config"},(0,r.kt)("inlineCode",{parentName:"a"},"MeetingConfig"))," to ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteMeeting"))," to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"roomName")," are mandatory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," is a static class and can be used to control and observe the meeting from anywhere in your application."),(0,r.kt)(o.Z,{groupId:"android-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.dyteclientmobile.MeetingConfig;\nimport com.dyteclientmobile.DyteMeeting;\n\nval config = MeetingConfig();\nconfig.setRoomName("<roomName>")\n      .setAuthToken("<authToken>");\n\nDyteMeeting.setup(config);\n'))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.dyteclientmobile.MeetingConfig;\nimport com.dyteclientmobile.DyteMeeting;\n\nMeetingConfig config = new MeetingConfig();\nconfig.setRoomName("<roomName>")\n      .setAuthToken("<authToken>");\n\nDyteMeeting.setup(config);\n')))),(0,r.kt)("h3",{id:"include-dytes-activity-in-your-app"},"Include Dyte's Activity in your app"),(0,r.kt)("p",null,"This will launch a fullscreen view with your meeting."),(0,r.kt)("p",null,"For this to work, ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingActivity")," needs to be registered in ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," - ",(0,r.kt)("a",{parentName:"p",href:"./installation"},"check step 3 on the Installation page"),"."),(0,r.kt)(o.Z,{groupId:"android-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.dyteclientmobile.DyteMeetingActivity;\n\nval meetingIntent = Intent(this, DyteMeetingActivity::class.java)\nstartActivity(meetingIntent)\n"))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.dyteclientmobile.DyteMeetingActivity;\n\nIntent meetingIntent = new Intent(this, DyteMeetingActivity.class);\nstartActivity(meetingIntent);\n")))),(0,r.kt)("h3",{id:"include-dytes-meeting-view-in-your-app"},"Include Dyte's Meeting View in your app"),(0,r.kt)("p",null,"Using a ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," allows you more control on how your meeting is rendered, but it comes with boilerplate code to setup and manage the view lifecycle. The main reason anyone would use a ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," based initialization is when they want the meeting to be rendered with custom dimensions and not occupy the full screen like the ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.dyteMobileSdk.DyteInstanceManager;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.main_layout);\n\n            View view = DyteMeeting.init(this,width, height);\n\n            // Example\n            ViewGroup viewgroup = findViewById(R.id.main_layout);\n            viewgroup.add(view);\n    }\n\n\n    @Override\n    protected void onActivityResult(int requestCode, int resultCode, Intent data) {\n        super.onActivityResult(requestCode, resultCode, data);\n        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {\n            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n                if (!Settings.canDrawOverlays(this)) {\n                    // SYSTEM_ALERT_WINDOW permission not granted\n                }\n            }\n        }\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onActivityResult(this, requestCode, resultCode, data);\n        }\n    }\n\n\n\n    @Override\n    protected void onPause() {\n        super.onPause();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostPause(this);\n        }\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostResume(this, this);\n        }\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.instance.onHostDestroy(this);\n        }\n        if (DyteInstanceManager.instance != null) {\n            DyteInstanceManager.unmountApplication();\n        }\n    }\n\n\n    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {\n        if (DyteInstanceManager.permissionsHandler != null) {\n            DyteInstanceManager.permissionsHandler.onRequestPermissionsResult(requestCode, permissions, grantResults);\n        }\n    }\n")))}f.isMDXComponent=!0},58215:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(67294),a=t(79443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=i.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,y=r(),v=y.tabGroupChoices,h=y.setTabGroupChoices,b=(0,i.useState)(g),k=b[0],w=b[1],I=[];if(null!=d){var C=v[d];null!=C&&C!==k&&f.some((function(e){return e.value===C}))&&w(C)}var D=function(e){var n=e.currentTarget,t=I.indexOf(n),i=f[t].value;w(i),null!=d&&(h(d,i),setTimeout((function(){var e,t,i,a,r,o,l,u;(e=n.getBoundingClientRect(),t=e.top,i=e.left,a=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,t>=0&&r<=u&&a<=l&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=I.indexOf(e.target)+1;t=I[i]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.target)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},p)},f.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,o.default)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:M,onFocus:D,onClick:D},null!=t?t:n)}))),t?(0,i.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){var i=(0,t(67294).createContext)(void 0);n.Z=i},86010:function(e,n,t){function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}t.r(n),t.d(n,{default:function(){return a}})}}]);