var n=Object.defineProperty;var h=(i,t,s)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var e=(i,t,s)=>(h(i,typeof t!="symbol"?t+"":t,s),s);import{_ as c,o,c as r}from"./index-e0dfee84.js";class d{constructor(t,s,a){e(this,"canvas");e(this,"ctx");e(this,"width");e(this,"height");this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width=s,this.height=this.canvas.height=a}updateSize(t,s){t?this.width=this.canvas.width=t:this.width=this.canvas.width=window.innerWidth,s?this.height=this.canvas.height=s:this.height=this.canvas.height=window.innerHeight}}const w={name:"PhysarumView",data(){return{canvas:null}},mounted(){const i=document.querySelector("#physarum");i&&(this.canvas=new d(i,window.innerWidth,window.innerHeight)),window.addEventListener("resize",()=>{var t;return(t=this.canvas)==null?void 0:t.updateSize()})}},u={id:"physarum"};function v(i,t,s,a,p,m){return o(),r("canvas",u)}const f=c(w,[["render",v]]);export{f as default};
