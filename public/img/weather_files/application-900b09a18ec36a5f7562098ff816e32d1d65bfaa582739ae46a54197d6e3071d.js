!function(t){var e={};function r(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),n=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")});return[r].concat(n).concat([o]).join("\n")}var s,a,l;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var n=this[o][0];null!=n&&(i[n]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),e.push(a))}},e}},function(t,e,r){"use strict";function i(t,e){for(var r=[],i={},o=0;o<e.length;o++){var n=e[o],s=n[0],a={id:t+":"+o,css:n[1],media:n[2],sourceMap:n[3]};i[s]?i[s].parts.push(a):r.push(i[s]={id:s,parts:[a]})}return r}r.r(e),r.d(e,"default",function(){return f});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,u=!1,c=function(){},h=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,r,o){u=r,h=o||{};var s=i(t,e);return g(s),function(e){for(var r=[],o=0;o<s.length;o++){var a=s[o];(l=n[a.id]).refs--,r.push(l)}e?g(s=i(t,e)):s=[];for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete n[l.id]}}}}function g(t){for(var e=0;e<t.length;e++){var r=t[e],i=n[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o]));n[r.id]={id:r.id,refs:1,parts:s}}}}function v(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,r,i=document.querySelector("style["+d+'~="'+t.id+'"]');if(i){if(u)return c;i.parentNode.removeChild(i)}if(p){var o=l++;i=a||(a=v()),e=S.bind(null,i,o,!1),r=S.bind(null,i,o,!0)}else i=v(),e=function(t,e){var r=e.css,i=e.media,o=e.sourceMap;i&&t.setAttribute("media",i);h.ssrId&&t.setAttribute(d,e.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,i),r=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else r()}}var m,x=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function S(t,e,r,i){var o=r?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var n=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(n,s[e]):t.appendChild(n)}}},function(t,e,r){var i=r(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("e5119b60",i,!1,{})},function(t,e,r){var i=r(9);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("dcb51780",i,!1,{})},function(t,e,r){var i=r(11);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("d41ab5b4",i,!1,{})},function(t,e,r){var i=r(13);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("49c89cf4",i,!1,{})},function(t,e,r){"use strict";var i=r(2);r.n(i).a},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".saturation{position:relative;cursor:pointer}.saturation .slide{position:absolute;left:100px;top:0;width:10px;height:10px;border-radius:50%;border:1px solid #fff;box-shadow:0 0 1px 1px rgba(0,0,0,0.3);pointer-events:none}\n",""])},function(t,e,r){"use strict";var i=r(3);r.n(i).a},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".hue{position:relative;margin-left:8px;cursor:pointer}.hue .slide{position:absolute;left:0;top:100px;width:100%;height:4px;background:#fff;box-shadow:0 0 1px 0 rgba(0,0,0,0.3);pointer-events:none}\n",""])},function(t,e,r){"use strict";var i=r(4);r.n(i).a},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".color-type{display:flex;margin-top:8px;font-size:12px}.color-type .name{width:60px;height:30px;float:left;display:flex;justify-content:center;align-items:center;color:#999;background:#252930}.color-type .value{flex:1;height:30px;min-width:100px;padding:0 12px;border:0;color:#fff;background:#2e333a;box-sizing:border-box}\n",""])},function(t,e,r){"use strict";var i=r(5);r.n(i).a},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".hu-color-picker{position:absolute;padding:10px;background:#1d2024;border-radius:4px;box-shadow:0 0 16px 0 rgba(0,0,0,0.16);z-index:1}.hu-color-picker.light{background:#f7f8f9}.hu-color-picker.light .color-type .name{background:#e7e8e9}.hu-color-picker.light .color-type .value{color:#666;background:#eceef0}.hu-color-picker.light .colors.history{border-top:1px solid #eee}.hu-color-picker canvas{vertical-align:top}.hu-color-picker .color-set{display:flex}.hu-color-picker .color-show{margin-top:8px;display:flex}\n",""])},function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hu-color-picker",class:{light:t.isLightTheme},style:{width:t.totalWidth+"px"}},[r("div",{staticClass:"color-set"},[r("Saturation",{ref:"saturation",attrs:{color:t.rgbString,hsv:t.hsv,size:t.hueHeight},on:{selectSaturation:t.selectSaturation}}),t._v(" "),r("Hue",{ref:"hue",attrs:{hsv:t.hsv,width:t.hueWidth,height:t.hueHeight},on:{selectHue:t.selectHue}})],1),t._v(" "),r("div",{staticClass:"color-show",style:{height:t.previewHeight+"px"}},[r("Preview",{attrs:{color:t.rgbaString,width:t.previewWidth,height:t.previewHeight}})],1),t._v(" "),r("Box",{attrs:{name:"HEX",color:t.modelHex},on:{inputColor:t.inputHex}}),t._v(" "),r("Box",{attrs:{name:"RGBA",color:t.modelRgba},on:{inputColor:t.inputRgba}})],1)};i._withStripped=!0;var o={methods:{setColorValue(t){let e={r:0,g:0,b:0,a:1};/#/.test(t)?e=this.hex2rgb(t):/rgb/.test(t)?e=this.rgb2rgba(t):"string"==typeof t?e=this.rgb2rgba(`rgba(${t})`):"[object Object]"===Object.prototype.toString.call(t)&&(e=t);const{r:r,g:i,b:o,a:n}=e,{h:s,s:a,v:l}=this.rgb2hsv(e);return{r:r,g:i,b:o,a:void 0===n?1:n,h:s,s:a,v:l}},createAlphaSquare(t){const e=document.createElement("canvas"),r=e.getContext("2d"),i=2*t;return e.width=i,e.height=i,r.fillStyle="#ffffff",r.fillRect(0,0,i,i),r.fillStyle="#ccd5db",r.fillRect(0,0,t,t),r.fillRect(t,t,t,t),e},createLinearGradient(t,e,r,i,o,n){const s="l"===t,a=e.createLinearGradient(0,0,s?r:0,s?0:i);a.addColorStop(.01,o),a.addColorStop(.99,n),e.fillStyle=a,e.fillRect(0,0,r,i)},rgb2hex({r:t,g:e,b:r},i){const o=t=>("0"+Number(t).toString(16)).slice(-2),n=`#${o(t)}${o(e)}${o(r)}`;return i?n.toUpperCase():n},hex2rgb(t){const e=t=>parseInt(t,16)||0;return{r:e((t=t.slice(1)).slice(0,2)),g:e(t.slice(2,4)),b:e(t.slice(4,6))}},rgb2rgba:t=>"string"==typeof t?(t=(/rgba?\((.*?)\)/.exec(t)||["","0,0,0,1"])[1].split(","),{r:Number(t[0])||0,g:Number(t[1])||0,b:Number(t[2])||0,a:Number(t[3]?t[3]:1)}):t,rgb2hsv({r:t,g:e,b:r}){t/=255,e/=255,r/=255;const i=Math.max(t,e,r),o=Math.min(t,e,r),n=i-o;let s=0;return i===o?s=0:i===t?s=e>=r?60*(e-r)/n:60*(e-r)/n+360:i===e?s=60*(r-t)/n+120:i===r&&(s=60*(t-e)/n+240),{h:s=Math.floor(s),s:parseFloat((0===i?0:1-o/i).toFixed(2)),v:parseFloat(i.toFixed(2))}}}},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"saturation",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.selectSaturation(e)}}},[r("canvas",{ref:"canvasSaturation"}),t._v(" "),r("div",{staticClass:"slide",style:t.slideSaturationStyle})])};n._withStripped=!0;var s={mixins:[o],props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},data:()=>({slideSaturationStyle:{}}),mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const t=this.$refs.canvasSaturation,e=this.size,r=t.getContext("2d");t.width=e,t.height=e,r.fillStyle=this.color,r.fillRect(0,0,e,e),this.createLinearGradient("l",r,e,e,"#FFFFFF","rgba(255,255,255,0)"),this.createLinearGradient("p",r,e,e,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(t){const{top:e,left:r}=this.$el.getBoundingClientRect(),i=t.target.getContext("2d"),o=t=>{let o=t.clientX-r,n=t.clientY-e;o<0&&(o=0),n<0&&(n=0),o>this.size&&(o=this.size),n>this.size&&(n=this.size),this.slideSaturationStyle={left:o-5+"px",top:n-5+"px"};const s=i.getImageData(Math.min(o,this.size-1),Math.min(n,this.size-1),1,1),[a,l,u]=s.data;this.$emit("selectSaturation",{r:a,g:l,b:u})};o(t);const n=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}};r(6);function a(t,e,r,i,o,n,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}var l=a(s,n,[],!1,null,null,null);l.options.__file="src/color/Saturation.vue";var u=l.exports,c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hue",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.selectHue(e)}}},[r("canvas",{ref:"canvasHue"}),t._v(" "),r("div",{staticClass:"slide",style:t.slideHueStyle})])};c._withStripped=!0;var h={props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},data:()=>({slideHueStyle:{}}),mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const t=this.$refs.canvasHue,e=this.width,r=this.height,i=t.getContext("2d");t.width=e,t.height=r;const o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,"#FF0000"),o.addColorStop(.17,"#FF00FF"),o.addColorStop(.34,"#0000FF"),o.addColorStop(.51,"#00FFFF"),o.addColorStop(.68,"#00FF00"),o.addColorStop(.17*5,"#FFFF00"),o.addColorStop(1,"#FF0000"),i.fillStyle=o,i.fillRect(0,0,e,r)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(t){const{top:e}=this.$el.getBoundingClientRect(),r=t.target.getContext("2d"),i=t=>{let i=t.clientY-e;i<0&&(i=0),i>this.height&&(i=this.height),this.slideHueStyle={top:i-2+"px"};const o=r.getImageData(0,Math.min(i,this.height-1),1,1),[n,s,a]=o.data;this.$emit("selectHue",{r:n,g:s,b:a})};i(t);const o=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)}}},d=(r(8),a(h,c,[],!1,null,null,null));d.options.__file="src/color/Hue.vue";var p=d.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("canvas")};f._withStripped=!0;var g=a({mixins:[o],props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data:()=>({alphaSize:5}),watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const t=this.$el,e=this.width,r=this.height,i=this.alphaSize,o=this.createAlphaSquare(i),n=t.getContext("2d");t.width=e,t.height=r,n.fillStyle=n.createPattern(o,"repeat"),n.fillRect(0,0,e,r),n.fillStyle=this.color,n.fillRect(0,0,e,r)}}},f,[],!1,null,null,null);g.options.__file="src/color/Preview.vue";var v=g.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"color-type"},[r("span",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n    ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.modelColor,expression:"modelColor"}],staticClass:"value",domProps:{value:t.modelColor},on:{input:function(e){e.target.composing||(t.modelColor=e.target.value)}}})])};b._withStripped=!0;var m={props:{name:{type:String,default:""},color:{type:String,default:""}},computed:{modelColor:{get(){return this.color},set(t){this.$emit("inputColor",t)}}}},x=(r(10),a(m,b,[],!1,null,null,null));x.options.__file="src/color/Box.vue";var S={components:{Saturation:u,Hue:p,Preview:v,Box:x.exports},mixins:[o],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"}},data:()=>({hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}),computed:{isLightTheme(){return"light"===this.theme},totalWidth(){return this.hueHeight+2*(this.hueWidth+8)},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return this.rgb2hex(this.rgba,!0)}},watch:{rgba(){this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})}},created(){Object.assign(this,this.setColorValue(this.color)),this.setText()},methods:{selectSaturation(t){const{r:e,g:r,b:i,h:o,s:n,v:s}=this.setColorValue(t);Object.assign(this,{r:e,g:r,b:i,h:o,s:n,v:s}),this.setText()},selectHue(t){const{r:e,g:r,b:i,h:o,s:n,v:s}=this.setColorValue(t);Object.assign(this,{r:e,g:r,b:i,h:o,s:n,v:s}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},inputHex(t){const{r:e,g:r,b:i,a:o,h:n,s:s,v:a}=this.setColorValue(t);Object.assign(this,{r:e,g:r,b:i,a:o,h:n,s:s,v:a,modelRgba:this.rgbaStringShort}),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(t){const{r:e,g:r,b:i,a:o,h:n,s:s,v:a}=this.setColorValue(t);Object.assign(this,{r:e,g:r,b:i,a:o,h:n,s:s,v:a,modelHex:this.hexString}),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},selectColor(t){const{r:e,g:r,b:i,a:o,h:n,s:s,v:a}=this.setColorValue(t);Object.assign(this,{r:e,g:r,b:i,a:o,h:n,s:s,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}},y=(r(12),a(S,i,[],!1,null,null,null));y.options.__file="src/color/Index.vue";var C=y.exports;window.colorPicker=C;e.default=C}]);
const track = (event, properties) => {
  let token = document.querySelector("meta[name='csrf-token']").content;

  fetch(`/tracking`, {
    method: "POST",
    headers: {
      "Authorization": jwt.get(),
      "X-CSRF-Token":  token,
      "Content-Type":  "application/json"
    },
    body: JSON.stringify({event, properties})
  });
};

Vue.component("step", {
  template: `
    <section :id="id" v-show="active" class="step active">
      <slot></slot>
    </section>
  `,
  props: {
    id: { required: true },
    name: { required: true },
    selected: { default: false },
    substep: { default: false }
  },

  data() {
    return { active: false }
  },

  computed: {
    href() {
      return `#${this.id.toLowerCase().replace(/ /g, '-')}`;
    }
  },

  watch: {
    active: function (value) {
      if (value)
        track("onboarding_step_viewed", {
          name: this.id
        })
    }
  },

  mounted() {
    let anchor = window.location.href.split('#')[1];
    this.active = anchor ? this.id == anchor : this.selected;
  }

});
Vue.component("steps", {
  template: `
    <div>
      <ol id="tabs" class="nav nav-fill">
        <li v-for="step in steps.filter( function(step) { return !step.substep })" class="nav-item" :class="{ 'active': step.active }">
          <a :href="step.href" @click="selectStep(step.id)" class="nav-link" v-bind:data-testid="'onboarding-step-' + step.id  + '-tab'">{{ step.name }}</a>
        </li>
      </ol>
      <div id="content"><slot></slot></div>
    </div>
  `,

  data() {
    return  { steps: [] };
  },

  created() {
     this.steps = this.$children;

     let component = this;

     window.addEventListener("popstate", (e) => {
       let section = e.target.location.href.split("#")[1];
       if (component.steps.map(c => c.id).indexOf(section) > -1)
         component.selectStep(section);
       else
         window.location.hash = component.steps[0].id
     });
  },

  methods: {
    selectStep(stepId) {
      document.querySelectorAll(".flash").forEach(msg => msg.remove());
      this.steps.forEach(step => {
        step.active = (step.id == stepId);
      })
    }
  }
});
Vue.component('ClipboardMessage', {
  props: { copied: Boolean, hover: Boolean },
  computed: {
    message: function() {
      return this.copied
        ? 'Share link copied to clipboard'
        : 'Copy share link to clipboard';
    },
  },
  template: `
    <p id="clipboard-message" class="clipboard-message" v-if="hover" :class="{ active: copied }">
      <i v-if="copied" class="fas fa-check"></i>
      {{ message }}
    </p>
  `,
});
Vue.component('CopyToClipboard', {
  mounted: function() {
    new ClipboardJS('a#copy-to-clipboard');
  },
  props: {
    showMessage: Function,
  },
  computed: {
    message: function() {
      return 'Copy link';
    }
  },
  template: `
    <a href="#" id="copy-to-clipboard" @mouseover="showMessage" @mouseleave="showMessage" class="copy-to-clipboard cloudapp-btn blue" data-clipboard-target="#item-share-url" data-testid="copy-link-to-clipboard">
      <i class="fa fa-link" />
      {{ message }}
    </a>
  `,
});
Vue.component("cta-button", {
  props: ["text", "corner_style", "text_color", "button_color", "appearance", "redirect_link", "link"],
  template: `
    <a :class="[corner_style, 'cta-button', appearance]"
      data-testid="cta-button"
      target="_blank"
      :href="redirect_link || link"
      :style="{ color: text_color, 'background-color': button_color}">
      {{text}}
    </a>
  `
});

Vue.component('color-input', {
  inheritAttrs: false,
  props: ['field_name', 'value', 'testid'],
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit(`update:${vm.field_name}`, event.target.value);
          },
          focusout: function(event) {
            vm.$emit(`toggle:picker`, false);
          },
          focusin: function(event) {
            vm.$emit(`toggle:picker`, true);
          }
        }
      )
    }
  },
  template: `
  <div class="cta-input-color-group">
    <i class="cta-input-color-icon"></i>
    <input
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
      class="cta-form-control"
      :data-testid="testid"
    >
  </div>
  `
});

