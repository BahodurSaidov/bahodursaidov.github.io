(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6304d632"],{"6c62":function(e,s,i){"use strict";i("dbd0")},"8ee8":function(e,s,i){"use strict";var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(" "+e._s(e.$t("permission.roles"))+": "+e._s(e.roles)+" ")]),e._v(" "+e._s(e.$t("permission.switchRoles"))+": "),i("el-radio-group",{model:{value:e.switchRoles,callback:function(s){e.switchRoles=s},expression:"switchRoles"}},[i("el-radio-button",{attrs:{label:"doctor"}}),i("el-radio-button",{attrs:{label:"admin"}})],1)],1)},n=[],o={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var s=this;this.$store.dispatch("user/changeRoles",e).then((function(){s.$emit("change")}))}}}},r=o,a=i("2877"),c=Object(a["a"])(r,t,n,!1,null,null,null);s["a"]=c.exports},a99f:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"app-container"},[i("switch-roles",{on:{change:e.handleRolesChange}}),i("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v(" Only "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['admin']\" ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["doctor"],expression:"['doctor']"}],staticClass:"permission-alert"},[e._v(" Only "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("doctor")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["doctor"],expression:"['doctor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['doctor']\" ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","doctor"],expression:"['admin','doctor']"}],staticClass:"permission-alert"},[e._v(" Both "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("doctor")]),e._v(" can see this ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","doctor"],expression:"['admin','doctor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-permission=\"['admin','doctor']\" ")])],1)]),i("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"60px"}},[i("aside",[e._v(" "+e._s(e.$t("permission.tips"))+" "),i("br"),e._v(" e.g. ")]),i("el-tabs",{staticStyle:{width:"550px"},attrs:{type:"border-card"}},[e.checkPermission(["admin"])?i("el-tab-pane",{attrs:{label:"Admin"}},[e._v(" Admin can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['admin'])\" ")])],1):e._e(),e.checkPermission(["doctor"])?i("el-tab-pane",{attrs:{label:"Doctor"}},[e._v(" Doctor can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['doctor'])\" ")])],1):e._e(),e.checkPermission(["admin","doctor"])?i("el-tab-pane",{attrs:{label:"Admin-OR-Doctor"}},[e._v(" Both admin or doctor can see this "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v(" v-if=\"checkPermission(['admin','doctor'])\" ")])],1):e._e()],1)],1)],1)},n=[],o=(i("caad"),i("2532"),i("4360"));function r(e,s){var i=s.value,t=o["a"].getters&&o["a"].getters.roles;if(!(i&&i instanceof Array))throw new Error("need roles! Like v-permission=\"['admin','doctor']\"");if(i.length>0){var n=i,r=t.some((function(e){return n.includes(e)}));r||e.parentNode&&e.parentNode.removeChild(e)}}var a={inserted:function(e,s){r(e,s)},update:function(e,s){r(e,s)}},c=function(e){e.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(c)),a.install=c;var l=a;function d(e){if(e&&e instanceof Array&&e.length>0){var s=o["a"].getters&&o["a"].getters.roles,i=e,t=s.some((function(e){return i.includes(e)}));return t}return console.error("need roles! Like v-permission=\"['admin','doctor']\""),!1}var m=i("8ee8"),p={name:"DirectivePermission",components:{SwitchRoles:m["a"]},directives:{permission:l},data:function(){return{key:1}},methods:{checkPermission:d,handleRolesChange:function(){this.key++}}},v=p,u=(i("6c62"),i("2877")),h=Object(u["a"])(v,t,n,!1,null,"2b6fb8ac",null);s["default"]=h.exports},dbd0:function(e,s,i){}}]);