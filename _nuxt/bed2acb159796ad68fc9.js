(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{238:function(e,n,t){"use strict";var r={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},o=t(12),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,(function(n){return t("section",{key:n.category},[t("div",{staticClass:"menu-overview"},[e._v(e._s(n.category))]),e._v(" "),e._l(n.menus,(function(n){return t("div",{key:n.linkPath,staticClass:"menu-item"},[t("nuxt-link",{class:e.routePath==n.linkPath?"access-now":"",attrs:{to:n.linkPath}},[e._v("\n          "+e._s(n.title)+"\n        ")])],1)}))],2)})),0)])}),[],!1,null,null,null);n.a=component.exports},269:function(e,n,t){"use strict";t.r(n);var r=t(238),o=t(86),c={components:{SideMenu:r.a},data:function(){return{menuSections:o}},computed:{LinkMd:function(){return'<section><h1>Expressの学習参考リンク集</h1>\n<p>Expressの学習に役立つ参考サイトのリンクです。</p>\n<h2 id="official">公式サイト</h2>\n<ul>\n<li><a href="https://expressjs.com/ja/">Express公式サイト</a></li>\n<li><a href="https://pugjs.org/api/getting-started.html">Pug公式サイト</a></li>\n<li><a href="https://www.mongodb.com/">MongoDB</a></li>\n<li><a href="https://docs.mongodb.com/manual/">MongoDB Manual</a></li>\n<li><a href="http://mongodb.github.io/node-mongodb-native/">MongoDB Node.JS Driver</a></li>\n</ul>\n</section>\n'}},head:function(){var e=o.links.menus;return{title:e.references.headerTitle,meta:[{hid:"description",name:"description",content:e.references.headerDescription}]}}},l=t(12),component=Object(l.a)(c,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("article",{attrs:{id:"main"}},[n("section",[n("div",{domProps:{innerHTML:this._s(this.LinkMd)}})])]),this._v(" "),n("side-menu",{attrs:{menuSections:this.menuSections}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);