Vue.component("cta-dropup", {
  props: {
    value: String,
    field_name: String,
    options: Array,
    icon: Boolean,
    testid: String
  },
  methods: {
    updateSelected: function(selection) {
      this.$emit(`update:${this.field_name}`, selection);
    }
  },
  computed: {
    displayText: function() {
      let that = this;
      return (this.options.find(function(o) {
        return o.value === that.value;
      }) || this.options[0]).text;
    }
  },
  template: `
    <div class="btn-group dropup container-fluid cta-dropup-select">
      <button type="button" class="dropdown-toggle cta-form-control" :data-testid="testid"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div><i v-if="icon" :class="value + '-icon'"></i>{{ displayText }}</div>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <div
          class="dropdown-item"
          v-for="opt in options"
          v-on:click="updateSelected(opt.value)"
          :value="opt.value"
          :data-testid="opt.testid">
          <i v-if="icon" :class="opt.icon_class"></i>
          {{ opt.text }}
        </div>
      </div>
    </div>
  `
});

Vue.component("cta-menu", {
  template: "#cta-template",
  props: {
    menuOpen: Boolean,
    link: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    corner_style: {
      type: String,
      default: "cta-square"
    },
    text_color: {
      type: String,
      default: "#FFFFFF"
    },
    button_color: {
      type: String,
      default: "#000000"
    },
    display_action: {
      type: Boolean,
      default: true
    },
    appearance: {
      type: String,
      default: "below"
    }
  },
  components: {
    colorPicker
  },
  computed: {
    formCompleted: function() {
      return Object.keys(this.$props).every(function(prop) {
        return this[prop] !== null && this[prop] !== undefined && this[prop] !== "";
      }.bind(this));
    }
  },
  methods: {
    updateField: function(f) {
      this.$emit(`update:${f}`, this['menu_'+f])
    },
    dropupUpdateField: function(name, value) {
      this["menu_" + name] = value;
      this.$emit(`update:${name}`, value);
    },
    closeMenu: function() {
      this.$emit("update:menu-open", false);
    },
    changeButtonColor: function(colors) {
      this.menu_button_color = colors.hex;
      this.$emit('update:button_color', colors.hex);
    },
    changeTextColor: function(colors) {
      this.menu_text_color = colors.hex;
      this.$emit('update:text_color', colors.hex);
    },
    togglePicker: function(picker, value) {
      this[picker] = value;
    }
  },
  data: function() {
    return {
      menu_text: this.text,
      menu_link: this.link,
      menu_corner_style: this.corner_style,
      menu_text_color: this.text_color,
      menu_button_color: this.button_color,
      menu_appearance: this.appearance,
      menu_display_action: this.display_action,
      corner_options: [{text: "Square", value: "cta-square", icon_class: "cta-square-icon", testid: "cta-corner-style-square"},
                {text: "Slightly Rounded", value: "cta-slightly-rounded", icon_class: "cta-slightly-rounded-icon", testid: "cta-corner-style-slightly-rounded"},
                {text: "Rounded", value: "cta-rounded", icon_class: "cta-rounded-icon", testid: "cta-corner-style-rounded"}],
      appearance_options: [{text: "Below the content", value: "cta-button-below", testid: "cta-appearance-below"},
                           {text: "Hover and when video ends", value: "cta-button-hover", testid: "cta-appearance-hover"}],
      buttonColorPicker: false,
      textColorPicker: false
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("viewer-vue");
  let { item, call_to_action, free_state } = JSON.parse(
    element.getAttribute("data")
  );

  new Vue({
    el: "#viewer-vue",
    data: {
      hoverLogo: false,
      clipboard: {
        hover: false,
        copied: false,
      },
      selectedExpiration: item.preferences.expires === "ne" ? "ne" : "",
      name: item.name,
      type: item.item_type,
      edit: false,
      player: null,
      cta: {
        callToAction: call_to_action,
        // set to true when the content is finished and
        // the button should be displayed.
        // ex. after the video/gif ends
        contentDone: false,
        menuOpen: false,
        timedDisplayTypes: ["image", "text", "pdf", "other", "file"],
      },
    },
    computed: {
      displayCta: function () {
        return (
          (item.item_type === "video" && this.cta.contentDone && free_state) ||
          (this.cta.callToAction.display_action &&
            (this.cta.menuOpen ||
              (this.cta.contentDone && this.ctaSaved()) ||
              (this.cta.callToAction.appearance === "cta-button-below" &&
                this.ctaSaved())))
        );
      },
    },
    methods: {
      toggleEdit: function () {
        // Only enter edit mode when we are in desktop.
        // Display for the editNameButton is none in mobile
        let mobile = window.matchMedia("(max-width: 991px)").matches;
        this.edit = mobile ? this.edit : !this.edit;
      },
      showClipboardMessage: function () {
        this.clipboard.hover = !this.clipboard.hover;
        if (this.clipboard.hover == false) {
          this.clipboard.copied = false;
        }
      },
      renameItem: function () {
        $(this).closest("form").submit();
      },
      ctaSaved: function () {
        return this.cta.callToAction.id;
      },
      setCtaTimer: function () {
        if (this.cta.callToAction.display_action) {
          if (~this.cta.timedDisplayTypes.indexOf(this.type)) {
            setTimeout(
              function () {
                this.cta.contentDone = true;
              }.bind(this),
              3000
            );
          }
        }
      },
      paused: function () {
        // return whether videojs or the video element is paused
        return (
          (typeof this.player.paused === "function" && this.player.paused()) ||
          this.$refs.videoPlayer.paused
        );
      },
    },
    props: {
      vjsOptions: {
        type: Object,
        default() {
          return {
            controls: true,
            autoplay: false,
            preload: "auto",
            playbackRates: [0.5, 1, 1.2, 1.5, 1.7, 2],
            responsive: true,
            fluid: true,
            aspectRatio: "16:9",
            controlBar: {
              pictureInPictureToggle: true,
              children: [
                "playToggle",
                "progressControl",
                "remainingTimeDisplay",
                "VolumeControl",
                "PlaybackRateMenuButton",
                "pictureInPictureToggle",
                "fullscreenToggle",
              ],
            },
            html5: {
              hls: {
                overrideNative: true,
              },
            },
          };
        },
      },
    },
    mounted() {
      this.setCtaTimer();
      let videoElement = this.$refs.videoPlayer;
      if (videoElement) {
        let videoType = videoElement
          .querySelector("source")
          .getAttribute("type");

        if (typeof videojs === "function" && videoType === "video/mp4") {
          this.vjsOptions.html5.hls.overrideNative = !videojs.browser.IS_SAFARI;
          this.player = videojs(videoElement, this.vjsOptions);
          this.player.src(videoElement.getAttribute("videoURL"));
          this.player.defaultPlaybackRate(1);
        } else if (
          typeof Hls === "function" &&
          videoType === "application/x-mpegURL"
        ) {
          if (Hls.isSupported()) {
            this.player = new Hls();
            this.player.attachMedia(videoElement);

            this.player.on(
              Hls.Events.MEDIA_ATTACHED,
              function () {
                this.player.loadSource(videoElement.getAttribute("videoURL"));
              }.bind(this)
            );

            this.player.on(
              Hls.Events.ERROR,
              function (event, data) {
                if (data.fatal) {
                  switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                      console.log(
                        "hlsjs fatal network error encountered, trying to recover"
                      );
                      this.player.startLoad();
                      break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                      console.log(
                        "hlsjs fatal media error encountered, trying to recover"
                      );
                      this.player.recoverMediaError();
                      break;
                    default:
                      // cannot recover
                      this.player.destroy();
                      break;
                  }
                }
              }.bind(this)
            );
          }
        }
      }
      if (typeof this.$refs.pdfViewer !== "undefined") {
        let pdfUrl = this.$refs.pdfViewer.getAttribute("url");
        let disable_tool =
          this.$refs.pdfViewer.getAttribute("data-tool") === "false";
        let xhr = new XMLHttpRequest();
        let _this = this;
        xhr.open("GET", pdfUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
          if (this.status === 200) {
            let blob = new Blob([this.response], { type: "application/pdf" });
            let file = window.URL.createObjectURL(blob);
            if (disable_tool) {
              file += "#toolbar=0";
            }
            _this.$refs.pdfViewer.src = file;
          }
        };
        xhr.send();
      }
    },
    beforeDestroy() {
      if (this.player) {
        // hlsjs destroy
        if (typeof this.player.destroy === "function") {
          this.player.destroy();
        }
        // yvideojs dispose
        if (typeof this.player.dispose === "function") {
          this.player.dispose();
        }
      }
    },
  });
});
