webpackJsonp([12],{100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header-top-bar",data:function(){return{}},props:{title:{type:String},is_arrow_show:{type:Boolean,default:!1},right_text:{type:String,default:""}},methods:{back:function(){this.$emit("back")},switchLoginModel:function(){this.$emit("switchLoginModel")}}}},101:function(e,t,r){"use strict";var n=String.prototype.replace;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,/%20/g,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},102:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,o):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,n){var a=r[n];return Object.prototype.hasOwnProperty.call(e,n)?e[n]=t.merge(e[n],a,o):e[n]=a,e},a)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],o=n.indexOf(e);if(-1!==o)return n[o];if(n.push(e),Array.isArray(e)){for(var a=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?a.push(t.compact(e[s],n)):void 0!==e[s]&&a.push(e[s]);return a}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},108:function(e,t,r){"use strict";var n=r(110),o=r(109),a=r(101);e.exports={formats:a,parse:o,stringify:n}},109:function(e,t,r){"use strict";var n=r(102),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),a=0;a<n.length;++a){var s,i,d=n[a],l=-1===d.indexOf("]=")?d.indexOf("="):d.indexOf("]=")+1;-1===l?(s=t.decoder(d),i=t.strictNullHandling?null:""):(s=t.decoder(d.slice(0,l)),i=t.decoder(d.slice(l+1))),o.call(r,s)?r[s]=[].concat(r[s]).concat(i):r[s]=i}return r},i=function(e,t,r){if(!e.length)return t;var n,o=e.shift();if("[]"===o)n=[],n=n.concat(i(e,t,r));else{n=r.plainObjects?Object.create(null):{};var a="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,s=parseInt(a,10);!isNaN(s)&&o!==a&&String(s)===a&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(n=[],n[s]=i(e,t,r)):n[a]=i(e,t,r)}return n},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,d=a.exec(n),l=d?n.slice(0,d.index):n,c=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var p=0;null!==(d=s.exec(n))&&p<r.depth;){if(p+=1,!r.plainObjects&&o.call(Object.prototype,d[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(d[1])}return d&&c.push("["+n.slice(d.index)+"]"),i(c,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?s(e,r):e,i=r.plainObjects?Object.create(null):{},l=Object.keys(o),c=0;c<l.length;++c){var p=l[c],A=d(p,o[p],r);i=n.merge(i,A,r)}return n.compact(i)}},110:function(e,t,r){"use strict";var n=r(102),o=r(101),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,i={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,o,a,s,i,d,l,c,p,A,u){var f=t;if("function"==typeof d)f=d(r,f);else if(f instanceof Date)f=p(f);else if(null===f){if(a)return i&&!u?i(r):r;f=""}if("string"==typeof f||"number"==typeof f||"boolean"==typeof f||n.isBuffer(f)){if(i){return[A(u?r:i(r))+"="+A(i(f))]}return[A(r)+"="+A(String(f))]}var b=[];if(void 0===f)return b;var m;if(Array.isArray(d))m=d;else{var v=Object.keys(f);m=l?v.sort(l):v}for(var C=0;C<m.length;++C){var x=m[C];s&&null===f[x]||(b=Array.isArray(f)?b.concat(e(f[x],o(r,x),o,a,s,i,d,l,c,p,A,u)):b.concat(e(f[x],r+(c?"."+x:"["+x+"]"),o,a,s,i,d,l,c,p,A,u)))}return b};e.exports=function(e,t){var r=e,n=t||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===n.delimiter?i.delimiter:n.delimiter,l="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,c="boolean"==typeof n.skipNulls?n.skipNulls:i.skipNulls,p="boolean"==typeof n.encode?n.encode:i.encode,A="function"==typeof n.encoder?n.encoder:i.encoder,u="function"==typeof n.sort?n.sort:null,f=void 0!==n.allowDots&&n.allowDots,b="function"==typeof n.serializeDate?n.serializeDate:i.serializeDate,m="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:i.encodeValuesOnly;if(void 0===n.format)n.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,n.format))throw new TypeError("Unknown format option provided.");var v,C,x=o.formatters[n.format];"function"==typeof n.filter?(C=n.filter,r=C("",r)):Array.isArray(n.filter)&&(C=n.filter,v=C);var h=[];if("object"!=typeof r||null===r)return"";var g;g=n.arrayFormat in a?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var y=a[g];v||(v=Object.keys(r)),u&&v.sort(u);for(var B=0;B<v.length;++B){var w=v[B];c&&null===r[w]||(h=h.concat(d(r[w],w,y,l,c,p?A:null,C,u,f,b,x,m)))}return h.join(s)}},255:function(e,t,r){t=e.exports=r(77)(),t.push([e.i,".addaddress{height:100%}.addaddress-content{padding-top:45px}.addaddress-content .input-box:first-child{margin-top:10px;border-top:1px solid rgba(7,17,27,.1)}.addaddress-content .input-box{background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid rgba(7,17,27,.1);padding:0 10px}.addaddress-content .title{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;height:40px;line-height:40px}.addaddress-content .left-content{-webkit-box-flex:1;-ms-flex:1;flex:1}.addaddress-content .left-content input[type=text]{display:block;height:40px;border:none;line-height:40px;padding:0;outline:none;width:100%;border-bottom:1px solid rgba(7,17,27,.1)}.addaddress-content .left-content input[type=radio]{display:none}.addaddress-content .left-content label{display:inline-block;padding:5px 0;width:60px;text-align:center;border:1px solid rgba(7,17,27,.1);margin:6px 0;color:#333;border-radius:2px;margin-right:10px}.addaddress-content .left-content label.active{color:#0096ff;border:1px solid #0096ff}.btn{height:40px;border:none;width:100%;background:#4cd964;font-size:16px;color:#fff;box-sizing:border-box;display:block;border-radius:4px;outline:none}","",{version:3,sources:["C:/Users/wd/Desktop/sell-wechat/src/components/body/addaddress.vue"],names:[],mappings:"AACA,YACE,WAAa,CACd,AACD,oBACE,gBAAkB,CACnB,AACD,2CACE,gBAAiB,AACjB,qCAA2C,CAC5C,AACD,+BACE,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yCAA8C,AAC9C,cAAgB,CACjB,AACD,2BACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,gBAAkB,CACnB,AACD,kCACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,mDACE,cAAe,AACf,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,UAAW,AACX,aAAc,AACd,WAAY,AACZ,wCAA8C,CAC/C,AACD,oDACE,YAAc,CACf,AACD,wCACE,qBAAsB,AACtB,cAAe,AACf,WAAY,AACZ,kBAAmB,AACnB,kCAAuC,AACvC,aAAc,AACd,WAAY,AACZ,kBAAmB,AACnB,iBAAmB,CACpB,AACD,+CACE,cAAwB,AACxB,wBAAmC,CACpC,AACD,KACE,YAAa,AACb,YAAa,AACb,WAAY,AACZ,mBAAoB,AACpB,eAAgB,AAChB,WAAY,AACZ,sBAAuB,AACvB,cAAe,AACf,kBAAmB,AACnB,YAAc,CACf",file:"addaddress.vue",sourcesContent:["\n.addaddress {\n  height: 100%;\n}\n.addaddress-content {\n  padding-top: 45px;\n}\n.addaddress-content .input-box:first-child {\n  margin-top: 10px;\n  border-top: 1px solid rgba(7, 17, 27, 0.1);\n}\n.addaddress-content .input-box {\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid rgba(7, 17, 27, 0.1);\n  padding: 0 10px;\n}\n.addaddress-content .title {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  height: 40px;\n  line-height: 40px;\n}\n.addaddress-content .left-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.addaddress-content .left-content input[type=text] {\n  display: block;\n  height: 40px;\n  border: none;\n  line-height: 40px;\n  padding: 0;\n  outline: none;\n  width: 100%;\n  border-bottom: 1px solid rgba(7, 17, 27, 0.1);\n}\n.addaddress-content .left-content input[type=radio] {\n  display: none;\n}\n.addaddress-content .left-content label {\n  display: inline-block;\n  padding: 5px 0;\n  width: 60px;\n  text-align: center;\n  border: 1px solid rgba(7, 17, 27, 0.1);\n  margin: 6px 0;\n  color: #333;\n  border-radius: 2px;\n  margin-right: 10px;\n}\n.addaddress-content .left-content label.active {\n  color: rgb(0, 150, 255);\n  border: 1px solid rgb(0, 150, 255);\n}\n.btn {\n  height: 40px;\n  border: none;\n  width: 100%;\n  background: #4cd964;\n  font-size: 16px;\n  color: #fff;\n  box-sizing: border-box;\n  display: block;\n  border-radius: 4px;\n  outline: none;\n}\n\n"],sourceRoot:""}])},274:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addaddress"},[r("v-topbar",{attrs:{title:e.topbar.title,is_arrow_show:e.topbar.is_arrow_show},on:{back:e.topBack}}),e._v(" "),r("div",{staticClass:"addaddress-content"},[r("div",{staticClass:"input-box"},[r("div",{staticClass:"title"},[e._v("联系人")]),e._v(" "),r("div",{staticClass:"left-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.name,expression:"address.name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.address.name},on:{input:function(t){t.target.composing||(e.address.name=t.target.value)}}}),e._v(" "),r("label",{class:{active:"先生"==e.address.sex},attrs:{for:"man"}},[e._v("先生")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.sex,expression:"address.sex"}],attrs:{type:"radio",id:"man",value:"先生"},domProps:{checked:e._q(e.address.sex,"先生")},on:{__c:function(t){e.address.sex="先生"}}}),e._v(" "),r("label",{class:{active:"女士"==e.address.sex},attrs:{for:"woman"}},[e._v("女士")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.sex,expression:"address.sex"}],attrs:{type:"radio",id:"woman",value:"女士"},domProps:{checked:e._q(e.address.sex,"女士")},on:{__c:function(t){e.address.sex="女士"}}})])]),e._v(" "),r("div",{staticClass:"input-box"},[r("div",{staticClass:"title"},[e._v("收货人电话")]),e._v(" "),r("div",{staticClass:"left-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.phonenumber,expression:"address.phonenumber"}],staticStyle:{border:"none"},attrs:{type:"text",placeholder:"收货人电话"},domProps:{value:e.address.phonenumber},on:{input:function(t){t.target.composing||(e.address.phonenumber=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"input-box"},[r("div",{staticClass:"title"},[e._v("地址")]),e._v(" "),r("div",{staticClass:"left-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.address,expression:"address.address"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等"},domProps:{value:e.address.address},on:{input:function(t){t.target.composing||(e.address.address=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.detail_address,expression:"address.detail_address"}],staticStyle:{border:"none"},attrs:{type:"text",placeholder:"详细地址"},domProps:{value:e.address.detail_address},on:{input:function(t){t.target.composing||(e.address.detail_address=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"input-box"},[r("div",{staticClass:"title"},[e._v("门牌号")]),e._v(" "),r("div",{staticClass:"left-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.door_number,expression:"address.door_number"}],staticStyle:{border:"none"},attrs:{type:"text",placeholder:"例：5号楼203室"},domProps:{value:e.address.door_number},on:{input:function(t){t.target.composing||(e.address.door_number=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"input-box"},[r("div",{staticClass:"title"},[e._v("标签")]),e._v(" "),r("div",{staticClass:"left-content"},[r("label",{class:{active:"家"==e.address.label},attrs:{for:"home"}},[e._v("家")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.label,expression:"address.label"}],attrs:{type:"radio",id:"home",value:"家"},domProps:{checked:e._q(e.address.label,"家")},on:{__c:function(t){e.address.label="家"}}}),e._v(" "),r("label",{class:{active:"公司"==e.address.label},attrs:{for:"company"}},[e._v("公司")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.label,expression:"address.label"}],attrs:{type:"radio",value:"公司",id:"company"},domProps:{checked:e._q(e.address.label,"公司")},on:{__c:function(t){e.address.label="公司"}}}),r("label",{class:{active:"学校"==e.address.label},attrs:{for:"school"}},[e._v("学校")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.label,expression:"address.label"}],attrs:{type:"radio",value:"学校",id:"school"},domProps:{checked:e._q(e.address.label,"学校")},on:{__c:function(t){e.address.label="学校"}}})])]),e._v(" "),r("div",{staticStyle:{width:"100%",padding:"0 10px","box-sizing":"border-box","margin-top":"10px"}},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.submitAddress}},[e._v("确定")])])])],1)},staticRenderFns:[]}},291:function(e,t,r){var n=r(255);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(78)("903a7502",n,!0)},314:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=r(97),a=r.n(o),s=r(22),i=r.n(s),d=r(108),l=r.n(d);t.default={name:"addaddress",data:function(){return{topbar:{title:"新增地址",is_arrow_show:!0},address:{_id:"",sex:"",name:"",phonenumber:"",label:"",address:"",detail_address:"",door_number:""}}},methods:{topBack:function(){n.a.go(-1)},submitAddress:function(){var e=l.a.stringify(this.address);i.a.post("/user/setaddress",e).then(function(e){0==e.data.success&&n.a.push("/sendaddress"),-1==e.data.success&&alert("地址设置失败")})}},components:{"v-topbar":a.a},created:function(){var e=this;sessionStorage.getItem("current_address")&&(e.address=JSON.parse(sessionStorage.getItem("current_address")))}}},80:function(e,t,r){r(291);var n=r(21)(r(314),r(274),null,null);e.exports=n.exports},96:function(e,t,r){t=e.exports=r(77)(),t.push([e.i,".header-top-bar[data-v-a46655ea]{position:fixed;top:0;left:0;height:45px;width:100%;background-color:#0096ff;z-index:1;line-height:45px;font-size:18px;color:#fff;text-align:center;box-sizing:border-box}.icon-arrow[data-v-a46655ea]{position:absolute;left:8px;display:inline-block;width:30px;font-size:24px;color:#fff;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.right-text[data-v-a46655ea]{font-size:14px;display:inline-block;position:absolute;right:10px;height:100%}","",{version:3,sources:["C:/Users/wd/Desktop/sell-wechat/src/components/header/header-top-bar.vue"],names:[],mappings:"AACA,iCACI,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,yBAAmC,AACnC,UAAW,AACX,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,6BACI,kBAAmB,AACnB,SAAU,AACV,qBAAsB,AACtB,WAAY,AACZ,eAAgB,AAChB,WAAY,AACZ,iCAAkC,AAC1B,wBAA0B,CACrC,AACD,6BACE,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd",file:"header-top-bar.vue",sourcesContent:["\n.header-top-bar[data-v-a46655ea]{\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 45px;\n    width: 100%;\n    background-color: rgb(0, 150, 255);\n    z-index: 1;\n    line-height: 45px;\n    font-size: 18px;\n    color: #fff;\n    text-align: center;\n    box-sizing: border-box;\n}\n.icon-arrow[data-v-a46655ea]{\n    position: absolute;\n    left: 8px;\n    display: inline-block;\n    width: 30px;\n    font-size: 24px;\n    color: #fff;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.right-text[data-v-a46655ea]{\n  font-size: 14px;\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  height: 100%;\n}\n"],sourceRoot:""}])},97:function(e,t,r){r(99);var n=r(21)(r(100),r(98),"data-v-a46655ea",null);e.exports=n.exports},98:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-top-bar"},[r("i",{directives:[{name:"show",rawName:"v-show",value:e.is_arrow_show,expression:"is_arrow_show"}],staticClass:"iconfont icon-arrow",on:{click:e.back}}),e._v("\n "+e._s(e.title)+"\n "),r("span",{staticClass:"right-text",on:{click:e.switchLoginModel}},[e._v(e._s(e.right_text))])])},staticRenderFns:[]}},99:function(e,t,r){var n=r(96);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(78)("418e3127",n,!0)}});
//# sourceMappingURL=12.ebb5f28ac5890dad7a54.js.map