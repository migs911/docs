"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[67921],{67921:function(t,e,i){i.r(e),i.d(e,{dyte_participant_count:function(){return r}});var n=i(13441),a=i(14878),s=i(10670);const r=class{constructor(t){(0,n.r)(this,t),this.iconPack=a.d,this.t=(0,s.u)(),this.participantCount=0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){null!=this.meeting&&null!=this.countListener&&(this.meeting.participants.joined.removeListener("participantJoined",this.countListener),this.meeting.participants.joined.removeListener("participantLeft",this.countListener))}meetingChanged(t){null!=t&&(this.countListener=()=>{this.participantCount=t.participants.joined.size+(t.meta.joined?1:0)},this.countListener(),t.participants.joined.addListener("participantJoined",this.countListener),t.participants.joined.addListener("participantLeft",this.countListener))}render(){return(0,n.h)(n.H,{tabIndex:0,role:"log","aria-label":`${this.participantCount} ${this.t("participants")}`},(0,n.h)("dyte-icon",{icon:this.iconPack.people,tabIndex:-1,"aria-hidden":!0}),this.participantCount)}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{display:inline-flex;height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);align-items:center;padding:var(--dyte-space-1, 4px);font-family:var(--dyte-font-family, sans-serif)}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:60%;width:auto}"},10670:function(t,e,i){i.d(e,{g:function(){return a},u:function(){return s}});const n={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},a=async t=>{if(null==t||"en"===t||""===t.trim())return n;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},n,await e.json()):n}catch(e){return n}},s=(t=n)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}}}]);