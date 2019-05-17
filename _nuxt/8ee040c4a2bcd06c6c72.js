(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{246:function(e,o,n){var content=n(250);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("40aafe93",content,!0,{sourceMap:!1})},247:function(e,o,n){"use strict";var t={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},r=n(9),component=Object(r.a)(t,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,function(o){return n("section",{key:o.category},[n("div",{staticClass:"menu-overview"},[e._v(e._s(o.category))]),e._v(" "),e._l(o.menus,function(o){return n("div",{key:o.linkPath,staticClass:"menu-item"},[n("nuxt-link",{class:e.routePath==o.linkPath?"access-now":"",attrs:{to:o.linkPath}},[e._v("\n          "+e._s(o.title)+"\n        ")])],1)})],2)}),0)])},[],!1,null,null,null);o.a=component.exports},248:function(e,o){e.exports='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},249:function(e,o,n){"use strict";var t=n(246);n.n(t).a},250:function(e,o,n){(e.exports=n(10)(!1)).push([e.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa;display:flex;flex-direction:row}.timestamp-container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""])},251:function(e,o,n){"use strict";n(248);var t={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var e,o=/<h2 id="(.*)">(.*)<\/h2>/gm,n=[];null!=(e=o.exec(this.$props.articleMd));)e[1]&&e[2]&&n.push({id:e[1],title:e[2]});return n||[]}}},r=n(9),component=Object(r.a)(t,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"table-content"}},[n("aside",{attrs:{id:"table-content-list"}},e._l(e.getInternalLinks,function(o){return n("div",{key:o.id,staticClass:"link-container"},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+o.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[e._v("\n        "+e._s(o.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);o.a=component.exports},252:function(e,o,n){"use strict";var t={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},r=(n(249),n(9)),component=Object(r.a)(t,function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"article-timestamp"},[n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"far fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.createdAt))])]),e._v(" "),n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"fas fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.updatedAt))])])])},[],!1,null,null,null);o.a=component.exports},271:function(e,o){e.exports='<section><h1>Express入門（Mongooseの利用）</h1>\n<p><a href="https://irisash.github.io/express/mongodb/">Express入門（MongoDBの利用）</a>ではMongoDB Node.js Driverを使ったTodoの検索・作成・削除を説明しましたが、今回はNode.js用のMongoDBライブラリ<a href="https://mongoosejs.com">Mongoose</a>の使い方を説明していきます。</p>\n<h2 id="mongodb-install">MongoDBのインストール</h2>\n<p>MongoDB自体のインストールは<a href="https://irisash.github.io/express/mongodb/">Express入門（MongoDBの利用）</a>の「MongoDBのインストール」と同様なのでそちらの方をご参照ください。</p>\n<h2 id="mongoose-install">Mongooseのインストール</h2>\n<p>TodoアプリにMongooseを組み込みますが、プロジェクトのテンプレートを<a href="https://github.com/irisAsh/express-todo-tutorial/tree/initial-template">こちら</a>に用意していますので、こちらの状態から実装を始めていきます。<br />\nまた、完成済は<a href="https://github.com/irisAsh/express-todo-tutorial/tree/tutorial-ver-mongoose">こちら</a>にあります。</p>\n<p>さて、Mongooseのインストールですが次のコマンド１つで完了です。</p>\n<pre><code>$ yarn add mongoose\n</code></pre>\n<h2 id="mongoose-connection">Mongooseで接続確認をする</h2>\n<p>アプリ起動時にMongoDBへの接続を確認するようにしておきましょう。<br />\n<code>app.js</code>に次のコードを追加してください。</p>\n<pre><code class="language-app.js.prettyprint">// app.js\n\n// DB connection\nvar mongoose = require(\'mongoose\');\nvar constants = require(\'./lib/constants\');\nmongoose.connect(constants.DB_URL + constants.DB_NAME, { useNewUrlParser: true });\nvar db = mongoose.connection;\ndb.on(\'error\', console.error.bind(console, \'connection error:\'));\n</code></pre>\n<p><code>lib/constants.js</code>にはMongoDBのURLとDB名を定義しています。本番環境など切り替えできるように別ファイルで定義しておくのが良いでしょう。</p>\n<pre><code class="language-lib/constants.js.prettyprint">module.exports = Object.freeze({\n  DB_URL: \'mongodb://127.0.0.1:27017/\',\n  DB_NAME: \'express-todo-tutorial\'\n});\n</code></pre>\n<h2 id="mongoose-scheme">Mongooseでモデル作成</h2>\n<p>MongooseではMongoDB Driverと違って、モデルを定義する必要があります。Schemeクラスを使うことで実装できます。<br />\n以下がTodoモデルの構造定義になります。</p>\n<pre><code class="language-models/todo.js.prettyprint">// models/todo.js\n\nvar mongoose = require(\'mongoose\');\nvar Schema = mongoose.Schema;\n\nvar TodoSchema = new Schema({\n  title: String,\n  description: String,\n  status: String,\n  estimatedDate: Date\n});\n\nmodule.exports = mongoose.model(\'Todo\', TodoSchema);\n</code></pre>\n<p>Schemeを生成する際の引数にTodoのカラム定義を指定します。<code>カラム名: 型名</code>の形式で設定します。型名の一覧は下記の通りになります。</p>\n<ul>\n<li>String</li>\n<li>Number</li>\n<li>Date</li>\n<li>Buffer</li>\n<li>Boolean</li>\n<li>Mixed</li>\n<li>ObjectId</li>\n<li>Array</li>\n<li>Decimal128</li>\n<li>Map</li>\n</ul>\n<h2 id="mongoose-count">Mongooseでデータ数を取得する</h2>\n<p>Mongooseを使ってTodoの件数を取得してみます。サンプルでは以下のような画面になります。</p>\n<img src="images/express/mongoose/home_page.png" alt="Todo件数取得" title="Todo件数取得" style="max-height:400px;">\n<p>先程定義したModelは<code>var Todo = require(\'../models/todo\');</code>で読み込むことができます。この<code>Todo</code>を使ってDB操作を行えます。</p>\n<p>件数取得には<code>countDocuments</code>関数を使います。条件指定には関数の引数に指定する方法と一度検索クエリを作成する方法があります。</p>\n<p><strong>引数に指定する方法</strong></p>\n<pre><code class="language-js.prettyprint">Todo.countDocuments(検索条件, コールバック)\n</code></pre>\n<p>検索条件は直接MongoDBコンソールで指定する形式と同様<code>{ カラム名: { 比較文字: 値 } }</code>の形式で指定します。<br />\nまた、コールバックには<code>function (err, count) {}</code>の形で検索後の処理を指定できます。</p>\n<p><strong>検索クエリを作成する方法</strong></p>\n<p>Schemeクラスには<code>where</code>関数というクエリを作成する関数があります。クエリは比較関数を使ってチェーンすることができます。最後にチェーンで<code>countDocuments</code>関数に関数につなぐことができます。<br />\n比較関数は基本的にMongoDBの比較文字と同じ名称です。詳細は<a href="https://mongoosejs.com/docs/api.html#Query">公式の一覧</a>を参照ください。</p>\n<pre><code class="language-js.prettyprint">Todo\n  .where(\'カラム名\').比較関数(検索値)\n  .where(\'カラム名\').比較関数(検索値)\n  ...\n  .countDocuments(コールバック)\n</code></pre>\n<p><strong>Promiseを使う</strong></p>\n<p>また、コールバックではなくPromiseを利用して後続処理を実装できます。検索処理でPromiseを受け取るには<code>exec</code>関数を使います。</p>\n<pre><code class="language-js.prettyprint">Todo\n  ...\n  .countDocuments()\n  .exec()\n</code></pre>\n<p>さて実際に<code>controllers/homeController.js</code>にTodoの件数を取得するコードを追加しましょう。<br />\nここでは先程説明した<code>where</code>を使う方法で検索し、後続処理をPromiseを使って実装しています。<code>Promise.all</code>で３種類の検索が全て終了した後に描画処理を行うようにしています。</p>\n<pre><code class="language-controllers/homeController.js.prettyprint">// controllers/homeController.js\n\nvar Todo = require(\'../models/todo\');\n\nexports.index = function(req, res) {\n  var now = Date();\n  Promise.all([\n    Todo.where(\'status\').ne(\'completed\').countDocuments().exec(),\n    Todo.where(\'estimatedDate\')\n      .gte(new Date(now).setHours(0,0,0,0))\n      .lte(new Date(now).setHours(23,59,59,999))\n      .countDocuments().exec(),\n    Todo.where(\'status\').equals(\'completed\').countDocuments().exec()\n  ])\n  .then(function(result) {\n    res.render(\'home/index\', {\n      remainingTodoCount: result[0],\n      todayTodoCount: result[1],\n      completedTodoCount: result[2]\n    });\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  });\n};\n</code></pre>\n<h2 id="mongoose-query">MongooseでQueryHelperを利用する</h2>\n<p>検索条件を指定してTodoの件数を取得することができました。残りのTodoなど指定した検索条件は他箇所でも使うことがあるので、TodoモデルのQueryHelperを利用して、関数１つで検索条件を指定できるようにしましょう。</p>\n<p>モデルのQueryHelperの定義は<code>Schemeクラス.query.関数名</code>で定義できます。下記のようにクエリ定義を追加してください。</p>\n<pre><code class="language-models/todo.js.prettyprint">// models/todo.js\n\n// Query ============================================\nTodoSchema.query.queryNotCompleted = function() {\n  return this.where(\'status\').ne(\'completed\');\n}\nTodoSchema.query.queryToday = function() {\n  var now = Date();\n  return this\n    .where(\'estimatedDate\')\n    .gte(new Date(now).setHours(0,0,0,0))\n    .lte(new Date(now).setHours(23,59,59,999))\n}\nTodoSchema.query.queryCompleted = function() {\n  return this.where(\'status\').equals(\'completed\');\n}\n\nmodule.exports = mongoose.model(\'Todo\', TodoSchema);\n</code></pre>\n<p>さて、定義したクエリを使ってみましょう。下記のように<code>homeController.js</code>を編集します。</p>\n<pre><code class="language-controllers/homeController.js.prettyprint">// controllers/homeController.js\n\nexports.index = function(req, res) {\n  Promise.all([\n    Todo.countDocuments().queryNotCompleted().exec(),\n    Todo.countDocuments().queryToday().exec(),\n    Todo.countDocuments().queryCompleted().exec()\n  ])\n  .then(function(result) {\n  ...\n</code></pre>\n<p>同様にTodoの一覧を取得する画面でも定義したクエリ関数を使ってみましょう。件数取得と同様にクエリを指定します。一覧取得には<code>find</code>関数を使うだけです。</p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n\nexports.index = function(req, res, next) {\n  Todo.find().queryNotCompleted().exec()\n  .then(function(todos) {\n    res.render(\'todo/index\', {\n      todos: todos,\n      date2Str: dateUtils.date2Str\n    });\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  });\n};\n\n</code></pre>\n<p>コード的にもみやすくなります。このようによく使う検索はモデルのQueryHelperにしておくと良いでしょう。</p>\n<h2 id="mongoose-insert">Mongooseで登録処理をする</h2>\n<p>Mongooseを使ってTodoを登録する処理を作りましょう。プロジェクトのテンプレートに用意してあるフォーム画面に登録処理を組み込みます。</p>\n<img src="images/express/mongoose/form_page.png" alt="Form画面" title="Form画面" style="max-height:400px;">\n<p>POST処理を受け取ると<code>todoController.js</code>の<code>createPost</code>へ処理が走るようになっています。<code>createPost</code>にMongooseの登録処理を追加しましょう。<br />\n追加処理はモデルの<code>create</code>関数を使います。使い方ですが引数に登録するTodoデータの値を指定するだけです。登録後の処理は検索時と同じように、引数にコールバックを指定するか、コールバックを指定しない場合は<code>create</code>関数がPromiseを返すのでPromiseを使って後続処理を実装できます。</p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n\nexports.createPost = function(req, res) {\n  var { title, description, status, estimatedDate } = req.body;\n  Todo.create({\n    title,\n    description,\n    status,\n    estimatedDate\n  })\n  .then(function(result) {\n    res.redirect(\'/todo\');\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  });\n};\n</code></pre>\n<h2 id="mongoose-delete">Mongooseで削除処理をする</h2>\n<p>続いてはTodoの削除処理です。一覧画面の削除ボタンは<code>/todo/TodoのID</code>へDeleteリクエストを飛ばすようになっています。<br />\nコントローラーではURLのIDから削除対象のTodoを探し、そして削除する必要があります。<br />\n方法は２通りでモデル関数の<code>deleteOne(検索条件)</code>を使って検索条件に一致するデータを１つ削除する方法か、一度<code>findOne(検索条件)</code>などで対象を１つ取得してからTodoインスタンスの<code>remove</code>を使うかがあります。</p>\n<p><strong>deleteOneを使った場合</strong></p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n\nexports.delete = function(req, res) {\n  var { id } = req.params;\n  Todo.deleteOne({ _id: id })\n  .then(function(result) {\n  ...\n</code></pre>\n<p><strong>removeを使った場合</strong></p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n\nexports.delete = function(req, res, next) {\n  var { id } = req.params;\n  Todo.findOne({ _id: id })\n  .then(function(result) {\n    if (!result) {\n      throw new Error(\'削除対象が見つかりません\');\n    }\n    return result.remove();\n  })\n  .then(function(result) {\n    res.redirect(\'/todo\');\n  })\n  ...\n</code></pre>\n<h2 id="mongoose-update">Mongooseで更新処理をする</h2>\n<p>更新処理の前に編集フォーム画面に表示するTodoのデータを取得する必要がある。<br />\nデータ取得は<code>findOne</code>関数を使ってできます。</p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n\nexports.updateGet = function(req, res, next) {\n  res.render(\'todo/update\', { todo: {} });\n  var { id } = req.params;\n  Todo.findOne({ _id: id })\n  .then(function(result) {\n    if (!result) {\n      throw new Error(\'削除対象が見つかりません\');\n    }\n    res.render(\'todo/update\', { todo: result });\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  });\n};\n</code></pre>\n<p>さてデータは取得できていますが、フォーム画面では<code>datetime-local</code>のINPUTタグを使っているので日付の形式を<code>YYYY-MM-DDThh:mm:ss</code>に変換する必要があります。<br />\nそこでモデルのVirtualsを利用して、Todoに変換されたestimatedDateを取得できるプロパティを作成しましょう。<br />\nプロパティ名は<code>estimatedDateISOS</code>として用意し、下記のようにView側で使えるようにします。</p>\n<pre><code class="language-views/todo/form.pug.prettyprint">// views/todo/form.pug\n\ndiv\n  label(for=\'estimatedDate\') 予定時刻：\n  input#estimatedDate(\n    type=\'datetime-local\'\n    name=\'estimatedDate\'\n    value=todo.estimatedDateISOS\n  )\n</code></pre>\n<p>モデルに<code>todo.estimatedDateISOS</code>を定義しましょう。<code>Schemeクラス.virtual(\'プロパティ名\').get(function() {})</code>の形で定義します。</p>\n<pre><code class="language-models/todo.js.prettyprint">// models/todo.js\n\n// Virtuals =========================================\nTodoSchema.virtual(\'estimatedDateISOS\').get(function () {\n  return dateUtils.date2ISOS(this.estimatedDate);\n});\n\nmodule.exports = mongoose.model(\'Todo\', TodoSchema);\n</code></pre>\n<h2 id="mongoose-summary">まとめ</h2>\n<p>以上がTodoアプリの簡単な実装となります。MongoDB Driverと違ってMongooseではモデル定義ができるのでDB操作は簡潔に書くことができます。説明はMongooseの一部なので、より高度な機能を扱う場合は適宜Mongooseの<a href="https://mongoosejs.com/">公式サイト</a>を確認しましょう。</p>\n</section>\n'},296:function(e,o,n){"use strict";n.r(o);var t=n(252),r=n(247),d=n(251),c=n(73),l=n(271),m=n.n(l),h={components:{ArticleTimestamp:t.a,SideMenu:r.a,TableContent:d.a},data:function(){return{menuSections:c}},computed:{MongooseMd:function(){return m.a}},head:function(){var e=c.tutorial.menus;return{title:e.mongoose.headerTitle,meta:[{hid:"description",name:"description",content:e.mongoose.headerDescription}]}}},f=n(9),component=Object(f.a)(h,function(){var e=this.$createElement,o=this._self._c||e;return o("div",{attrs:{id:"wrapper"}},[o("article",{attrs:{id:"main"}},[o("section",[o("div",{domProps:{innerHTML:this._s(this.MongooseMd)}}),this._v(" "),o("article-timestamp",{attrs:{createdAt:"2019/04/07",updatedAt:"2019/04/07"}})],1)]),this._v(" "),o("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),o("table-content",{attrs:{articleMd:this.MongooseMd}})],1)},[],!1,null,null,null);o.default=component.exports}}]);