parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pdDD":[function(require,module,exports) {
class t{constructor(t,i,e){this.wrapper=t,this.imgs=i,this.scrollHeight=e,this.index=0,this.frameLength=0,this.img=new Image,this.html=document.documentElement,this.preloadImages(),this.initContainer(),this.initCanvas(),this.img.src=this.getFrame(1),this.img.onload=(()=>{this.fillImage(this.img)}),this.addScrollListener()}getFrame(t){return this.imgs[t.toString()]}preloadImages(){Object.keys(this.imgs).forEach((t,i)=>{(new Image).src=this.getFrame(i),this.frameLength+=1})}initContainer(){this.wrapper.innerHTML="",this.container=document.createElement("div"),this.wrapper.appendChild(this.container),this.container.classList.add("apple-scroller-container"),this.wrapper.style.height=this.scrollHeight,this.container.style.height=this.scrollHeight}initCanvas(){const t=document.createElement("canvas");this.canvas=t,this.container.appendChild(t),this.canvas.classList.add("apple-scroller-canvas"),this.context=t.getContext("2d"),t.style.width="100%",t.style.height="100%",t.width=t.offsetWidth,t.height=t.offsetHeight}fillImage(t){let i=Math.max(this.canvas.width/t.width,this.canvas.height/t.height);this.context.drawImage(t,0,0,t.width*i,t.height*i)}update(t){this.img.src=this.getFrame(t),this.fillImage(this.img)}addScrollListener(){window.addEventListener("scroll",()=>{const t=Math.max(this.html.scrollTop-this.wrapper.offsetTop,0),i=this.container.scrollHeight-window.innerHeight,e=Math.min(t/i,1);this.index=Math.min(this.frameLength-1,Math.ceil(e*this.frameLength)),requestAnimationFrame(()=>this.update(this.index+1))})}redraw(t){t.initContainer(),t.initCanvas(),t.addScrollListener(),console.log("redrew")}}module.exports=t;
},{}],"NkL2":[function(require,module,exports) {

},{}],"iBxb":[function(require,module,exports) {
module.exports="/10.6d8df279.png";
},{}],"H1n6":[function(require,module,exports) {
module.exports="/11.4072548b.png";
},{}],"F1jS":[function(require,module,exports) {
module.exports="/12.8f92c66c.png";
},{}],"jhYI":[function(require,module,exports) {
module.exports="/13.43d13125.png";
},{}],"UNxE":[function(require,module,exports) {
module.exports="/14.7e6dcb51.png";
},{}],"QBvs":[function(require,module,exports) {
module.exports="/15.a9aa258e.png";
},{}],"HMML":[function(require,module,exports) {
module.exports="/16.cb19332a.png";
},{}],"bGFb":[function(require,module,exports) {
module.exports="/17.1354e377.png";
},{}],"B6Ez":[function(require,module,exports) {
module.exports="/18.31095d17.png";
},{}],"QKMy":[function(require,module,exports) {
module.exports="/19.7949fda9.png";
},{}],"jkn0":[function(require,module,exports) {
module.exports="/2.54380b0c.png";
},{}],"O90i":[function(require,module,exports) {
module.exports="/20.9b6c0359.png";
},{}],"SsTL":[function(require,module,exports) {
module.exports="/21.2cf05e8a.png";
},{}],"T6Nv":[function(require,module,exports) {
module.exports="/22.4b94b524.png";
},{}],"FTAK":[function(require,module,exports) {
module.exports="/23.651158c5.png";
},{}],"Q5Wc":[function(require,module,exports) {
module.exports="/24.49187365.png";
},{}],"rCGs":[function(require,module,exports) {
module.exports="/25.9c9c1df1.png";
},{}],"Jkjz":[function(require,module,exports) {
module.exports="/26.20170fab.png";
},{}],"j97K":[function(require,module,exports) {
module.exports="/27.77bb7e66.png";
},{}],"t8o4":[function(require,module,exports) {
module.exports="/28.7ae31535.png";
},{}],"J3Fp":[function(require,module,exports) {
module.exports="/29.a2719a02.png";
},{}],"X7kg":[function(require,module,exports) {
module.exports="/3.eb355651.png";
},{}],"HPAV":[function(require,module,exports) {
module.exports="/30.4660770b.png";
},{}],"nKMd":[function(require,module,exports) {
module.exports="/31.e1acbeb6.png";
},{}],"AxgS":[function(require,module,exports) {
module.exports="/32.02a78a75.png";
},{}],"UpBf":[function(require,module,exports) {
module.exports="/33.42fd5e4a.png";
},{}],"x1YX":[function(require,module,exports) {
module.exports="/34.c040e57c.png";
},{}],"dNW4":[function(require,module,exports) {
module.exports="/35.839d2b52.png";
},{}],"XL52":[function(require,module,exports) {
module.exports="/36.65467af1.png";
},{}],"XJgW":[function(require,module,exports) {
module.exports="/37.b42baf75.png";
},{}],"Iyzm":[function(require,module,exports) {
module.exports="/38.324a9d75.png";
},{}],"mLaD":[function(require,module,exports) {
module.exports="/39.de9dc796.png";
},{}],"iWjN":[function(require,module,exports) {
module.exports="/4.eac67f5d.png";
},{}],"z1YN":[function(require,module,exports) {
module.exports="/40.f158f862.png";
},{}],"yetE":[function(require,module,exports) {
module.exports="/41.3281358f.png";
},{}],"DYv5":[function(require,module,exports) {
module.exports="/42.8a08c19a.png";
},{}],"FnGR":[function(require,module,exports) {
module.exports="/43.2d9aa106.png";
},{}],"oVwX":[function(require,module,exports) {
module.exports="/44.b5be97c4.png";
},{}],"l2DX":[function(require,module,exports) {
module.exports="/45.45a699b1.png";
},{}],"rohO":[function(require,module,exports) {
module.exports="/46.dd4437be.png";
},{}],"xQcK":[function(require,module,exports) {
module.exports="/47.022fa29a.png";
},{}],"hT8A":[function(require,module,exports) {
module.exports="/48.49bfcedb.png";
},{}],"nYsK":[function(require,module,exports) {
module.exports="/49.deff8234.png";
},{}],"ZvEW":[function(require,module,exports) {
module.exports="/5.ca997fe7.png";
},{}],"aEaP":[function(require,module,exports) {
module.exports="/50.0723213e.png";
},{}],"Cr0B":[function(require,module,exports) {
module.exports="/51.37c07185.png";
},{}],"fEvH":[function(require,module,exports) {
module.exports="/52.8b5c7702.png";
},{}],"HN9e":[function(require,module,exports) {
module.exports="/53.b3f7754a.png";
},{}],"m2QR":[function(require,module,exports) {
module.exports="/54.f9d2739c.png";
},{}],"vSDZ":[function(require,module,exports) {
module.exports="/55.3ee3c2d5.png";
},{}],"HeU8":[function(require,module,exports) {
module.exports="/56.b1b100a8.png";
},{}],"yUWy":[function(require,module,exports) {
module.exports="/57.9b2c8f70.png";
},{}],"x4Xs":[function(require,module,exports) {
module.exports="/58.1bff654a.png";
},{}],"aSEp":[function(require,module,exports) {
module.exports="/59.56aec8c2.png";
},{}],"Sez1":[function(require,module,exports) {
module.exports="/6.bb68c60b.png";
},{}],"gXTB":[function(require,module,exports) {
module.exports="/60.d5a49f83.png";
},{}],"Dh6U":[function(require,module,exports) {
module.exports="/61.f5f96631.png";
},{}],"o3tV":[function(require,module,exports) {
module.exports="/7.51f6e959.png";
},{}],"tXI8":[function(require,module,exports) {
module.exports="/8.c38d6c84.png";
},{}],"f2Z6":[function(require,module,exports) {
module.exports="/9.ecbf63ea.png";
},{}],"EJIO":[function(require,module,exports) {
module.exports="/1.020fcad8.png";
},{}],"kc1U":[function(require,module,exports) {
module.exports={1:require("./1.png"),2:require("./2.png"),3:require("./3.png"),4:require("./4.png"),5:require("./5.png"),6:require("./6.png"),7:require("./7.png"),8:require("./8.png"),9:require("./9.png"),10:require("./10.png"),11:require("./11.png"),12:require("./12.png"),13:require("./13.png"),14:require("./14.png"),15:require("./15.png"),16:require("./16.png"),17:require("./17.png"),18:require("./18.png"),19:require("./19.png"),20:require("./20.png"),21:require("./21.png"),22:require("./22.png"),23:require("./23.png"),24:require("./24.png"),25:require("./25.png"),26:require("./26.png"),27:require("./27.png"),28:require("./28.png"),29:require("./29.png"),30:require("./30.png"),31:require("./31.png"),32:require("./32.png"),33:require("./33.png"),34:require("./34.png"),35:require("./35.png"),36:require("./36.png"),37:require("./37.png"),38:require("./38.png"),39:require("./39.png"),40:require("./40.png"),41:require("./41.png"),42:require("./42.png"),43:require("./43.png"),44:require("./44.png"),45:require("./45.png"),46:require("./46.png"),47:require("./47.png"),48:require("./48.png"),49:require("./49.png"),50:require("./50.png"),51:require("./51.png"),52:require("./52.png"),53:require("./53.png"),54:require("./54.png"),55:require("./55.png"),56:require("./56.png"),57:require("./57.png"),58:require("./58.png"),59:require("./59.png"),60:require("./60.png"),61:require("./61.png")};
},{"./10.png":"iBxb","./11.png":"H1n6","./12.png":"F1jS","./13.png":"jhYI","./14.png":"UNxE","./15.png":"QBvs","./16.png":"HMML","./17.png":"bGFb","./18.png":"B6Ez","./19.png":"QKMy","./2.png":"jkn0","./20.png":"O90i","./21.png":"SsTL","./22.png":"T6Nv","./23.png":"FTAK","./24.png":"Q5Wc","./25.png":"rCGs","./26.png":"Jkjz","./27.png":"j97K","./28.png":"t8o4","./29.png":"J3Fp","./3.png":"X7kg","./30.png":"HPAV","./31.png":"nKMd","./32.png":"AxgS","./33.png":"UpBf","./34.png":"x1YX","./35.png":"dNW4","./36.png":"XL52","./37.png":"XJgW","./38.png":"Iyzm","./39.png":"mLaD","./4.png":"iWjN","./40.png":"z1YN","./41.png":"yetE","./42.png":"DYv5","./43.png":"FnGR","./44.png":"oVwX","./45.png":"l2DX","./46.png":"rohO","./47.png":"xQcK","./48.png":"hT8A","./49.png":"nYsK","./5.png":"ZvEW","./50.png":"aEaP","./51.png":"Cr0B","./52.png":"fEvH","./53.png":"HN9e","./54.png":"m2QR","./55.png":"vSDZ","./56.png":"HeU8","./57.png":"yUWy","./58.png":"x4Xs","./59.png":"aSEp","./6.png":"Sez1","./60.png":"gXTB","./61.png":"Dh6U","./7.png":"o3tV","./8.png":"tXI8","./9.png":"f2Z6","./1.png":"EJIO"}],"HdJB":[function(require,module,exports) {
"use strict";var e=r(require("./render/*.png"));function r(e){return e&&e.__esModule?e:{default:e}}var t=require("apple-scroller");require("apple-scroller/style.css");var l=document.getElementById("scroll1"),n=new t(l,e.default,"300vh");document.getElementById("redraw").addEventListener("click",function(){n.redraw(n)});var d=document.getElementById("scroll2"),u=new t(d,e.default,"1000vh");
},{"apple-scroller":"pdDD","apple-scroller/style.css":"NkL2","./render/*.png":"kc1U"}]},{},["HdJB"], null)
//# sourceMappingURL=/test.ce249ead.js.map