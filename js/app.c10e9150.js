(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1862:function(e,t,r){},"314a":function(e,t,r){"use strict";var a=r("8113"),n=r.n(a);n.a},"4ffd":function(e,t,r){e.exports=r.p+"img/logo.303a7701.png"},5544:function(e,t,r){"use strict";var a=r("1862"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"app",components:{}},i=o,l=r("2877"),u=Object(l["a"])(i,n,s,!1,null,null,null),c=u.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-contianer"},[r("div",{staticClass:"login-box"},[e._m(0),r("div",{staticClass:"form-box"},[r("el-form",{ref:"loginFormRef",staticClass:"login-form",attrs:{model:e.form,rules:e.loginFormRules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"iconfont icon-wode",type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"iconfont icon-jiemi",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登陆")]),r("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)])])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon-box"},[a("img",{attrs:{src:r("4ffd"),alt:""}})])}],p=(r("96cf"),r("1da1")),g={name:"Login",data:function(){return{form:{username:"admin",password:"123456"},loginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}]}}},methods:{reset:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("/login",e.form);case 4:if(a=t.sent,n=a.data,200!==n.meta.status){t.next=10;break}return window.sessionStorage.setItem("token",n.data.token),e.$message.success("登陆成功"),t.abrupt("return",e.$router.push("/home"));case 10:return t.abrupt("return",e.$message.error("登陆失败！"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},b=g,h=(r("5544"),Object(l["a"])(b,m,f,!1,null,"570a51ea",null)),v=h.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"home-container"},[a("el-header",[a("div",[a("img",{staticClass:"logo-img",attrs:{src:r("4ffd"),alt:""}}),a("span",[e._v("项目管理平台")])]),a("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("退出")])],1),a("el-container",[a("el-aside",{attrs:{width:e.isCollapse?"56":"200"}},[a("div",{staticClass:"btncollapse",on:{click:e.collapseContal}},[e._v("|||")]),a("el-menu",{attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#409eff",collapse:e.isCollapse,"collapse-transition":!1,router:"","default-active":e.activeMenu}},e._l(e.menusList,(function(t){return a("el-submenu",{key:t.id,attrs:{index:t.id+""}},[a("template",{slot:"title"},[a("i",{class:e.icons[t.id]}),a("span",[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return a("el-menu-item",{key:t.id,attrs:{index:"/"+t.path},on:{click:function(r){return e.saveActibeMenu("/"+t.path)}}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",[e._v(e._s(t.authName))])])],2)}))],2)})),1)],1),a("el-container",[a("el-main",[a("router-view")],1),a("el-footer",[e._v("Footer")])],1)],1)],1)},x=[],y={name:"Home",data:function(){return{menusList:[],icons:{125:"iconfont icon-wode",103:"iconfont icon-xinxi",101:"iconfont icon-xueshimao",102:"iconfont icon-shexiang",145:"iconfont icon-shoucang"},isCollapse:!1,activeMenu:""}},created:function(){this.getMenuList();var e=window.sessionStorage.getItem("activeMenu");this.activeMenu=e||"/users"},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("menus");case 2:r=t.sent,a=r.data,console.log(a),e.menusList=a.data;case 6:case"end":return t.stop()}}),t)})))()},collapseContal:function(){this.isCollapse=!this.isCollapse},saveActibeMenu:function(e){window.sessionStorage.setItem("activeMenu",e),this.activeMenu=e}}},_=y,k=(r("314a"),Object(l["a"])(_,w,x,!1,null,"61d41695",null)),F=k.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Welcome")])])}],C={name:"Welcome"},R=C,j=Object(l["a"])(R,$,U,!1,null,"7f887ce7",null),O=j.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:40}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入项目名称",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList,align:"center"}},[r("el-table-column",{attrs:{align:"center",type:"index",label:"#"}}),r("el-table-column",{attrs:{align:"center",prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{align:"center",prop:"create_time",label:"日期"}}),r("el-table-column",{attrs:{align:"center",prop:"mobile",label:"手机号"}}),r("el-table-column",{attrs:{align:"center",prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{align:"center",prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{align:"center",prop:"mg_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top",transition:"in"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(r){return e.editUserDialog(t.row.id)}}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"查看",placement:"top",transition:"in"}},[r("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",transition:"in"}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,3,5],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClose}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRule,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editUserVisible,width:"50%"},on:{"update:visible":function(t){e.editUserVisible=t},close:e.editDialogClose}},[r("el-form",{ref:"editUserFormRef",attrs:{model:e.editUserForm,rules:e.editUserFormRule,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editUserForm.username,callback:function(t){e.$set(e.editUserForm,"username",t)},expression:"editUserForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editUserForm.email,callback:function(t){e.$set(e.editUserForm,"email",t)},expression:"editUserForm.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{model:{value:e.editUserForm.mobile,callback:function(t){e.$set(e.editUserForm,"mobile",t)},expression:"editUserForm.mobile"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editUserVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editUser(e.editUserForm.id)}}},[e._v("确 定")])],1)],1)],1)},L=[],S=(r("99af"),{name:"Users",data:function(){var e=function(e,t,r){var a=/^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-])+(\.[0-9a-zA-Z_-])+/;if(a.test(t))return r();r(new Error("请填入合法邮箱"))},t=function(e,t,r){var a=/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;if(a.test(t))return r();r(new Error("请填入合法手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userList:[],total:0,addDialogVisible:!1,editUserVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:12,message:"长度在 3 到 12 个字符",trigger:"blur"}],email:[{validator:e,trigger:"blur"}],mobile:[{validator:t,trigger:"blur"}]},editUserForm:{},editUserFormRule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],email:[{validator:e,trigger:"blur"}],mobile:[{validator:t,trigger:"blur"}]}}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200!==a.meta.status){t.next=9;break}return e.userList=a.data.users,e.queryInfo.pagenum=a.data.pagenum,e.total=a.data.total,t.abrupt("return");case 9:return t.abrupt("return",e.$message.error("获取用户列表失败"));case 10:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChange:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),a="users/".concat(e.id,"/state/").concat(e.mg_state),console.log(a),r.next=5,t.$http.put(a);case 5:if(n=r.sent,s=n.data,console.log(s),200===s.meta.status){r.next=11;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败"));case 11:t.$message.success("更新用户状态成功");case 12:case"end":return r.stop()}}),r)})))()},addDialogClose:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(r),r){t.next=3;break}return t.abrupt("return",e.$message.error("信息有误"));case 3:return t.next=5,e.$http.post("users",e.addForm);case 5:if(a=t.sent,n=a.data,console.log(n),201===n.meta.status){t.next=10;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 10:e.$message.success("添加成功"),e.addDialogVisible=!1,e.getUserList();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editUserDialog:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/".concat(e));case 2:if(a=r.sent,n=a.data,console.log(n),200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("该用户不存在"));case 7:t.editUserForm=n.data,t.editUserVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},editDialogClose:function(){this.$refs.editUserFormRef.resetFields()},editUser:function(e){var t=this;this.$refs.editUserFormRef.validate(function(){var r=Object(p["a"])(regeneratorRuntime.mark((function r(a){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a){r.next=2;break}return r.abrupt("return",t.$message.error("信息填写有误"));case 2:return r.next=4,t.$http.put("users/".concat(e),{mobile:t.editUserForm.mobile,email:t.editUserForm.email});case 4:if(n=r.sent,s=n.data,console.log(s),200===s.meta.status){r.next=9;break}return r.abrupt("return",t.$message.error("修改用户信息失败"));case 9:t.$message.success("修改用户信息成功"),t.editUserVisible=!1,t.getUserList();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}}}),I=S,M=(r("d141"),Object(l["a"])(I,q,L,!1,null,"77d642da",null)),z=M.exports;a["default"].use(d["a"]);var D=[{path:"/",redirect:"/home"},{path:"/login",component:v},{path:"/home",component:F,redirect:"/welcome",children:[{path:"/welcome",component:O},{path:"/users",component:z}]}],V=new d["a"]({routes:D});V.beforeEach((function(e,t,r){if("/login"===e.path)return r();var a=window.sessionStorage.getItem("token");if(!a)return r("/login");r()}));var E=V,P=(r("0fb7"),r("450d"),r("f529")),A=r.n(P),T=(r("b84d"),r("c216")),Z=r.n(T),J=(r("8f24"),r("76b9")),N=r.n(J),W=(r("8bd8"),r("4cb2")),H=r.n(W),B=(r("b8e0"),r("a4c4")),G=r.n(B),K=(r("ce18"),r("f58e")),Q=r.n(K),X=(r("4ca3"),r("443e")),Y=r.n(X),ee=(r("de31"),r("c69e")),te=r.n(ee),re=(r("a769"),r("5cc3")),ae=r.n(re),ne=(r("bdc7"),r("aa2f")),se=r.n(ne),oe=(r("a673"),r("7b31")),ie=r.n(oe),le=(r("adec"),r("3d2d")),ue=r.n(le),ce=(r("eca7"),r("3787")),de=r.n(ce),me=(r("425f"),r("4105")),fe=r.n(me),pe=(r("10cb"),r("f3ad")),ge=r.n(pe),be=(r("1951"),r("eedf")),he=r.n(be),ve=(r("7a0f"),r("0f6c")),we=r.n(ve),xe=(r("f4f9"),r("c2cc")),ye=r.n(xe),_e=(r("5466"),r("ecdf")),ke=r.n(_e),Fe=(r("38a0"),r("ad41")),$e=r.n(Fe),Ue=(r("e960"),r("b35b")),Ce=r.n(Ue),Re=(r("0c67"),r("299c")),je=r.n(Re),Oe=(r("672e"),r("101e")),qe=r.n(Oe),Le=(r("a7cc"),r("df33")),Se=r.n(Le);a["default"].use(Se.a),a["default"].use(qe.a),a["default"].use(je.a),a["default"].use(Ce.a),a["default"].use($e.a),a["default"].use(ke.a),a["default"].use(ye.a),a["default"].use(we.a),a["default"].use(he.a),a["default"].use(ge.a),a["default"].use(fe.a),a["default"].use(de.a),a["default"].use(ue.a),a["default"].use(ie.a),a["default"].use(se.a),a["default"].use(ae.a),a["default"].use(te.a),a["default"].use(Y.a),a["default"].use(Q.a),a["default"].use(G.a),a["default"].use(H.a),a["default"].use(N.a),a["default"].use(Z.a),a["default"].prototype.$message=A.a;r("aede"),r("82da");var Ie=r("bc3a"),Me=r.n(Ie);Me.a.defaults.baseURL="http://123.56.255.138:8888/api/private/v1/",Me.a.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("token"),e})),a["default"].prototype.$http=Me.a,a["default"].config.productionTip=!1,new a["default"]({router:E,render:function(e){return e(c)}}).$mount("#app")},8113:function(e,t,r){},"82da":function(e,t,r){},aede:function(e,t,r){},b1a5:function(e,t,r){},d141:function(e,t,r){"use strict";var a=r("b1a5"),n=r.n(a);n.a}});
//# sourceMappingURL=app.c10e9150.js.map