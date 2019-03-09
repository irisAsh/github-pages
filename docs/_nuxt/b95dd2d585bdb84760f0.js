(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{245:function(e,o,t){"use strict";var n={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},r=t(9),component=Object(r.a)(n,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,function(o){return t("section",{key:o.linkPath},[t("nuxt-link",{class:e.routePath==o.linkPath?"access-now":"",attrs:{to:o.linkPath}},[e._v("\n        "+e._s(o.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);o.a=component.exports},250:function(e,o){e.exports="<section><h1>ルーティングの設定</h1>\n<p>ホーム画面を用意するためにルーティングを設定します。ルーティングとは、アクセスされたURIとそれに対するアプリケーションの挙動(画面の描画やデータの操作など)を決めることです。<br />\nここでは<code>/home/</code>というURIにアクセスした時の挙動を定義していきます。</p>\n<h2>homeルートの追加</h2>\n<p>まずは<code>/home</code>のエンドポイント(URI)を開きます。とりあえず<code>/home</code>のアクセス時の挙動は<code>/</code>にアクセスした時の挙動と同じにしておきます。</p>\n<pre><code class=\"language-app.js.prettyprint\">...\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n// 下記を追加\napp.get('/home', function(req, res, next) {\n  res.render('index', { title: 'Express' });\n});\n...\n</code></pre>\n<p>ファイルを保存したら、<a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>にアクセスしてみましょう。<a href=\"http://localhost:3000\">http://localhost:3000</a>と同じ画面が表示されているはずです。</p>\n<h2>ミドルウェアの使用</h2>\n<p>Expressのミドルウェアはいくつかの種類のミドルウェアが使用できますが、ここではルーターレベルのミドルウェアを使用します。このミドルウェアを使ってルーティング処理をモジュール化することができます。これによってルーティングを細分化して定義したり処理の共通化を行うことができます。<br />\n今回は、<code>/home</code>および<code>/home</code>以下のURI（例えば<code>/home/help</code>や<code>/home/about</code>）の挙動を定義するモジュールを作成します。<br />\n基本的にルーターのモジュールは<code>routes</code>フォルダ配下に作成していきます。<br />\nまずは下記の内容で<code>routes/home.js</code>を作成してください。</p>\n<pre><code class=\"language-routes/home.js.prettyprint\">var express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Express' });\n});\n\nmodule.exports = router;\n</code></pre>\n<p><code>express.Router</code>クラスを使ってルーターレベルのミドルウェアを利用できます。ここでは<code>/home</code>のGETリクエストを定義するため<code>router.get()</code>を使っています。第一引数には<code>/home</code>以下のパス（<code>/home</code>自信を設定するため<code>/</code>）を指定し、また第二引数には<code>views/index.pug</code>を描画する処理を指定しています。<br />\nさて、このモジュールをメインアプリケーションに設定するため<code>app.js</code>を編集します。</p>\n<pre><code class=\"language-app.js.prettyprint\">...\nvar indexRouter = require('./routes/index');\nvar usersRouter = require('./routes/users');\nvar homeRouter = require('./routes/home'); // 追加 home.jsで定義した内容を取り込んでいます\n...\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n// 先程追加したapp.get('/homw', ...)は削除\napp.use('/home', homeRouter); // 追加 /home以下の処理をhome.jsに担わせています\n...\n</code></pre>\n<p><a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>を確認すると先程と同じ挙動になっていることが確認できます。</p>\n<h2>リダイレクト</h2>\n<p>最後に、<a href=\"http://localhost:3000\">http://localhost:3000</a>にアクセスされた場合はホーム画面<a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>にリダイレクトするようにしましょう。<br />\n<code>routes/index.js</code>を下記のように編集するとリダイレクトするようになります。</p>\n<pre><code class=\"language-routes/index.js.prettyprint\">router.get('/', function(req, res, next) {\n  res.redirect('/home'); // 変更\n});\n</code></pre>\n</section>\n"},261:function(e,o,t){"use strict";t.r(o);var n=t(245),r=t(73),c=t(250),d=t.n(c),h={components:{SideMenu:n.a},data:function(){return{menuSections:r.menuItems}},computed:{EditRoutingMd:function(){return d.a}}},l=t(9),component=Object(l.a)(h,function(){var e=this.$createElement,o=this._self._c||e;return o("div",{attrs:{id:"wrapper"}},[o("article",{attrs:{id:"main"}},[o("section",[o("div",{domProps:{innerHTML:this._s(this.EditRoutingMd)}})])]),this._v(" "),o("side-menu",{attrs:{menuSections:this.menuSections}})],1)},[],!1,null,null,null);o.default=component.exports}}]);