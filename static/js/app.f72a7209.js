(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},1:function(e,t){},2:function(e,t){},"4ee2":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Monitor")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",{staticClass:"v-header"},[r("span",[e._v("MOBOX 统计中心")])]),r("el-main",[r("el-row",{staticStyle:{padding:"0px 10px"},attrs:{gutter:10}},[r("el-col",{staticClass:"col-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("el-card",{staticClass:"box-card box",attrs:{shadow:"never"}},[r("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("计算回本周期")])]),r("calc-payback",{attrs:{net_h:e.net_h}})],1)],1)],1),r("el-row",{staticStyle:{padding:"0px 10px"},attrs:{gutter:10}},[r("el-col",{staticClass:"col-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("el-card",{staticClass:"box-card box",attrs:{shadow:"never"}},[r("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("BOX收益计算")])]),r("box-calc")],1)],1)],1),r("el-row",{staticStyle:{padding:"0px 10px"},attrs:{gutter:10}},[r("el-col",{staticClass:"col-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("el-card",{staticClass:"box-card box",attrs:{shadow:"never"}},[r("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("MOMO NFT 转账")]),r("div",[e.isWallet?r("div",[r("span",[e._v("已连接到 "+e._s(e.$store.state.currentAccount)+" ")]),r("el-button",{attrs:{size:"small",type:"danger",plain:""},on:{click:function(t){return t.stopPropagation(),e.$store.dispatch("disconnect")}}},[e._v("断开链接")])],1):r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.connectMetaMask(t)}}},[e._v("连接钱包")])],1)]),r("transfer",{attrs:{net_h:e.net_h}})],1)],1)],1),r("el-row",{staticStyle:{padding:"0px 10px"},attrs:{gutter:10}},[r("el-col",{staticClass:"col-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("el-card",{staticClass:"box-card box",attrs:{shadow:"never"}},[r("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("NFT 算力均价排序")])]),r("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.nftList,"header-row-style":{background:"#f5f7fa"}}},[r("el-table-column",{attrs:{type:"index",label:"序号"}}),r("el-table-column",{attrs:{prop:"totalHashrate",label:"总算力",align:"center","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.totalHashrate)+" ")]}}])}),r("el-table-column",{attrs:{prop:"totalPrice",label:"总成本U",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" $"+e._s(r.totalPrice)+" ")]}}])}),r("el-table-column",{attrs:{prop:"avgPrice",label:"算力均价",align:"center"}}),r("el-table-column",{attrs:{prop:"level",label:"等级",align:"center"}}),r("el-table-column",{attrs:{label:"普通",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link5||a.link6?e._e():[r("div",[e._v(e._s(a.item[0].lvHashrate))]),r("div",[e._v(e._s(a.item[0].nowPrice/1e9))])]]}}])}),r("el-table-column",{attrs:{label:"良好",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link5||a.link6?e._e():[r("div",[e._v(e._s(a.item[1].lvHashrate))]),r("div",[e._v(e._s(a.item[1].nowPrice/1e9))])]]}}])}),r("el-table-column",{attrs:{label:"优秀",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link5||a.link6?e._e():[r("div",[e._v(e._s(a.item[2].lvHashrate))]),r("div",[e._v(e._s(a.item[2].nowPrice/1e9))])]]}}])}),r("el-table-column",{attrs:{label:"稀有",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link5||a.link6?e._e():[r("div",[e._v(e._s(a.item[3].lvHashrate))]),r("div",[e._v(e._s(a.item[3].nowPrice/1e9))])]]}}])}),r("el-table-column",{attrs:{label:"史诗",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link5?[r("div",[e._v(e._s(a.item[4].lvHashrate))]),r("div",[e._v(e._s(a.item[4].nowPrice/1e9))])]:e._e()]}}])}),r("el-table-column",{attrs:{label:"传说",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.link6?[r("div",[e._v(e._s(a.item[5].lvHashrate))]),r("div",[e._v(e._s(a.item[5].nowPrice/1e9))])]:e._e()]}}])})],1)],1)],1)],1)],1)],1)},l=[],c=r("5530"),s=(r("ac1f"),r("5319"),r("d81d"),r("a9e3"),r("b680"),r("d3b7"),r("159b"),r("07ac"),r("4de4"),r("caad"),r("2532"),r("13d5"),r("fb6a"),r("bc3a")),u=r.n(s),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{width:"100%"}},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"180px"}},[r("el-form-item",{attrs:{label:"每日空投 MBOX 数"}},[r("el-input-number",{model:{value:e.form.uintNum,callback:function(t){e.$set(e.form,"uintNum",t)},expression:"form.uintNum"}})],1),r("el-form-item",{attrs:{label:"当前全网算力"}},[r("el-input-number",{attrs:{value:e.totalNum,disabled:""}})],1),r("el-form-item",{attrs:{label:"全网每天新增算力"}},[r("el-input-number",{model:{value:e.form.addNum,callback:function(t){e.$set(e.form,"addNum",t)},expression:"form.addNum"}})],1),r("el-form-item",{attrs:{label:"单位算力成本(u)"}},[r("el-input-number",{model:{value:e.form.cost,callback:function(t){e.$set(e.form,"cost",t)},expression:"form.cost"}})],1),r("el-form-item",{attrs:{label:"MBOX 价格"}},[r("el-input-number",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"算力加成"}},[r("el-input-number",{model:{value:e.form.addition,callback:function(t){e.$set(e.form,"addition",t)},expression:"form.addition"}}),e._v("% ")],1),r("el-form-item",{attrs:{label:"回本周期"}},[e._v(" "+e._s(e.result)+" 天 ")]),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("计算")])],1)],1)],1)},f=[],m={name:"CalcPayback",components:{},props:{net_h:Number},computed:{totalNum:function(){return Number(this.net_h)||0}},data:function(){return{form:{uintNum:2e5,addNum:12e4,cost:2.3,price:1.1,addition:52.5},result:0}},mounted:function(){},methods:{calcPayback:function(){var e=1,t=this.totalNum,r=this.form.uintNum/t,a=100*this.form.cost/(100+this.form.addition)/this.form.price;while(r<a&&e<=1e6)e++,t+=this.form.addNum,r+=this.form.uintNum/t;return e},submit:function(){this.result=this.calcPayback()}}},p=m,b=r("2877"),v=Object(b["a"])(p,d,f,!1,null,"1eb43c92",null),h=v.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{width:"100%","line-height":"1.5"}},[r("table",{staticClass:"table-box"},[r("tr",[r("td",[e._v("BOX理论价值")]),r("td",[e._v(e._s(e.price)+" = "+e._s(e.price_1)+" x 0.5 + "+e._s(e.price_2)+" x 0.35 + "+e._s(e.price_3)+" x 0.12 + "+e._s(e.price_4)+" x 0.025 + "+e._s(e.price_5)+" x 0.005")])]),r("tr",[r("td",[e._v("当前市场出售BOX最低价格")]),r("td",[e._v(e._s(e.price_box))])]),r("tr",[r("td",[e._v("相差比例")]),r("td",[e._v(e._s(e.rate)+" = ( "+e._s(e.price)+"- "+e._s(e.price_box)+" ) / "+e._s(e.price_box))])])])])},g=[],x=r("1da1"),w=(r("96cf"),r("3ca3"),r("ddb0"),{name:"BoxCalc",components:{},data:function(){return{price_1:0,price_2:0,price_3:0,price_4:0,price_5:0,price_box:0}},computed:{price:function(){return Number((.5*this.price_1+.35*this.price_2+.12*this.price_3+.025*this.price_4+.005*this.price_5).toFixed(2))},rate:function(){return Number(((this.price-this.price_box)/this.price_box).toFixed(4))}},mounted:function(){this.getBoxPrice(),this.getAllMoMoPrice()},methods:{getBoxPrice:function(){var e=this;u.a.get("https://nftapi.mobox.io/gem_auction/search/BNB?page=1&limit=1&type=&level=&sort=price&filter=2").then((function(t){var r,a,n,o=(null===(r=t.data)||void 0===r||null===(a=r.list)||void 0===a?void 0:a[0])||{},i=Number((null===o||void 0===o||null===(n=o.amounts)||void 0===n?void 0:n[0])||1),l=null===o||void 0===o?void 0:o.price;e.price_box=Number((l/i/Math.pow(10,9)).toFixed(2))}))},getMoMoPrice:function(e){return u.a.get("https://nftapi.mobox.io/auction/search/BNB?page=1&limit=1&category=&vType=".concat(e,"&sort=price&pType=")).then(function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(null===(r=t.data)||void 0===r||null===(a=r.list)||void 0===a?void 0:a[0])||{});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))))},getAllMoMoPrice:function(){var e=this;Promise.all([this.getMoMoPrice(1),this.getMoMoPrice(2),this.getMoMoPrice(3),this.getMoMoPrice(4),this.getMoMoPrice(5)]).then((function(t){e.price_1=Number((t[0].nowPrice/Math.pow(10,9)).toFixed(2)),e.price_2=Number((t[1].nowPrice/Math.pow(10,9)).toFixed(2)),e.price_3=Number((t[2].nowPrice/Math.pow(10,9)).toFixed(2)),e.price_4=Number((t[3].nowPrice/Math.pow(10,9)).toFixed(2)),e.price_5=Number((t[4].nowPrice/Math.pow(10,9)).toFixed(2))}))}}}),k=w,y=(r("72e4"),Object(b["a"])(k,_,g,!1,null,"1e6fed41",null)),A=y.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{width:"100%"}},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form,rules:e.rules,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"NFT 合约地址",prop:"contractAddress"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form.contractAddress,callback:function(t){e.$set(e.form,"contractAddress",t)},expression:"form.contractAddress"}})],1),r("el-form-item",{attrs:{label:"to",prop:"to"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form.to,callback:function(t){e.$set(e.form,"to",t)},expression:"form.to"}})],1),r("el-form-item",{attrs:{label:"tokenId",prop:"tokenId"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form.tokenId,callback:function(t){e.$set(e.form,"tokenId",t)},expression:"form.tokenId"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading,disabled:!e.isWallet},on:{click:e.transfer}},[e._v("转账")])],1)],1),r("el-form",{ref:"form1",attrs:{inline:!0,model:e.form1,rules:e.rules1,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"BOX 合约地址",prop:"contractAddress"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form1.contractAddress,callback:function(t){e.$set(e.form1,"contractAddress",t)},expression:"form1.contractAddress"}})],1),r("el-form-item",{attrs:{label:"to",prop:"to"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form1.to,callback:function(t){e.$set(e.form1,"to",t)},expression:"form1.to"}})],1),r("el-form-item",{attrs:{label:"id",prop:"id"}},[r("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form1.id,callback:function(t){e.$set(e.form1,"id",t)},expression:"form1.id"}},e._l(e.boxOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"数量",prop:"value"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form1.value,callback:function(t){e.$set(e.form1,"value",t)},expression:"form1.value"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading1,disabled:!e.isWallet},on:{click:e.transferBox}},[e._v("转账")]),r("el-button",{attrs:{disabled:!e.isWallet},on:{click:function(t){return e.viewBalance(e.form1)}}},[e._v("显示余额")]),e._v(" "+e._s(e.balance[e.form1.contractAddress+"-"+e.form1.id]||"")+" ")],1)],1),r("el-form",{ref:"form2",attrs:{inline:!0,model:e.form2,rules:e.rules1,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"宝石 合约地址",prop:"contractAddress"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form2.contractAddress,callback:function(t){e.$set(e.form2,"contractAddress",t)},expression:"form2.contractAddress"}})],1),r("el-form-item",{attrs:{label:"to",prop:"to"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form2.to,callback:function(t){e.$set(e.form2,"to",t)},expression:"form2.to"}})],1),r("el-form-item",{attrs:{label:"id",prop:"id"}},[r("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form2.id,callback:function(t){e.$set(e.form2,"id",t)},expression:"form2.id"}},e._l(e.gemOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"数量",prop:"value"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form2.value,callback:function(t){e.$set(e.form2,"value",t)},expression:"form2.value"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading2,disabled:!e.isWallet},on:{click:e.transferGEM}},[e._v("转账")]),r("el-button",{attrs:{disabled:!e.isWallet},on:{click:function(t){return e.viewBalance(e.form2)}}},[e._v("显示余额")]),e._v(" "+e._s(e.balance[e.form2.contractAddress+"-"+e.form2.id]||"")+" ")],1)],1),r("el-form",{ref:"form3",attrs:{inline:!0,model:e.form3,rules:e.rules1,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"MEC 合约地址",prop:"contractAddress"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form3.contractAddress,callback:function(t){e.$set(e.form3,"contractAddress",t)},expression:"form3.contractAddress"}})],1),r("el-form-item",{attrs:{label:"to",prop:"to"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form3.to,callback:function(t){e.$set(e.form3,"to",t)},expression:"form3.to"}})],1),r("el-form-item",{attrs:{label:"id",prop:"id"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form3.id,callback:function(t){e.$set(e.form3,"id",t)},expression:"form3.id"}})],1),r("el-form-item",{attrs:{label:"数量",prop:"value"}},[r("el-input",{attrs:{clearable:""},model:{value:e.form3.value,callback:function(t){e.$set(e.form3,"value",t)},expression:"form3.value"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loadingObj[e.form3.contractAddress+"-"+e.form3.id],disabled:!e.isWallet},on:{click:function(t){return e.safeTransfer(e.form3,"form3")}}},[e._v("转账")]),r("el-button",{attrs:{disabled:!e.isWallet},on:{click:function(t){return e.viewBalance(e.form3)}}},[e._v("显示余额")]),e._v(" "+e._s(e.balance[e.form3.contractAddress+"-"+e.form3.id]||"")+" ")],1)],1)],1)},N=[],P=(r("25f0"),r("c030")),$={name:"Transfer",components:{},props:{},computed:{isWallet:function(){return""!==this.$store.state.wallet}},data:function(){return{form:{contractAddress:"0x4eededfe89dad70ab8cbf70e4dd140ff8e6e8ce5",to:"",tokenId:""},rules:{contractAddress:[{required:!0,message:"必填项",trigger:"blur"}],tokenId:[{required:!0,message:"必填项",trigger:"blur"}],to:[{required:!0,message:"必填项",trigger:"blur"}]},loading:!1,form1:{contractAddress:"0xed8711feff83b446158259981fd97645856e82a5",to:"0xb5C2ebAa613D2f0E2aF11D2397ED6dEaD28DF11d",id:"1",value:""},rules1:{contractAddress:[{required:!0,message:"必填项",trigger:"blur"}],to:[{required:!0,message:"必填项",trigger:"blur"}],id:[{required:!0,message:"必填项",trigger:"blur"}],value:[{required:!0,message:"必填项",trigger:"blur"}]},loading1:!1,boxOptions:[{value:"1",label:"BOX"},{value:"2",label:"MEC BOX"}],form2:{contractAddress:"0xf91d6e71f6d9e6dbffe92597ce0fdd76058c49a7",to:"0xb5C2ebAa613D2f0E2aF11D2397ED6dEaD28DF11d",id:"101",value:""},loading2:!1,gemOptions:[{value:"101",label:"红宝石"},{value:"201",label:"绿宝石"},{value:"301",label:"蓝宝石"},{value:"401",label:"黄宝石"}],form3:{contractAddress:"0x98387108842a7cfc7ba23e080030351f6ea68ac0",to:"0xb5C2ebAa613D2f0E2aF11D2397ED6dEaD28DF11d",id:"1",value:""},loading3:!1,balance:{},loadingObj:{}}},mounted:function(){},methods:{contract:function(e,t){var r,a;return""!==this.$store.state.wallet&&(r=new P["a"].providers.Web3Provider(this.$store.state.provider),a=r.getSigner()),new P["a"].Contract(e,t,a)},transferContract:function(){var e=["function transferFrom(address _from, address _to, uint256 _tokenId)"],t=this.contract(this.form.contractAddress,e),r=this.form,a=r.to,n=r.tokenId;return console.log("momoNFT",t),t.transferFrom(this.$store.state.currentAccount,a,String(n))},boxTransferContract:function(){var e=["function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes _data)"],t=this.contract(this.form1.contractAddress,e),r=this.form1,a=r.to,n=r.value,o=r.id;return t["safeTransferFrom(address,address,uint256,uint256,bytes)"](this.$store.state.currentAccount,a,o,n,P["a"].utils.arrayify("0xa00100"))},GEMTransferContract:function(){var e=["function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes _data)"],t=this.contract(this.form2.contractAddress,e),r=this.form2,a=r.to,n=r.value,o=r.id;return t.safeTransferFrom(this.$store.state.currentAccount,a,o,n,P["a"].utils.arrayify("0xa00100"))},safeTransferContract:function(e){var t=["function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes _data)"],r=this.contract(e.contractAddress,t),a=e.to,n=e.value,o=e.id;return r.safeTransferFrom(this.$store.state.currentAccount,a,o,n,P["a"].utils.arrayify("0xa00100"))},transfer:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.form.validate((function(t){if(!t)return!1;e.loading=!0,e.transferContract().then((function(e){return e.wait()})).then((function(){e.$message.success("转账成功！")})).catch((function(t){e.handleError(t)})).finally((function(){e.loading=!1}))}));case 1:case"end":return t.stop()}}),t)})))()},transferBox:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.form1.validate((function(t){if(!t)return!1;e.loading1=!0,e.boxTransferContract().then((function(e){return e.wait()})).then((function(){e.$message.success("转账成功！"),e.viewBalance(e.form1)})).catch((function(t){e.loading1=!1,e.handleError(t)})).finally((function(){e.loading1=!1}))}));case 1:case"end":return t.stop()}}),t)})))()},transferGEM:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.form2.validate((function(t){if(!t)return!1;e.loading2=!0,e.GEMTransferContract().then((function(e){return e.wait()})).then((function(){e.$message.success("转账成功！"),e.viewBalance(e.form2)})).catch((function(t){e.loading2=!1,e.handleError(t)})).finally((function(){e.loading2=!1}))}));case 1:case"end":return t.stop()}}),t)})))()},viewBalance:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=["function balanceOf(address _owner, uint256 id) view returns (uint256)"],n=t.contract(e.contractAddress,a),r.next=4,n.balanceOf(t.$store.state.currentAccount,e.id);case 4:o=r.sent.toString(),console.log("balance",o),t.$set(t.balance,e.contractAddress+"-"+e.id,o);case 7:case"end":return r.stop()}}),r)})))()},safeTransfer:function(e,t){var r=this;return Object(x["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r.$refs[t].validate((function(t){if(!t)return!1;r.$set(r.loadingObj,e.contractAddress+"-"+e.id,!0),r.safeTransferContract(e).then((function(e){return e.wait()})).then((function(){r.$message.success("转账成功！"),r.viewBalance(e)})).catch((function(e){r.handleError(e)})).finally((function(){r.$set(r.loadingObj,e.contractAddress+"-"+e.id,!1)}))}));case 1:case"end":return a.stop()}}),a)})))()},handleError:function(e){4001===e.code?this.$message.error("User has rejected"):-32602===e.code?this.$message.error("The parameters were invalid"):-32603===e.code&&e.data?this.$message.error(e.data.message):(e.code||e.message)&&this.$message.error(e.message)}}},O=$,C=Object(b["a"])(O,M,N,!1,null,"6ade4892",null),F=C.exports,j=r("2f62"),D=r("335a");a["default"].use(j["a"]);var E=new j["a"].Store({state:function(){return{chainId:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_CHAIN_ID||D["a"].get("chainId",""),accounts:[],currentAccount:"",wallet:"",provider:""}},mutations:{setWallet:function(e,t){e.wallet=t},setProvider:function(e,t){e.provider=t},setChainId:function(e,t){e.chainId=parseInt(t),D["a"].set("chainId",e.chainId)},setCurrentAccount:function(e,t){var r;(e.currentAccount=t,localStorage.currentAccount!==e.currentAccount)&&(localStorage.currentAccount=null===(r=e.currentAccount)||void 0===r?void 0:r.replace(/"|'/g,""))},setAccounts:function(e,t){e.accounts=t}},actions:{disconnect:function(e){var t=e.commit,r=e.state,a=["MetaMask","WalletConnect","WalletLink"];r.wallet===a[1]?r.provider.disconnect():r.wallet===a[2]&&r.provider.close(),t("setWallet",""),t("setProvider",""),t("setCurrentAccount",""),D["a"].remove("currentAccount"),D["a"].remove("currentWallet"),t("setChainId",""),D["a"].remove("chainId")}}});function B(e){E.commit("setAccounts",e);var t=E.state.currentAccount;0===e.length?(E.commit("setWallet",""),E.commit("setProvider",""),D["a"].remove("currentWallet"),E.commit("setCurrentAccount","")):e[0]!==t&&(E.commit("setCurrentAccount",e[0]),window.location.reload())}function T(){window.ethereum.on("chainChanged",(function(){window.location.reload()})),window.ethereum.on("accountsChanged",B),window.ethereum.on("disconnect",(function(){E.commit("setWallet",""),E.commit("setProvider",""),D["a"].remove("currentWallet")}))}function S(){return new Promise((function(e,t){window.ethereum.request({method:"eth_requestAccounts"}).then((function(r){E.commit("setChainId",window.ethereum.chainId),E.commit("setAccounts",r),E.commit("setProvider",window.ethereum),E.commit("setWallet","MetaMask"),D["a"].set("currentWallet","MetaMask");var a=E.state.currentAccount;0!==r.length?(r[0]!==a&&(E.commit("setCurrentAccount",r[0]),T()),e(!0)):t("please connect MetaMask")})).catch((function(e){4001===e.code?t("请连接MetaMask"):console.error(e)}))}))}var I={name:"Monitor",components:{CalcPayback:h,Transfer:F,BoxCalc:A},data:function(){return{listData:[],loading:!1,importantData:{},nftList:[]}},computed:{net_h:function(){return this.importantData.net_h},isWallet:function(){return""!==this.$store.state.wallet}},filters:{formatDate:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss",a=e;if(!a)return e;var n=new Date(a);return t=r.replace("YYYY",n.getFullYear()),t=t.replace("MM",(n.getMonth()+1<10?"0":"")+(n.getMonth()+1)),t=t.replace("DD",(n.getDate()<10?"0":"")+n.getDate()),t=t.replace("HH",(n.getHours()<10?"0":"")+n.getHours()),t=t.replace("mm",(n.getMinutes()<10?"0":"")+n.getMinutes()),t=t.replace("ss",(n.getSeconds()<10?"0":"")+n.getSeconds()),t}},mounted:function(){this.getCurrent(),this.getNftList()},methods:{getData:function(){var e=this;u.a.get("https://momo.wayi.io/api").then((function(t){e.listData=t.data.data.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{tvl:Number((1*e.tvl).toFixed(2)),pool2_apy:Number((100*e.pool2_apy).toFixed(2)),net_h:Number((1*e.net_h).toFixed(2)),mbox_price_1hh:Number((1*e.mbox_price_1hh).toFixed(2)),volume_24h:Number((e.volume_24h/Math.pow(10,9)).toFixed(2)),mbox_price:Number((1*e.mbox_price).toFixed(2)),key_price:Number((1*e.key_price).toFixed(2)),buyback_amount:Number((1*e.buyback_amount).toFixed(2)),burn_amount:Number((1*e.burn_amount).toFixed(2))})}))}))},getCurrent:function(){var e=this;u.a.get("https://momo.wayi.io/api/current").then((function(t){var r=t.data.data;e.importantData=Object(c["a"])(Object(c["a"])({},r),{},{tvl:Number((1*r.tvl).toFixed(2)),pool2_apy:Number((100*r.pool2_apy).toFixed(2)),net_h:Number((1*r.net_h).toFixed(2)),mbox_price_1hh:Number((1*r.mbox_price_1hh).toFixed(2)),volume_24h:Number((r.volume_24h/Math.pow(10,9)).toFixed(2)),mbox_price:Number((1*r.mbox_price).toFixed(2)),key_price:Number((1*r.key_price).toFixed(2)),buyback_amount:Number((1*r.buyback_amount).toFixed(2)),burn_amount:Number((1*r.burn_amount).toFixed(2))})})).finally((function(){setTimeout((function(){e.getCurrent()}),5e3)}))},getNftList:function(){var e=this;u.a.get("https://nftapi.mobox.io/auction/search/BNB?page=1&limit=3000&category=&vType=&sort=-time&pType=").then((function(t){var r=t.data.list,a={};r.forEach((function(e){var t=e.prototype%1e4,r=parseInt(e.prototype/1e4)-1;if(a[t]){var n=a[t][r],o=n?n.nowPrice/n.lvHashrate:0,i=e.nowPrice/e.lvHashrate;(n&&o>i||!n)&&(a[t][r]=e)}else a[t]=[],a[t][r]=e}));var n=Object.values(a);n=n.filter((function(e){return e.length>4||4===e.length&&!e.includes(void 0)}));var o="#/auctionView/",i=n.map((function(e){var t=e.reduce((function(e,t){return e+t.lvHashrate}),0);t=4===e.length?t+300:t;var r,a,n,i,l,c,s=e.reduce((function(e,t){return e+t.nowPrice}),0)/1e9,u=(s/t).toFixed(2),d=4===e.length?e[3].level:e.slice(-1)[0].level;return 4===e.length?(r=o+e[0].tx,a=o+e[1].tx,n=o+e[2].tx,i=o+e[3].tx):5===e.length?l=o+e[4].tx:6===e.length&&(c=o+e[5].tx),{item:e,totalHashrate:t,totalPrice:s,avgPrice:u,level:d,link1:r,link2:a,link3:n,link4:i,link5:l,link6:c}}));i=i.sort((function(e,t){return e.avgPrice-t.avgPrice})),e.nftList=i}))},connectMetaMask:function(){var e=this;S().then((function(t){console.log(t),t&&(e.dialogVisible=!1)})).catch((function(e){console.log(e)}))}}},W=I,H=(r("ce20"),r("fba2"),Object(b["a"])(W,i,l,!1,null,"079e7b20",null)),R=H.exports,q={name:"App",components:{Monitor:R}},X=q,Y=(r("034f"),Object(b["a"])(X,n,o,!1,null,null,null)),L=Y.exports,G=r("5c96"),U=r.n(G);r("0fae"),r("4ee2");a["default"].use(U.a),a["default"].config.productionTip=!1,new a["default"]({store:E,render:function(e){return e(L)}}).$mount("#app")},5933:function(e,t,r){},"72e4":function(e,t,r){"use strict";var a=r("fc5c"),n=r.n(a);n.a},"85ec":function(e,t,r){},b28a:function(e,t,r){},ce20:function(e,t,r){"use strict";var a=r("5933"),n=r.n(a);n.a},fba2:function(e,t,r){"use strict";var a=r("b28a"),n=r.n(a);n.a},fc5c:function(e,t,r){}});