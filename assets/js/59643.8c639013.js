"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[59643],{59643:function(e,t,i){i.r(t),i.d(t,{dyte_clock:function(){return o}});var n=i(13441),s=i(14878),a=i(10670);const r=e=>Math.trunc(e).toString().padStart(2,"0"),o=class{constructor(e){(0,n.r)(this,e),this.iconPack=s.d,this.t=(0,a.u)(),this.startedTime=""}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.timeout&&clearTimeout(this.timeout),"number"==typeof this.request&&cancelAnimationFrame(this.request)}meetingChanged(e){null!=e&&(this.startedTime=e.meta.meetingStartedTimestamp.toISOString())}startedTimeChanged(e){if(""!==e){const e=()=>{this.timeDiff=(Date.now()-new Date(this.startedTime).getTime())/1e3,this.timeout=setTimeout((()=>{null!=this.request&&(this.request=requestAnimationFrame(e))}),500)};this.request=requestAnimationFrame(e)}}getFormattedTime(){if(null==this.timeDiff)return null;const e=this.timeDiff;let t="";return e>=3600&&(t=`${r(e/3600)}:`),t+=`${r(e%3600/60)}:${r(e%60)}`,t}render(){return(0,n.h)(n.H,{tabIndex:0,role:"timer","aria-live":"off"},(0,n.h)("dyte-icon",{icon:this.iconPack.clock,"aria-hidden":!0,tabIndex:-1}),(0,n.h)("span",null,this.getFormattedTime()))}static get watchers(){return{meeting:["meetingChanged"],startedTime:["startedTimeChanged"]}}};o.style=":host{margin:var(--dyte-space-2, 8px);display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;font-variant-numeric:tabular-nums}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}"},10670:function(e,t,i){i.d(t,{g:function(){return s},u:function(){return a}});const n={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel"},s=async e=>{if(null==e||"en"===e||""===e.trim())return n;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},n,await t.json()):n}catch(t){return n}},a=(e=n)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}}}]);