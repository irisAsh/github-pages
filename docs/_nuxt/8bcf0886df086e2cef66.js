(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(t,e,n){"use strict";var l={name:"MenuItem",props:["linkPath","title","subTitle","iconClass"]},c=n(9),r={name:"TopMenu",props:["title","subTitle","menuItems"],components:{MenuItem:Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu-box"}},[n("nuxt-link",{attrs:{to:t.linkPath}},[n("div",{staticClass:"menu-item-container"},[n("div",{staticClass:"menu-icon-area"},[n("i",{class:t.iconClass})]),t._v(" "),n("div",{staticClass:"menu-text-area"},[n("h3",{staticClass:"menu-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"menu-sub-title"},[t._v(t._s(t.subTitle))])])])])],1)},[],!1,null,null,null).exports}},o=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-menu"}},[n("section",{staticClass:"header"},[n("header",[n("h1",{staticClass:"title has-text-white"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("h2",{staticClass:"subtitle has-text-white"},[t._v("\n      "+t._s(t.subTitle)+"\n    ")])]),t._v(" "),n("article",{staticClass:"container"},[n("section",[n("div",{staticClass:"menu-list"},t._l(t.menuItems,function(t){return n("menu-item",{key:t.title,attrs:{linkPath:t.linkPath,title:t.title,subTitle:t.subTitle,iconClass:t.iconClass}})}),1)])])])},[],!1,null,null,null);e.a=o.exports},270:function(t,e,n){"use strict";n.r(e);var l={components:{TopMenu:n(258).a},data:function(){return{title:"Vue programing",subTitle:"Javascript のフレームワークの１つ Vue.js を学ぶ",menuItems:[{linkPath:"/vueprograming/setup/cdn",title:"環境構築",subTitle:"CDN",iconClass:"fab fa-vuejs"},{linkPath:"/vueprograming/basic/databinding",title:"基本構文",subTitle:"データバインティング / 繰り返し / 制御構文 / イベントハンドリング",iconClass:"fab fa-vuejs"},{linkPath:"/vueprograming/sample",title:"サンプル集",subTitle:"Vue で書いた簡単なウェブアプリ",iconClass:"fab fa-vuejs"}]}}},c=n(9),component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("top-menu",{attrs:{title:this.title,subTitle:this.subTitle,menuItems:this.menuItems}})],1)},[],!1,null,null,null);e.default=component.exports}}]);