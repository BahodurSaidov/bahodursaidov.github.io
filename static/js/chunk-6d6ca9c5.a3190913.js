(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6ca9c5"],{"1c18":function(t,e,a){},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var i=l(),n=t-i,r=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=r;var l=Math.easeInOutQuad(c,i,n,e);s(l),c<e?o(t):a&&"function"===typeof a&&a()};d()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},d=c,u=(a("e498"),a("2877")),p=Object(u["a"])(d,i,n,!1,null,"6af373ef",null);e["a"]=p.exports},"3fda":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("objects.administration.queue.patient._title"),"prefix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.patient,callback:function(e){t.$set(t.listQuery,"patient",e)},expression:"listQuery.patient"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}},["+id"==e.key?a("span",[a("i",{staticClass:"el-icon-bottom",staticStyle:{color:"green","font-size":"19px"}}),t._v(" "+t._s(e.label))]):t._e(),"-id"==e.key?a("span",[a("i",{staticClass:"el-icon-top",staticStyle:{color:"red","font-size":"19px"}}),t._v(" "+t._s(e.label)+" ")]):t._e()])})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" "+t._s(t.$t("form.search"))+" ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v(" "+t._s(t.$t("form.add"))+" ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(" "+t._s(t.$t("form.export"))+" ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(e){return t.handleOpenQRCode()}}},[a("svg-icon",{staticStyle:{"font-size":"19px"},attrs:{"icon-class":"qrcode"}})],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","row-class-name":t.tableRowClassName,"header-cell-style":{background:"#3d9ef9",color:"white"}},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("form.id"),prop:"id",sortable:"custom",align:"center",width:"80","class-name":t.getSortClass("id")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.id))])]}}])}),a("el-table-column",{attrs:{label:t.$t("objects.administration.queue.status._title"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.status._description")))]),a("span",[t._v(t._s(t.$t("form.selectables.queueStatus."+i.status)))])])]}}])}),a("el-table-column",{attrs:{label:t.$t("objects.administration.patient.name._title"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.patient.name._description")))]),a("span",[t._v(t._s(i.patient.name))])])]}}])}),a("el-table-column",{attrs:{label:t.$t("objects.administration.patient.gender._title"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.patient.gender._description")))]),"male"===i.patient.gender?a("i",{staticClass:"el-icon-male",staticStyle:{color:"blue","font-size":"19px"}}):"female"===i.patient.gender?a("i",{staticClass:"el-icon-female",staticStyle:{color:"red","font-size":"19px"}}):a("span",[t._v(t._s(t.$t("form.selectables.gender."+i.patient.gender)))])])]}}])}),a("el-table-column",{attrs:{label:t.$t("objects.administration.queue.note._title"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.note._description")))]),a("span",[t._v(t._s(i.note&&i.note.join(", ")))])])]}}])}),a("el-table-column",{attrs:{label:t.$t("objects.administration.queue.emergency._title"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.emergency._description")))]),i.emergency?a("i",{staticClass:"el-icon-check",staticStyle:{color:"green","font-size":"19px"}}):t._e(),i.emergency?t._e():a("i",{staticClass:"el-icon-close",staticStyle:{color:"red","font-size":"19px"}})])]}}])}),t._e(),a("el-table-column",{attrs:{label:t.$t("form.actions"),align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,n=e.$index;return[a("router-link",{staticClass:"detail-link",attrs:{to:"/doctor/queue/detail/"+i.id}},[a("el-button",{attrs:{type:"success",size:"mini"}},[a("span",[t._v(" "+t._s(t.$t("form.view")))])])],1),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v(" "+t._s(t.$t("form.edit"))+" ")]),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(i,n)}}},[t._v(" "+t._s(t.$t("form.delete"))+" ")]):t._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"100%"},attrs:{model:t.temp,"label-position":"left","label-width":"auto"}},[a("el-form-item",{attrs:{rules:t.getRules("queue","status",{}),label:t.$t("objects.administration.queue.status._title"),prop:"status"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.status._description")))]),a("el-select",{staticClass:"filter-item",attrs:{placeholder:t.$t("objects.administration.queue.status._title")},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}},[a("span",[t._v(" "+t._s(e.display_name)+" ")])])})),1)],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","location",{min:3,max:19}),label:t.$t("objects.administration.queue.location._title"),prop:"location"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.location._description")))]),a("el-input",{attrs:{clearable:"",placeholder:t.$t("objects.administration.queue.location._title")},model:{value:t.temp.location,callback:function(e){t.$set(t.temp,"location",e)},expression:"temp.location"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","note",{}),label:t.$t("objects.administration.queue.note._title"),prop:"note"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.note._description")))]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{placeholder:t.$t("objects.administration.queue.note._title"),filterable:"","allow-create":"",multiple:"","reserve-keyword":""},model:{value:t.temp.note,callback:function(e){t.$set(t.temp,"note",e)},expression:"temp.note"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","emergency",{}),label:t.$t("objects.administration.queue.emergency._title"),prop:"emergency"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.emergency._description")))]),a("el-checkbox",{attrs:{checked:""},model:{value:t.temp.emergency,callback:function(e){t.$set(t.temp,"emergency",e)},expression:"temp.emergency"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","responsibleBy",{min:3,max:19}),label:t.$t("objects.administration.queue.responsibleBy._title"),prop:"responsibleBy"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.responsibleBy._description")))]),a("el-input",{attrs:{clearable:"",placeholder:t.$t("objects.administration.queue.responsibleBy._title")},model:{value:t.temp.responsibleBy,callback:function(e){t.$set(t.temp,"responsibleBy",e)},expression:"temp.responsibleBy"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","createdBy",{min:3,max:19}),label:t.$t("objects.administration.queue.createdBy._title"),prop:"createdBy"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.createdBy._description")))]),a("el-input",{attrs:{clearable:"",placeholder:t.$t("objects.administration.queue.createdBy._title")},model:{value:t.temp.createdBy,callback:function(e){t.$set(t.temp,"createdBy",e)},expression:"temp.createdBy"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","createdAt",{}),label:t.$t("objects.administration.queue.createdAt._title"),prop:"createdAt"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.createdAt._description")))]),a("el-date-picker",{attrs:{type:"datetime",placeholder:t.$t("objects.administration.queue.createdAt._title")},model:{value:t.temp.createdAt,callback:function(e){t.$set(t.temp,"createdAt",e)},expression:"temp.createdAt"}})],1)],1),a("el-form-item",{attrs:{rules:t.getRules("queue","updatedAt",{}),label:t.$t("objects.administration.queue.updatedAt._title"),prop:"updatedAt"}},[a("el-tooltip",{attrs:{"open-delay":1e3,"hide-after":5e3,enterable:!1,placement:"top-start",effect:"dark"}},[a("p",{staticStyle:{"max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("objects.administration.queue.updatedAt._description")))]),a("el-date-picker",{attrs:{type:"datetime",placeholder:t.$t("objects.administration.queue.updatedAt._title")},model:{value:t.temp.updatedAt,callback:function(e){t.$set(t.temp,"updatedAt",e)},expression:"temp.updatedAt"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" "+t._s(t.$t("form.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" "+t._s(t.$t("form.confirm"))+" ")])],1)],1),a("el-dialog",{attrs:{width:"450px",title:t.$t("qrcode.title"),visible:t.dialogQRCodeVisible,"before-close":t.handleCloseQRCode},on:{"update:visible":function(e){t.dialogQRCodeVisible=e}}},[a("h2",[t._v(t._s(t.$t("qrcode.testing")))]),a("qrcode-stream",{ref:"qrcode",attrs:{camera:t.cameraQRCode},on:{decode:t.onQRDecode,init:t.onInitQRCode}},[t.validationSuccessQRCode?a("div",{staticClass:"validation-success-qrcode"},[t._v(" "+t._s(t.$t("qrcode.success"))+" ")]):t._e(),t.validationFailureQRCode?a("div",{staticClass:"validation-failure-qrcode"},[t._v(" "+t._s(t.$t("qrcode.failure"))+" ")]):t._e(),t.validationPendingQRCode?a("div",{staticClass:"validation-pending-qrcode"},[t._v(" "+t._s(t.$t("qrcode.pending"))+" ")]):t._e()]),a("p",{staticClass:"qrdecode-result"},[t._v(t._s(t.$t("qrcode.prevValue"))),a("b",[t._v(t._s(t.resultQRCode))])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.handleCloseQRCode(null)}}},[t._v(" "+t._s(t.$t("form.cancel"))+" ")])],1)],1)],1)},n=[],o=a("1da1"),s=a("5530"),l=a("3835"),r=(a("96cf"),a("99af"),a("d3b7"),a("4e82"),a("c740"),a("a434"),a("3ca3"),a("ddb0"),a("d81d"),a("b64b"),a("caad"),a("a15b"),a("b0c0"),a("fb6a"),a("5559")),c=a("6724"),d=a("333d"),u=a("bb6f"),p=a("2659"),m=a("e26d"),f=a.n(m),h={name:"QueueTable",setup:function(){var t=Object(p["a"])(f.a),e=Object(l["a"])(t,1),a=e[0];return{qrcodeSound:a}},components:{QrcodeStream:u["QrcodeStream"],Pagination:d["a"]},directives:{waves:c["a"]},filters:{socialFilter:function(t,e){return e[t]}},data:function(){return{isValidQRCode:void 0,cameraQRCode:"auto",resultQRCode:null,dialogQRCodeVisible:!1,testingQRCode:0,tableKey:0,list:null,total:0,listLoading:!0,listQuery:{id:void 0,page:1,limit:20,gender:void 0,patient:void 0,sort:"+id"},sortOptions:[{label:"".concat(this.$i18n.t("form.id")," ").concat(this.$i18n.t("form.ascending")),key:"+id"},{label:"".concat(this.$i18n.t("form.id")," ").concat(this.$i18n.t("form.descending")),key:"-id"}],temp:Object(s["a"])({},this.$store.state.administration.queue.sample),dialogFormVisible:!1,dialogStatus:"",textMap:{update:this.$i18n.t("form.edit"),create:this.$i18n.t("form.create")},queueData:[],downloadLoading:!1,queueSuggestions:[]}},computed:{validationPendingQRCode:function(){return void 0===this.isValidQRCode&&"off"===this.cameraQRCode},validationSuccessQRCode:function(){return!0===this.isValidQRCode},validationFailureQRCode:function(){return!1===this.isValidQRCode},statusTypes:function(){return[{key:"wait",display_name:this.$i18n.t("form.selectables.queueStatus.wait")},{key:"go",display_name:this.$i18n.t("form.selectables.queueStatus.go")},{key:"noshow",display_name:this.$i18n.t("form.selectables.queueStatus.noshow")},{key:"closed",display_name:this.$i18n.t("form.selectables.queueStatus.closed")}]}},created:function(){this.getList()},methods:{handleOpenQRCode:function(){this.turnCameraOn(),this.isValidQRCode=void 0,this.dialogQRCodeVisible=!0},handleCloseQRCode:function(t){this.dialogQRCodeVisible=!1,t&&t(),this.turnCameraOff()},onInitQRCode:function(t){t.catch(console.error).then(this.resetValidationStateQRCode)},resetValidationStateQRCode:function(){this.isValidQRCode=void 0},onQRDecode:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.qrcodeSound(),e.resultQRCode=t,e.turnCameraOff(),i=!0,i?Object(r["b"])({id:t}).then((function(t){setTimeout((function(){t.data.total||e.testingQRCode%2===0?(e.isValidQRCode=!0,e.listQuery.id=55,e.getList(),e.dialogQRCodeVisible=!1):(e.isValidQRCode=!1,e.turnCameraOn())}),2e3)})):e.isValidQRCode=!1,e.testingQRCode+=1,a.next=8,e.timeout(2e3);case 8:case"end":return a.stop()}}),a)})))()},turnCameraOn:function(){this.cameraQRCode="auto"},turnCameraOff:function(){this.cameraQRCode="off"},timeout:function(t){return new Promise((function(e){window.setTimeout(e,t)}))},getList:function(){var t=this;this.listLoading=!0,Object(r["b"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1e3)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"Successful operation",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp=Object(s["a"])({},this.$store.state.administration.queue.sample)},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,Object(r["a"])(t.temp).then((function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"success",message:"update completed",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.patient=Object.assign({},t.patient.identifier),this.temp.createdAt=new Date(this.temp.createdAt),this.temp.updatedAt=new Date(this.temp.updatedAt),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);Object(r["d"])(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"success",message:"update completed",type:"success",duration:2e3})}))}}))},handleDelete:function(t,e){this.$notify({title:"success",message:"update completed",type:"success",duration:2e3}),this.list.splice(e,1)},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-0143048a"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(e){var a=Object.keys(t.list[0]).map((function(e){return"id"===e?t.$i18n.t("form."+e):t.$i18n.t("objects.administration.queue."+e+"._title")})),i=Object.keys(t.list[0]),n=t.formatJson(i);e.export_json_to_excel({header:a,data:n,filename:"queue-list"}),t.downloadLoading=!1}))},formatJson:function(t){var e=this;return this.list.map((function(a){return t.map((function(t){return"emergency"===t?a[t]?e.$i18n.t("form.selectables.boolean.yes"):e.$i18n.t("form.selectables.boolean.no"):"status"===t?e.$i18n.t("form.selectables.queueStatus.".concat(a[t])):["createdAt","updatedAt"].includes(t)?e.properDateTime(a[t]):["note"].includes(t)?a[t].join(", "):a[t]}))}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"},queryNameSearchAsync:function(t,e){var a=this.queueSuggestions;Object(r["b"])({name:t}).then((function(t){setTimeout((function(){t.data.total&&(a=t.data.items.map((function(t){var e={};return e.value="".concat(t.name),e.id=t.id,e}))),e(a)}),2e3)}))},createNameFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleNameSelect:function(t){this.listQuery.id=t.id,this.dialogFormVisible=!1,this.$refs["dataForm"].resetFields(),this.getList()},getRules:function(t,e,a){var i=this,n=a.min,o=void 0===n?null:n,s=a.max,l=void 0===s?null:s,r=a.len,c=void 0===r?null:r,d=this.$store.state.administration[t].rules[e]||[];return d.map((function(a){var n={property:i.$i18n.t("objects.administration.".concat(t,".").concat(e,"._title")),min:o,max:l,len:c};return a.message=i.$i18n.t("form.validationRules."+a._rule,n),a}))},properDateTime:function(t){if(!t)return"";var e=new Date(t);return("00"+(e.getMonth()+1)).slice(-2)+"-"+("00"+e.getDate()).slice(-2)+"-"+e.getFullYear()+" "+("00"+e.getHours()).slice(-2)+":"+("00"+e.getMinutes()).slice(-2)},tableRowClassName:function(t){t.row,t.rowIndex;return""}}},b=h,g=(a("6eba"),a("2877")),y=Object(g["a"])(b,i,n,!1,null,null,null);e["default"]=y.exports},5559:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return r}));var i=a("b775"),n=a("08f9");function o(t){return Object(i["a"])({url:Object(n["a"])()+"/queue/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:Object(n["a"])()+"/queue/detail",method:"get",params:{id:t}})}function l(t){return Object(i["a"])({url:Object(n["a"])()+"/queue/create",method:"post",data:t})}function r(t){return Object(i["a"])({url:Object(n["a"])()+"/queue/update",method:"post",data:t})}},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function n(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=n.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),n.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=n.color,l.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var o={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},s=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(s)),o.install=s;e["a"]=o},"6eba":function(t,e,a){"use strict";a("a308")},"8d41":function(t,e,a){},a308:function(t,e,a){},e26d:function(t,e,a){t.exports=a.p+"static/media/qrcode.01ce4c19.mp3"},e498:function(t,e,a){"use strict";a("1c18")}}]);