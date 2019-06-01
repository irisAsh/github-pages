(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(e,t,n){var content=n(253);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("40aafe93",content,!0,{sourceMap:!1})},250:function(e,t,n){"use strict";var o={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},r=n(9),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,function(t){return n("section",{key:t.category},[n("div",{staticClass:"menu-overview"},[e._v(e._s(t.category))]),e._v(" "),e._l(t.menus,function(t){return n("div",{key:t.linkPath,staticClass:"menu-item"},[n("nuxt-link",{class:e.routePath==t.linkPath?"access-now":"",attrs:{to:t.linkPath}},[e._v("\n          "+e._s(t.title)+"\n        ")])],1)})],2)}),0)])},[],!1,null,null,null);t.a=component.exports},251:function(e,t){e.exports='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},252:function(e,t,n){"use strict";var o=n(249);n.n(o).a},253:function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa;display:flex;flex-direction:row}.timestamp-container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""])},254:function(e,t,n){"use strict";n(251);var o={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var e,t=/<h2 id="(.*)">(.*)<\/h2>/gm,n=[];null!=(e=t.exec(this.$props.articleMd));)e[1]&&e[2]&&n.push({id:e[1],title:e[2]});return n||[]}}},r=n(9),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"table-content"}},[n("aside",{attrs:{id:"table-content-list"}},e._l(e.getInternalLinks,function(t){return n("div",{key:t.id,staticClass:"link-container"},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+t.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);t.a=component.exports},255:function(e,t,n){"use strict";var o={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},r=(n(252),n(9)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-timestamp"},[n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"far fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.createdAt))])]),e._v(" "),n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"fas fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.updatedAt))])])])},[],!1,null,null,null);t.a=component.exports},271:function(e,t){e.exports="<section><h1>Express入門（ルーティング）</h1>\n<p>ホーム画面を用意するためにルーティングを設定します。ルーティングとは、アクセスされたURIとそれに対するアプリケーションの挙動(画面の描画やデータの操作など)を決めることです。<br />\nここでは<code>/home/</code>というURIにアクセスした時の挙動を定義していきます。</p>\n<h2 id=\"create-home-router\">homeルートの追加</h2>\n<p>まずは<code>/home</code>のエンドポイント(URI)を開きます。とりあえず<code>/home</code>のアクセス時の挙動は<code>/</code>にアクセスした時の挙動と同じにしておきます。</p>\n<pre><code class=\"language-app.js.prettyprint\">...\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n// 下記を追加\napp.get('/home', function(req, res, next) {\n  res.render('index', { title: 'Express' });\n});\n...\n</code></pre>\n<p>ファイルを保存したら、<a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>にアクセスしてみましょう。<a href=\"http://localhost:3000\">http://localhost:3000</a>と同じ画面が表示されているはずです。</p>\n<h2 id=\"use-middle-ware\">ミドルウェアの使用</h2>\n<p>Expressのミドルウェアはいくつかの種類のミドルウェアが使用できますが、ここではルーターレベルのミドルウェアを使用します。このミドルウェアを使ってルーティング処理をモジュール化することができます。これによってルーティングを細分化して定義したり処理の共通化を行うことができます。<br />\n今回は、<code>/home</code>および<code>/home</code>以下のURI（例えば<code>/home/help</code>や<code>/home/about</code>）の挙動を定義するモジュールを作成します。<br />\n基本的にルーターのモジュールは<code>routes</code>フォルダ配下に作成していきます。<br />\nまずは下記の内容で<code>routes/home.js</code>を作成してください。</p>\n<pre><code class=\"language-routes/home.js.prettyprint\">var express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function(req, res, next) {\n  res.render('index', { title: 'Express' });\n});\n\nmodule.exports = router;\n</code></pre>\n<p><code>express.Router</code>クラスを使ってルーターレベルのミドルウェアを利用できます。ここでは<code>/home</code>のGETリクエストを定義するため<code>router.get()</code>を使っています。第一引数には<code>/home</code>以下のパス（<code>/home</code>自信を設定するため<code>/</code>）を指定し、また第二引数には<code>views/index.pug</code>を描画する処理を指定しています。<br />\nさて、このモジュールをメインアプリケーションに設定するため<code>app.js</code>を編集します。</p>\n<pre><code class=\"language-app.js.prettyprint\">...\nvar indexRouter = require('./routes/index');\nvar usersRouter = require('./routes/users');\nvar homeRouter = require('./routes/home'); // 追加 home.jsで定義した内容を取り込んでいます\n...\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n// 先程追加したapp.get('/homw', ...)は削除\napp.use('/home', homeRouter); // 追加 /home以下の処理をhome.jsに担わせています\n...\n</code></pre>\n<p><a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>を確認すると先程と同じ挙動になっていることが確認できます。</p>\n<h2 id=\"redirect\">リダイレクト</h2>\n<p>最後に、<a href=\"http://localhost:3000\">http://localhost:3000</a>にアクセスされた場合はホーム画面<a href=\"http://localhost:3000/home\">http://localhost:3000/home</a>にリダイレクトするようにしましょう。<br />\n<code>routes/index.js</code>を下記のように編集するとリダイレクトするようになります。</p>\n<pre><code class=\"language-routes/index.js.prettyprint\">router.get('/', function(req, res, next) {\n  res.redirect('/home'); // 変更\n});\n</code></pre>\n<h2 id=\"add-controller\">コントローラーの作成</h2>\n<p>ルーティングファイルに処理を書いていっても良いのですが、ルーティングファイルにはアクセスパスの振分だけにしておきたいので、具体的な振る舞いはコントローラーとして分けておきましょう。<br />\n<code>controllers</code>フォルダを、その配下に<code>homeController.js</code>を作成し、ルーティングファイルに書いた内容を<code>homeController.js</code>に移しましょう。</p>\n<pre><code>$ mkdir controllers\n$ touch controllers/homeController.js\n</code></pre>\n<pre><code class=\"language-homeController.js.prettyprint\">// controllers/homeController.js\n\nexports.index = function(req, res) {\n  res.render('home/index');\n};\n\n</code></pre>\n<pre><code class=\"language-home.js.prettyprint\">// routes/home.js\n\nvar express = require('express');\nvar router = express.Router();\n\nvar homeController = require('../controllers/homeController'); // 追加\n\nrouter.get('/', homeController.index); // 変更\n</code></pre>\n<h2 id=\"home-page\">Home画面の整形</h2>\n<p>Homeの画面をモックデータを使ってTODOアプリ用に整形しておきましょう。<code>render</code>の第２引数にオブジェクト形式でView層にデータを渡すことができます。</p>\n<pre><code class=\"language-homeController.js.prettyprint\">exports.index = function(req, res) {\n  res.render('home/index', {\n    remainingTodoCount: 4,\n    todayTodoCount: 2,\n    completedTodoCount: 1\n  });\n};\n</code></pre>\n<p>ここではテンプレートファイルにPugを使っているので、<code>#{変数名}</code>でController層から渡された値を描画できます。Pugの詳しい使い方は<a href=\"https://irisash.github.io/express/pug_reference/\">Pug(HTMLテンプレートエンジン)の書き方まとめ</a>にまとめているのでご覧ください。</p>\n<pre><code class=\"language-home/index.pug.prettyprint\">extends ../layout\n\nblock content\n  h1 TODO アプリ\n  p\n    | 残りのTODO: #{remainingTodoCount} [\n    a(href='/todo') 一覧へ\n    |  ]\n  p\n    | 今日のTODO: #{todayTodoCount} [\n    a(href='/todo/today') 一覧へ\n    |  ]\n  p\n    | 完了済TODO: #{completedTodoCount} [\n    a(href='/todo/completed') 一覧へ\n    |  ]\n  a(href='/todo/create') TODOの追加\n</code></pre>\n<p>下のように画面が表示されます。</p>\n<img src=\"images/express/edit_routing/home_page.png\" alt=\"Home画面\" title=\"Home画面\" style=\"max-height:400px;\">\n<h2 id=\"todo-pages\">TODO画面のルーティング</h2>\n<p>ついでにTODOの一覧を表示する画面と作成する画面を用意してみましょう。実際にデータ取得や作成処理を実装するにはDBを利用します。実装については<a href=\"https://irisash.github.io/express/mongodb/\">ExpressでMongoDBを使う</a>をご参照ください。<br />\nHomeと同じようにルーティングを追加します。<code>routes/todo.js</code>, <code>controllers/todoController.js</code>はHomeとほぼ同様です</p>\n<h3>ルーティング</h3>\n<p>一覧画面は<code>/todo/</code>、作成画面は<code>/todo/create</code>としています。</p>\n<pre><code class=\"language-routes/todo.js.prettyprint\">// routes/todo.js\n省略\n...\nrouter.get('/', todoController.index);\nrouter.get('/create', todoController.createGet);   \n...\n</code></pre>\n<h3>コントローラー</h3>\n<p><code>res.render</code>の引数には<code>views</code>配下のファイルパスを指定します。拡張子<code>.pug</code>は省略可能です。<br />\nまた、TODOの作成はフォーム画面を<code>createGet</code>、作成処理を<code>createPost</code>と関数を命名していきます。</p>\n<pre><code class=\"language-controllers/todoController.js.prettyprint\">// controllers/todoController.js\n省略\n...\nexports.index = function(req, res) { \n  res.render('todo/index');\n}\nexports.createGet = function(req, res) { \n  res.render('todo/create');\n};\n...\n</code></pre>\n<h3>TODO一覧画面</h3>\n<p><strong>コード</strong></p>\n<pre><code class=\"language-views/todo/index.pug.prettyprint\">// views/todo/index.pug\n\nextends ../layout\n\nblock content\n  h1 残りのTODO\n  ul\n    li\n      p 買い物\n      p リンゴを買う\n      p progress\n      p 2019/03/21\n      p\n\t| [\n\ta(href='') 編集\n\t| ]\n      p\n\t| [\n\ta(href='') 削除\n\t| ]\n  p\n    a(href='/') 戻る\n</code></pre>\n<p><strong>画面</strong></p>\n<img src=\"images/express/edit_routing/todo_list.png\" alt=\"Todo一覧画面\" title=\"Todo一覧画面\" style=\"max-height:400px;\">\n<h3>TODO作成画面</h3>\n<p><strong>コード</strong></p>\n<pre><code class=\"language-views/todo/create.pug.prettyprint\">// views/todo/create.pug\n\nextends ../layout\n\nblock content\n  h1 TODO 作成\n \n  form(method='POST' action='/todo/create')\n    div\n      label(for='title') タイトル：\n      input#title(type='text', placeholder='やること' name='title' required='true' value='' )\n    div\n      label(for='description') 詳細説明：\n      input#description(type='text', placeholder='買い物に行く' name='description' value='' )\n    div\n      label(for='status') ステータス：\n      select#status(name='status')\n        option(value='backlog', selected='selected') 未着手\n        option(value='progress') 着手中\n        option(value='completed') 完了済\n    div\n      label(for='estimatedDate') 予定時刻：\n      input#estimatedDate(type='datetime-local', name='estimatedDate' value='')\n    div\n      input(type='submit')\n \n  br\n  a(href='/') 戻る\n</code></pre>\n<p><strong>画面</strong></p>\n<img src=\"images/express/edit_routing/todo_form.png\" alt=\"Todo作成画面\" title=\"Todo作成画面\" style=\"max-height:400px;\">\n</section>\n"},323:function(e,t,n){"use strict";n.r(t);var o=n(255),r=n(250),d=n(254),c=n(75),l=n(271),h=n.n(l),m={components:{ArticleTimestamp:o.a,SideMenu:r.a,TableContent:d.a},data:function(){return{menuSections:c}},computed:{EditRoutingMd:function(){return h.a}},head:function(){var e=c.tutorial.menus;return{title:e.editrouting.headerTitle,meta:[{hid:"description",name:"description",content:e.editrouting.headerDescription}]}}},x=n(9),component=Object(x.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"wrapper"}},[t("article",{attrs:{id:"main"}},[t("section",[t("div",{domProps:{innerHTML:this._s(this.EditRoutingMd)}}),this._v(" "),t("article-timestamp",{attrs:{createdAt:"2019/03/09",updatedAt:"2019/03/23"}})],1)]),this._v(" "),t("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),t("table-content",{attrs:{articleMd:this.EditRoutingMd}})],1)},[],!1,null,null,null);t.default=component.exports}}]);