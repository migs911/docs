"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[21242],{21242:function(e,t,i){i.r(t),i.d(t,{dyte_audio_visualizer:function(){return h}});var s,a=i(13441),n=i(14878),r=o;function o(){}o.mixin=function(e){var t=e.prototype||e;t.isWildEmitter=!0,t.on=function(e,t,i){this.callbacks=this.callbacks||{};var s=3===arguments.length,a=s?arguments[1]:void 0,n=s?arguments[2]:arguments[1];return n._groupName=a,(this.callbacks[e]=this.callbacks[e]||[]).push(n),this},t.once=function(e,t,i){var s=this,a=3===arguments.length,n=a?arguments[1]:void 0,r=a?arguments[2]:arguments[1];function o(){s.off(e,o),r.apply(this,arguments)}return this.on(e,n,o),this},t.releaseGroup=function(e){var t,i,s,a;for(t in this.callbacks=this.callbacks||{},this.callbacks)for(i=0,s=(a=this.callbacks[t]).length;i<s;i++)a[i]._groupName===e&&(a.splice(i,1),i--,s--);return this},t.off=function(e,t){this.callbacks=this.callbacks||{};var i,s=this.callbacks[e];return s?1===arguments.length?(delete this.callbacks[e],this):(-1!==(i=s.indexOf(t))&&(s.splice(i,1),0===s.length&&delete this.callbacks[e]),this):this},t.emit=function(e){this.callbacks=this.callbacks||{};var t,i,s,a=[].slice.call(arguments,1),n=this.callbacks[e],r=this.getWildcardCallbacks(e);if(n)for(t=0,i=(s=n.slice()).length;t<i&&s[t];++t)s[t].apply(this,a);if(r)for(i=r.length,t=0,i=(s=r.slice()).length;t<i&&s[t];++t)s[t].apply(this,[e].concat(a));return this},t.getWildcardCallbacks=function(e){this.callbacks=this.callbacks||{};var t,i,s=[];for(t in this.callbacks)i=t.split("*"),("*"===t||2===i.length&&e.slice(0,i[0].length)===i[0])&&(s=s.concat(this.callbacks[t]));return s}},o.mixin(o),"undefined"!=typeof window&&(s=window.AudioContext||window.webkitAudioContext);var l=null;const c=(e,t)=>{if(null==e)return;const i=Math.round(1.5),s=[...Array(3)].map(((e,s)=>{let a=s;return a>i-1&&(a=3-a-1),Math.round((a+1)/(i+1)*t)})),{width:a,height:n}=e,r=e.getContext("2d");let o=2;const l=1*a/s.length,c=l-4;r.clearRect(0,0,a,n),r.fillStyle="rgb(0,0,0,0.0)",r.fillRect(0,0,a,n);const h=getComputedStyle(e).getPropertyValue("color");r.fillStyle=h,r.strokeStyle=h,r.lineCap="round",r.lineWidth=4,r.beginPath();for(const d of s){const e=Math.min(-Math.abs(1.2*d/10*n)+n/2,n/2-2.5),t=Math.max(2*(n/2-e),5);r.moveTo(o+c/2,e),r.lineTo(o+c/2,e+t),o+=l}r.stroke()},h=class{constructor(e){(0,a.r)(this,e),this.variant="bars",this.iconPack=n.d,this.isScreenShare=!1,this.isPreview=!1,this.volume=0}connectedCallback(){this.peerChanged(this.peer)}componentDidLoad(){c(this.visualizer,0)}disconnectedCallback(){var e,t,i,s;null===(e=this.hark)||void 0===e||e.stop(),this.audioUpdateListener&&(null===(t=this.peer)||void 0===t||t.removeListener("audioUpdate",this.audioUpdateListener)),this.previewUpdateListener&&(null===(i=this.peer)||void 0===i||i.removeListener("previewUpdate",this.previewUpdateListener)),this.screenShareUpdateListener&&(null===(s=this.peer)||void 0===s||s.removeListener("screenShareUpdate",this.screenShareUpdateListener))}peerChanged(e){null!=e&&(this.audioUpdateListener=({audioEnabled:e,audioTrack:t})=>{var i;if(null===(i=this.hark)||void 0===i||i.stop(),e&&null!=t){this.audioEnabled=!0;const e=new MediaStream;e.addTrack(t),this.calcVolume(e),c(this.visualizer,0)}else this.volume=0,this.audioEnabled=!1},this.isScreenShare?(this.screenShareUpdateListener=({screenShareEnabled:e,screenShareTracks:t})=>{this.audioUpdateListener({audioEnabled:e&&null!=t.audio,audioTrack:t.audio})},this.screenShareUpdateListener(e),e.addListener("screenShareUpdate",this.screenShareUpdateListener)):this.isPreview?(this.previewUpdateListener=({preview:e})=>{this.audioUpdateListener(e)},this.previewUpdateListener(e),e.addListener("previewUpdate",this.previewUpdateListener)):(this.audioUpdateListener(e),e.addListener("audioUpdate",this.audioUpdateListener)))}calcVolume(e){this.hark=function(e,t){var i=new r;if(!s)return i;var a,n,o,c=(t=t||{}).smoothing||.1,h=t.interval||50,d=t.threshold,u=t.play,p=t.history||10,v=!0;l=t.audioContext||l||new s,(o=l.createAnalyser()).fftSize=512,o.smoothingTimeConstant=c,n=new Float32Array(o.frequencyBinCount),e.jquery&&(e=e[0]),e instanceof HTMLAudioElement||e instanceof HTMLVideoElement?(a=l.createMediaElementSource(e),void 0===u&&(u=!0),d=d||-50):(a=l.createMediaStreamSource(e),d=d||-50),a.connect(o),u&&o.connect(l.destination),i.speaking=!1,i.suspend=function(){return l.suspend()},i.resume=function(){return l.resume()},Object.defineProperty(i,"state",{get:function(){return l.state}}),l.onstatechange=function(){i.emit("state_change",l.state)},i.setThreshold=function(e){d=e},i.setInterval=function(e){h=e},i.stop=function(){v=!1,i.emit("volume_change",-100,d),i.speaking&&(i.speaking=!1,i.emit("stopped_speaking")),o.disconnect(),a.disconnect()},i.speakingHistory=[];for(var f=0;f<p;f++)i.speakingHistory.push(0);var k=function(){setTimeout((function(){if(v){var e=function(e,t){var i=-1/0;e.getFloatFrequencyData(t);for(var s=4,a=t.length;s<a;s++)t[s]>i&&t[s]<0&&(i=t[s]);return i}(o,n);i.emit("volume_change",e,d);var t=0;if(e>d&&!i.speaking){for(var s=i.speakingHistory.length-3;s<i.speakingHistory.length;s++)t+=i.speakingHistory[s];t>=2&&(i.speaking=!0,i.emit("speaking"))}else if(e<d&&i.speaking){for(s=0;s<i.speakingHistory.length;s++)t+=i.speakingHistory[s];0==t&&(i.speaking=!1,i.emit("stopped_speaking"))}i.speakingHistory.shift(),i.speakingHistory.push(0+(e>d)),k()}}),h)};return k(),i}(e,{play:!1,interval:100}),this.hark.on("volume_change",(e=>{const t=this.volume;let i=Math.round(10**(e/115)*10);i<3&&(i=0);let s=Math.round((2*t+i)/3);t!==s&&(this.volume=s,c(this.visualizer,this.volume))}))}render(){return(0,a.h)(a.H,null,(0,a.h)("canvas",{width:"24",height:"24",class:{bars:!0,visible:this.audioEnabled},ref:e=>this.visualizer=e}),!this.audioEnabled&&(0,a.h)("dyte-icon",{icon:this.iconPack.mic_off}))}static get watchers(){return{peer:["peerChanged"]}}};h.style=":host{display:block;height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}canvas,dyte-icon{height:100%;width:100%}:host([size='sm']){transform:scale(0.9)}canvas{display:none}canvas.visible{display:block}"}}]);