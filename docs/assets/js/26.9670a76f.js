(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{319:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p"),t._m(0),r("p"),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("记录项目运行时报错的解决办法，如启动时命令行报错，浏览器报错等，保持一直更新下去。此为第三部分，主要是代码打包部署的问题。"),r("br"),t._v(" "),r("router-link",{attrs:{to:"./错误大合集（一）.html"}},[t._v("错误大合集（一）")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"./错误大合集（二）.html"}},[t._v("错误大合集（二）")]),r("br"),t._v(" "),r("router-link",{attrs:{to:"./错误大合集（四）.html"}},[t._v("错误大合集（四）")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#错误大合集（三）"}},[this._v("错误大合集（三）")]),e("ul",[e("li",[e("a",{attrs:{href:"#打包时出现-localstorage-未定义等"}},[this._v("打包时出现 localStorage 未定义等")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"错误大合集（三）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误大合集（三）","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误大合集（三）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"打包时出现-localstorage-未定义等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包时出现-localstorage-未定义等","aria-hidden":"true"}},[this._v("#")]),this._v(" 打包时出现 localStorage 未定义等")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("描述：")]),this._v(" 打包时出现 localStorage、sessionStorage 等未定义报错。"),e("br"),this._v(" "),e("strong",[this._v("解决：")]),this._v(" 看运行环境是否包含 localStorage、sessionStorage，比如是否要加 window 对象，或者 ssr 打包时生命周期开始没有浏览器对象 localStorage、sessionStorage，所以会报错。需放到 mounted 钩子里。")])}],!1,null,null,null);e.default=a.exports}}]);