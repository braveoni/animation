import{_ as e,o as t,c as a}from"./index-946da693.js";const n={name:"WaveView",data(){return{canvas:null,ctx:null,waves:[]}},methods:{draw(){},initCanvas(){this.canvas=document.querySelector("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d")},handleResize(){window.addEventListener("resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight})},animate(){requestAnimationFrame(this.animate),this.ctx.clearRect(0,0,this.canvas.widht,this.canvas.height)}},mounted(){this.initCanvas(),this.handleResize()}},i={id:"wave"};function s(c,h,d,o,r,v){return t(),a("canvas",i)}const w=e(n,[["render",s],["__scopeId","data-v-322538e5"]]);export{w as default};
