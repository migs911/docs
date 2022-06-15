"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[33154],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36205:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),r=a(55064),o=a(58215),s=["components"],p={sidebar_position:5},c="Advanced usage",u={unversionedId:"advanced-usage",id:"version-1.2.8/advanced-usage",isDocsHomePage:!1,title:"Advanced usage",description:"Turn on the setup / preview screen",source:"@site/ios_versioned_docs/version-1.2.8/advanced-usage.mdx",sourceDirName:".",slug:"/advanced-usage",permalink:"/ios/1.2.8/advanced-usage",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.2.8/advanced-usage.mdx",tags:[],version:"1.2.8",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1655272142,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.2.8/mainSidebar",previous:{title:"Customize the meeting UI",permalink:"/ios/1.2.8/customize-meeting-ui"},next:{title:"Events",permalink:"/ios/1.2.8/events"}},d=[{value:"Turn on the setup / preview screen",id:"turn-on-the-setup--preview-screen",children:[]},{value:"Dynamic codec switching",id:"dynamic-codec-switching",children:[]},{value:"Control the meeting, and take meeting &amp; participant actions",id:"control-the-meeting-and-take-meeting--participant-actions",children:[]},{value:"Replace the meeting control buttons with your own buttons",id:"replace-the-meeting-control-buttons-with-your-own-buttons",children:[{value:"Mic control",id:"mic-control",children:[]},{value:"Camera control",id:"camera-control",children:[]},{value:"Pinning",id:"pinning",children:[]},{value:"Leave meeting",id:"leave-meeting",children:[]}]},{value:"Get list of all participants in the meeting",id:"get-list-of-all-participants-in-the-meeting",children:[]},{value:"Controlling individual participants and actions",id:"controlling-individual-participants-and-actions",children:[{value:"Get participant list",id:"get-participant-list",children:[]},{value:"Participant info and actions",id:"participant-info-and-actions",children:[]}]}],m={toc:d};function f(e){var t=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,l.kt)("h2",{id:"turn-on-the-setup--preview-screen"},"Turn on the setup / preview screen"),(0,l.kt)("p",null,"The audio / video setup screen that appears for the participant right before getting into the meeting is turned off by default. You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"showSetupScreen")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," to turn it on (default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{6}","{6}":!0},'import DyteSdk;\n\nlet  config = DyteMeetingConfig();\nmeetingConfig.roomName = "YOUR_ROOM_NAME"\nmeetingConfig.authToken = "YOUR_AUTH_TOKEN"\nmeetingConfig.showSetupScreen = true\n'))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:"{6}","{6}":!0},'@import DyteSdk;\n\nDyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\nmeetingConfig.roomName = @"YOUR_ROOM_NAME";\nmeetingConfig.authToken = @"YOUR_AUTH_TOKEN";\nmeetingConfig.showSetupScreen = YES;\n')))),(0,l.kt)("h2",{id:"dynamic-codec-switching"},"Dynamic codec switching"),(0,l.kt)("p",null,"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants' video codec support. VP9 is a superior codec but not all browsers support it. If you set ",(0,l.kt)("inlineCode",{parentName:"p"},"autoTune")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", Dyte will use VP8 only for all participants (default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{6}","{6}":!0},'import DyteSdk;\n\nlet  config = DyteMeetingConfig();\nmeetingConfig.roomName = "YOUR_ROOM_NAME"\nmeetingConfig.authToken = "YOUR_AUTH_TOKEN"\nmeetingConfig.autoTune = true\n'))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:"{6}","{6}":!0},'@import DyteSdk;\n\nDyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\nmeetingConfig.roomName = @"YOUR_ROOM_NAME";\nmeetingConfig.authToken = @"YOUR_AUTH_TOKEN";\nmeetingConfig.autoTune = YES;\n')))),(0,l.kt)("h2",{id:"control-the-meeting-and-take-meeting--participant-actions"},"Control the meeting, and take meeting & participant actions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteMeetingView")," instance (referenced as ",(0,l.kt)("inlineCode",{parentName:"p"},"dyteView"),") helps you interact with the meeting. You can take actions on the meeting as well as the participants. You can also setup custom controls to that interact with the meeting in certain ways that help you send events and messages across to other participants in the meeting. You can find the complete reference to the ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteMeetingView")," type ",(0,l.kt)("a",{parentName:"p",href:"./reference/dyte-meeting"},"here"),". Read on to understand how to use these individual controls."),(0,l.kt)("h2",{id:"replace-the-meeting-control-buttons-with-your-own-buttons"},"Replace the meeting control buttons with your own buttons"),(0,l.kt)("p",null,"Let's say you don't want to give many options to the participants in a meeting, other than the basic audio and video turning on, or you don't like our buttons and control bar design (you really should give us feedback too, in this case), or for any other reason - you just want to build your own buttons for basic meeting controls. This is possible with Dyte, with the minor caveat that you will need to put some validations at your end."),(0,l.kt)("p",null,"First thing in such a scenario would be to do away with our control bar"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'dyteView.updateUIConfig(["controlBar": false])\n'))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'[dyteView updateUIConfig:@{ @"controlBar": false }];\n')))),(0,l.kt)("p",null,"Now you can perform the basic functions of a meeting, like below. These functions can be used as the ",(0,l.kt)("inlineCode",{parentName:"p"},"IBAction")," handlers of your own buttons."),(0,l.kt)("h3",{id:"mic-control"},"Mic control"),(0,l.kt)("p",null,"To turn off the mic"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().disableAudio()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] disableAudio];\n")))),(0,l.kt)("p",null,"To turn on the mic"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().enableAudio()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] enableAudio];\n")))),(0,l.kt)("h3",{id:"camera-control"},"Camera control"),(0,l.kt)("p",null,"To turn off the camera"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().disableVideo()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] disableVideo];\n")))),(0,l.kt)("p",null,"To turn on the camera"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().enableVideo()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] enableVideo];\n")))),(0,l.kt)("h3",{id:"pinning"},"Pinning"),(0,l.kt)("p",null,"To pin your video to the meeting grid"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().selfPin()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] selfPin];\n")))),(0,l.kt)("p",null,"To unpin your video from the meeting grid"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().selfUnpin()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] selfUnpin];\n")))),(0,l.kt)("h3",{id:"leave-meeting"},"Leave meeting"),(0,l.kt)("p",null,"To leave meeting"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"DyteSelfParticipant.sharedInstance().leaveRoom()\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[DyteSelfParticipant sharedInstance] leaveRoom];\n")))),(0,l.kt)("h2",{id:"get-list-of-all-participants-in-the-meeting"},"Get list of all participants in the meeting"),(0,l.kt)("p",null,"You can get a list of all participants in the meeting using the ",(0,l.kt)("inlineCode",{parentName:"p"},"participants")," property of ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteParticipants"),"."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let participants = DyteParticipants.sharedInstance().participants\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSArray *participants = [DyteParticipants sharedInstance].participants;\n")))),(0,l.kt)("p",null,"sets ",(0,l.kt)("inlineCode",{parentName:"p"},"participants")," to an NSArray whose elements are instances of type ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),", whose prototype is defined in the reference section. There will be exactly one element of type ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which refers to the current participant."),(0,l.kt)("h2",{id:"controlling-individual-participants-and-actions"},"Controlling individual participants and actions"),(0,l.kt)("p",null,"Dyte client SDK provide methods and properties to help you control participant actions and certain UI elements. This could include actions that affect the participant themselves as well as other participants (like a host with privileged permissions may want to control the video of other participants). This section defines all the possible properties and actions that can be taken."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Remember that despite the functions being available to every participant via the client SDK, they will not take affect until coupled with the right permissions for the participant who intends to use these."))),(0,l.kt)("h3",{id:"get-participant-list"},"Get participant list"),(0,l.kt)("p",null,"To get a list of all participants, use ",(0,l.kt)("inlineCode",{parentName:"p"},"DyteParticipants.sharedInstance.participants"),": it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"NSArray")," where all meeting participants are ",(0,l.kt)("a",{parentName:"p",href:"./reference/participant"},(0,l.kt)("inlineCode",{parentName:"a"},"DyteParticipant"))," and the current participant is ",(0,l.kt)("a",{parentName:"p",href:"./reference/self-participant"},(0,l.kt)("inlineCode",{parentName:"a"},"DyteSelfParticipant")),"."),(0,l.kt)("h3",{id:"participant-info-and-actions"},"Participant info and actions"),(0,l.kt)("p",null,"Once you get the array of participants as mentioned above, you can iterate over that and get certain info about every participant."),(0,l.kt)("p",null,"We will consider the following iterator for the next section."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"for p in DyteParticipants.sharedInstance().participants {\n    // participant specific code goes here\n}\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"for (DyteParticipant *p in [DyteParticipants sharedInstance].participants) {\n    // participant specific code goes here\n}\n")))),(0,l.kt)("h4",{id:"peer-id"},"Peer ID"),(0,l.kt)("p",null,"Get unique ID for every participant. This ID is generated by Dyte when a participant joins the meeting. This ID is used for referring to a participant within Dyte."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Even if the same participant, using the same auth token, rejoins the meeting, for example by refreshing the page / app or due to connection drop, the peer ID would be refreshed in that case."))),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let peerID: String = p.id\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString *peerID = p.id;\n")))),(0,l.kt)("p",null,"sets the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"peerID")," to a UUID string."),(0,l.kt)("h4",{id:"client-specific-id"},"Client specific ID"),(0,l.kt)("p",null,"Get the client specific ID as you have specified in the add participant API call. You may want to decide exposing custom controls or build other business logic based on this identifier, which helps you find the participant info in your system."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let clientSpecificID: String = p.clientSpecificId\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString *clientSpecificID = p.clientSpecificId;\n")))),(0,l.kt)("h4",{id:"participant-name"},"Participant name"),(0,l.kt)("p",null,"Get the participant name as you have specified in the add participant API call. The participant may have changed this name, if enabled."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let name: String = p.name\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString *name = p.name;\n")))),(0,l.kt)("h4",{id:"participant-thumbnail-photo--avatar"},"Participant thumbnail photo / avatar"),(0,l.kt)("p",null,"Get the participant photo as you have specified in the add participant API call."),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let picture: String = p.picture\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString *picture = p.picture;\n")))),(0,l.kt)("h4",{id:"check-if-participants-audio-is-on"},"Check if participant's audio is on"),(0,l.kt)("p",null,"To check whether a participant's audio is on (mic is turned on), you can use"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let audio: Boolean = p.audioEnabled\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL audio = p.audioEnabled;\n")))),(0,l.kt)("p",null,"which sets the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," to a boolean specifying if the mic is on or not."),(0,l.kt)("h4",{id:"check-if-participants-video-is-on"},"Check if participant's video is on"),(0,l.kt)("p",null,"To check whether a participant's video is on (camera is turned on), you can use"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let video: Boolean = p.videoEnabled\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL video = p.videoEnabled;\n")))),(0,l.kt)("p",null,"which sets the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," to a boolean specifying if the camera is on or not."),(0,l.kt)("h4",{id:"check-if-the-participant-is-pinned-to-the-grid"},"Check if the participant is pinned to the grid"),(0,l.kt)("p",null,"To check whether a participant's video is pinned to the meeting grid; by the host, by the user, by the preset, or by any other mechanism; you can use"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let pinned: Boolean = p.isPinned\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL pinned = p.isPinned;\n")))),(0,l.kt)("p",null,"which sets the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pinned")," to a boolean specifying whether the video is pinned or not."),(0,l.kt)("h4",{id:"check-if-the-participant-is-sharing-screen"},"Check if the participant is sharing screen"),(0,l.kt)("p",null,"To check whether a participant's screen is being shared, you can use"),(0,l.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let screensharing: Boolean = p.isScreensharing\n"))),(0,l.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL screensharing = p.isScreensharing;\n")))),(0,l.kt)("p",null,"which sets the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"screensharing")," to a boolean specifying whether the participant's screen is being shared or not."))}f.isMDXComponent=!0},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),i=a(79443);var l=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(e){var t,a=e.lazy,i=e.block,p=e.defaultValue,c=e.values,u=e.groupId,d=e.className,m=n.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=l(),v=h.tabGroupChoices,b=h.setTabGroupChoices,k=(0,n.useState)(g),y=k[0],w=k[1],T=[];if(null!=u){var N=v[u];null!=N&&N!==y&&f.some((function(e){return e.value===N}))&&w(N)}var I=function(e){var t=e.currentTarget,a=T.indexOf(t),n=f[a].value;w(n),null!=u&&(b(u,n),setTimeout((function(){var e,a,n,i,l,r,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,l=e.right,r=window,o=r.innerHeight,p=r.innerWidth,a>=0&&l<=p&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.target)+1;a=T[n]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.target)-1;a=T[i]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":i},d)},f.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.default)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:I,onClick:I},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},86010:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.r(t),a.d(t,{default:function(){return i}})}}]);