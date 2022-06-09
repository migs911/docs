"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29503],{29503:function(e,t,n){n.r(t),n.d(t,{dyte_leave_meeting:function(){return o}});var a=n(13441),i=n(10670),s=n(14878);const o=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.keyPressListener=e=>{"Escape"===e.key&&this.close()},this.iconPack=s.d,this.t=(0,i.u)(),this.canEndMeeting=!1,this.close=()=>{this.stateUpdate.emit({activeLeaveConfirmation:!1})},this.handleLeave=()=>{var e;null===(e=this.meeting)||void 0===e||e.leaveRoom()},this.handleEndMeeting=()=>{var e;null===(e=this.meeting)||void 0===e||e.participants.kickAll()}}connectedCallback(){this.meetingChanged(this.meeting),document.addEventListener("keydown",this.keyPressListener)}componentDidLoad(){}disconnectedCallback(){document.removeEventListener("keydown",this.keyPressListener)}meetingChanged(e){null!=e&&(this.canEndMeeting=e.self.permissions.kickParticipant)}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"leave-modal"},(0,a.h)("div",{class:"header"},(0,a.h)("h2",{class:"title"},this.t("leave")),(0,a.h)("dyte-button",{kind:"icon",class:"dismiss",title:this.t("Close"),onClick:()=>this.close()},(0,a.h)("dyte-icon",{icon:this.iconPack.dismiss}))),(0,a.h)("p",{class:"message"},this.t("leave_confirmation")),(0,a.h)("div",{class:"content"},(0,a.h)("div",{class:"leave-meeting"},(0,a.h)("dyte-button",{class:"cancel",title:this.t("Close"),onClick:this.close},this.t("cancel")),(0,a.h)("dyte-button",{class:"leave-meeting-btn",title:this.t("leave"),onClick:this.handleLeave},this.t("leave"))),this.canEndMeeting&&(0,a.h)("div",{class:"end-meeting"},(0,a.h)("dyte-button",{class:"end-meeting-btn",onClick:this.handleEndMeeting},this.t("end_meeting_for_all"))))))}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=".leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px)}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between}.leave-meeting dyte-button{width:100%}.leave-meeting dyte-button:last-child{margin-left:var(--dyte-space-2, 8px)}.leave-meeting-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.end-meeting{margin-top:var(--dyte-space-3, 12px);display:flex;flex-direction:row}.end-meeting .end-meeting-btn{flex-grow:1;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px)}dyte-button.dismiss{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button.dismiss:hover{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}dyte-button.cancel{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}dyte-button:hover{--tw-bg-opacity:0.6}"},10670:function(e,t,n){n.d(t,{g:function(){return i},u:function(){return s}});const a={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},i=async e=>{if(null==e||"en"===e||""===e.trim())return a;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},a,await t.json()):a}catch(t){return a}},s=(e=a)=>t=>{var n;return null!==(n=e[t])&&void 0!==n?n:t}}}]);