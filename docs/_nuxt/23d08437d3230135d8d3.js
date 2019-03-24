(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(n,e,o){var content=o(252);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(11).default)("40aafe93",content,!0,{sourceMap:!1})},247:function(n,e,o){"use strict";var t={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},r=o(9),component=Object(r.a)(t,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("aside",{attrs:{id:"sidebar"}},n._l(n.menuSections,function(e){return o("section",{key:e.linkPath},[o("nuxt-link",{class:n.routePath==e.linkPath?"access-now":"",attrs:{to:e.linkPath}},[n._v("\n        "+n._s(e.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);e.a=component.exports},248:function(n,e,o){var t=o(5),r=o(249)(!1);t(t.S,"Object",{values:function(n){return r(n)}})},249:function(n,e,o){var t=o(21),r=o(22),d=o(33).f;n.exports=function(n){return function(e){for(var o,c=r(e),l=t(c),m=l.length,i=0,h=[];m>i;)d.call(c,o=l[i++])&&h.push(n?[o,c[o]]:c[o]);return h}}},250:function(n,e){n.exports='<section><h1>はじめに / Expressの環境設定</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},251:function(n,e,o){"use strict";var t=o(246);o.n(t).a},252:function(n,e,o){(n.exports=o(10)(!1)).push([n.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa;display:flex;flex-direction:row}.timestamp-container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""])},253:function(n,e,o){"use strict";var t={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},r=(o(251),o(9)),component=Object(r.a)(t,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"article-timestamp"},[o("div",{staticClass:"timestamp-container"},[o("i",{staticClass:"far fa-clock"}),n._v(" "),o("p",[n._v(n._s(n.createdAt))])]),n._v(" "),o("div",{staticClass:"timestamp-container"},[o("i",{staticClass:"fas fa-clock"}),n._v(" "),o("p",[n._v(n._s(n.updatedAt))])])])},[],!1,null,null,null);e.a=component.exports},254:function(n,e,o){"use strict";o(250);var t={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var n,e=/<h2 id="(.*)">(.*)<\/h2>/gm,o=[];null!=(n=e.exec(this.$props.articleMd));)n[1]&&n[2]&&o.push({id:n[1],title:n[2]});return o||[]}}},r=o(9),component=Object(r.a)(t,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"table-content"}},[o("aside",{attrs:{id:"table-content-list"}},n._l(n.getInternalLinks,function(e){return o("div",{key:e.id,staticClass:"link-container"},[o("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+e.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[n._v("\n        "+n._s(e.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);e.a=component.exports},261:function(n,e){n.exports='<section><h1>ExpressでMongoDBを使う</h1>\n<p>Expressでデーターベースを使ってデータ管理をします。データベースといえばオープンソースではPostgreSQLやMySQL、商用ではOracle Database、Microsoft SQL ServerなどのRDB(リレーショナルデータベース)が一般的に利用されています。<br />\nしかし、ここではNoSQLと呼ばれるデータベースの１つMongoDBを使っていきます。MongoDBを使うメリットとしては、「大量のデータを高速で扱うことができる（扱うデータの構造には依ります）」「スキーマレスなデータ（ログ、スキーマ構造の変更が多いデータなど）をJSONで扱うことができる」などです。JSON形式でデータを扱えるのでJavascriptとも親和性が良いです。<br />\n逆に、スキーマ間の複雑な関係性が必要な場合やデータ整合性を重視する場合、トランザクションを頻繁に必要とする場合はRDBの方が向いています。</p>\n<h2 id="install-mongodb">MongoDBのインストール</h2>\n<p>MacOSでのインストールを説明します。その他の環境では<a href="https://www.mongodb.com/download-center/community">公式サイト</a>等を参照ください。<br />\n説明といっても<a href="https://brew.sh/index_ja">Homebrew</a>を使うとワンライナーで済みます。<br />\n下記のコマンドを実行するだけです。</p>\n<pre><code>$ brew install mongodb\n</code></pre>\n<p>次のコマンドでインストールの確認ができます。MongoDBのバージョンが確認できればインストール完了です。</p>\n<pre><code>$ mongo                     \nMongoDB shell version v4.0.3\n</code></pre>\n<p>MongoDBの起動は次のコマンドで起動できます。</p>\n<pre><code>$ mongod\n</code></pre>\n<p>設定ファイルを参照しない場合はデフォルトで<code>/data</code>以下にデータが作成されていきます。変更する場合は<code>--dbpath パス</code>で指定できます。また、ログファイルの出力先も<code>--logpath パス</code>で変更できます。<br />\nHomebrewを使ってMongoDBをインストールした場合は<code>/usr/local/etc/mongod.conf</code>に設定ファイルが作成されています。この設定ファイルを使ってデータとログの書き込み先を変更する場合は下記のように起動時に<code>--config</code>オプションを使います。</p>\n<pre><code>$ mongod --config /usr/local/etc/mongod.conf\n</code></pre>\n<p>MongoDBをコンソール上で操作する場合はMongoDB起動後に<code>mongo</code>コマンドを実行するとコンソールが立ち上がります。下記では<code>use DB名</code>コマンドを使ってDBを作成しています。他DBに切り替える時もこのコマンドを使います。コンソールから抜ける時は<code>quite()</code>を使います。</p>\n<pre><code>$ mongo\nMongoDB shell version v4.0.3\nconnecting to: mongodb://127.0.0.1:27017\n...\n...\n&gt;\n&gt; use express-todo-tutorial\nswitched to db express-todo-tutorial\n&gt; quite()\n\n</code></pre>\n<h2 id="mongodb-nodejs-driver">MongoDB Node.JS Driverを使う</h2>\n<p>Node.jsでMongoDBを扱うためのライブラリがあります。<a href="http://mongodb.github.io/node-mongodb-native/">MongoDB Node.JS Driver</a>や<a href="https://mongoosejs.com/">Mongoose</a>が有名です。</p>\n<p>それぞれの特徴を比較してみると、MongoDB Driverはより高速に処理を行うことができます。しかし、ライブラリ自体にスキーマ構造を作成するような機能はないので、もし必要な場合は自前で用意する必要があります。単にDBへ読み描きするだけであればMongoDB Driverを使うのが良いでしょう。</p>\n<p>対してMongooseの方は扱う上でスキーマの構造を定義するので、MVCモデルでWebアプリを作成するのであればMongooseを使う方が後々楽になります。</p>\n<p>ここではMongoDB Driverの使い方を説明します。Mongooseの使い方は次回説明していきます。</p>\n<h3>インストール</h3>\n<p>プロジェクトフォルダのトップに移って下記のコマンドを実行しましょう。これだけでライブラリのインストールは完了です。</p>\n<pre><code>$ yarn add bson-ext kerberos node-gyp mongodb\n</code></pre>\n<h3>接続確認</h3>\n<p><code>app.js</code>でMongoDBの接続確認を行う処理を追加しましょう。</p>\n<pre><code class="language-app.js.prettyprint">// app.js\n\nvar app = express();\n \n// 以下を追加\nvar MongoClient = require(\'mongodb\').MongoClient;\nMongoClient.connect(\n  \'mongodb://127.0.0.1:27017/express-todo-tutorial\',\n  { useNewUrlParser: true },\n  function(err, client) {\n    console.log(&quot;Connected successfully to DB&quot;);\n    client.close();\n  }\n);\n\n</code></pre>\n<p>ブラウザからlocalhostにアクセスして、Nodeサーバー上で「Connected successfully to DB」が出力されていれば成功です。（アプリ起動前には<code>mongod</code>でMongoDBを起動しておく事を忘れないでください。）</p>\n<p>コードの説明ですが、<code>require(\'mongodb\').MongoClient</code>でMongoDBのクライアントクラスをロードしています。<br />\n<code>MongoClient</code>の<code>connect</code>を使って実際にMongoDBにアクセスします。<br />\n第１引数には、接続先のMongoDBのURLを指定します。デフォルトのままであれば<code>mongodb://127.0.0.1:27017/スキーマ名</code>でアクセスできます。<br />\n第２引数にはオプションを指定します。ここでは<code>{useNewUrlParser true}</code>を指定して新しいURL解析を利用するようにしています。今後のMongoDBの接続URL形式更新に伴い指定する必要があります。指定しない場合は以下のような警告が表示されます。</p>\n<pre><code>(node:32386) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.\n</code></pre>\n<p>そして<code>connect</code>の第３引数には接続後に実行されるコールバックを指定します。今回は接続確認なのでログ出力後に接続を切断する処理を書いています。</p>\n<h2 id="select-mongodb">MongoDBからデータ数を取得する</h2>\n<p>MongoDBからデータを取得し、TODOの件数を画面に表示します。表示内容の詳細については<a href="https://irisash.com/express/editrouting/">Expressのルーティングの設定</a>をご参照ください。</p>\n<h3>DBアクセス部品の作成</h3>\n<p>MongoDBにアクセスする処理はデータ取得以外にも追加や削除などでも度々行うので、共通化して部品にしておきましょう。プロジェクト直下に<code>lib</code>フォルダを作成して、<code>constants.js</code>, <code>dbUtils.js</code>を用意しましょう。</p>\n<p><strong>フォルダ構造</strong></p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── controllers\n│   ├── homeController.js\n│   └── todoController.js\n└── lib\n    ├── constants.js\n    └── dbUtils.js\n</code></pre>\n<p><strong>constants.js</strong></p>\n<p>アプリケーション定数の定義をまとめておくために<code>constants.js</code>を用意しています。<br />\n<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">Object.freeze()</a>を使うとオブジェクトの値変更などを禁止してくれます。</p>\n<pre><code class="language-lib/constants.js.prettyprint">// lib/constants.js\n\nmodule.exports = Object.freeze({\n  DB_URL: \'mongodb://127.0.0.1:27017/\',\n  DB_NAME: \'express-todo-tutorial\'\n});\n</code></pre>\n<p><strong>dbUtils.js</strong></p>\n<pre><code class="language-lib/dbUtils.js.prettyprint">// lib/dbUtils.js\n\nvar constants = require(\'./constants\');\nvar mongodb = require(\'mongodb\');\nvar MongoClient = mongodb.MongoClient;\n\nexports.connectionToDB = function() {\n  return new Promise(function(resolve, reject) {\n    MongoClient.connect(\n      constants.DB_URL + constants.DB_NAME,\n      { useNewUrlParser: true },\n      function(error, client) {\n        if (error) {\n          reject(error);\n        } else {\n          var db = client.db(constants.DB_NAME);\n          resolve({ client, db });\n        }\n      }\n    );\n  });\n};\n</code></pre>\n<p>MongoDB Driverの<code>mongodb.MongoClient</code>を使ってMongoDBにアクセスします。アクセスする関数<code>connectionToDB</code>は戻り値にPromiseを返すようにしています。ExpressではDBの接続などが非同期処理になっているので、Promiseを使わないとMongoDBからデータの件数を取得を呼び出してから、画面描画を行なっても基本的には画面描画の方が先に終わるので、画面に表示される件数は0件となってしまいます。<br />\nそこでPromiseを使ってデータが取得が完了した後に画面の描画を開始するように実装していく必要があります。</p>\n<p>MongoDBのアクセスについては先程の内容と同じです。接続後の処理は<code>client.db(constants.DB_NAME)</code>でDBインスタンスを取得し、接続成功時として<code>{ clien, db }</code>でMongoClientとDBのインスタンを返すようにしています。この<code>db</code>の持つDB操作関数を使ってデータの取得などを実装できます。</p>\n<h3>件数の取得</h3>\n<p>さて作成したDBアクセス部品を<code>controllers/homeController.js</code>に組み込みましょう。まずはコードから。</p>\n<pre><code class="language-controllers/homeController.js.prettyprint">// controllers/homeController.js\n\nvar dbUtils = require(\'../lib/dbUtils\');\n\nexports.index = function(req, res) {\n  var dbClient;\n\n  var countTodos = function(db) {\n    return new Promise(function(resolve, reject) {\n      db.collection(\'todos\')\n      .countDocuments(\n        function(error, count) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve(count);\n          }\n        }\n      );\n    });\n  }\n\n  dbUtils.connectionToDB()\n  .then(function({ client, db }) {\n    dbClient = client;\n    return countTodos(db);\n  })\n  .then(function(result) {\n    res.render(\'home/index\', {\n      remainingTodoCount: result,\n      todayTodoCount: 2,\n      completedTodoCount: 1\n    });\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  })\n  .then(function() {\n    if (dbClient) {\n      dbClient.close();\n    }\n  });\n};\n</code></pre>\n<p>まずTodoデータ全体の件数を取得する<code>countTodos</code>を定義しています。こちらもアクセス部品と同様Promiseを返すようにしています。引数ではDBインスタンスを受け取るようにし、受け取ったDBインスタンスを使って<code>db.collection(\'todos\')</code>でTodoコレクション(<code>todos</code>と名付けました)のインスタンスを取得できます。<br />\nそして、コレクション関数の<code>countDocuments</code>でコレクションのデータ件数が取得できます。<code>countDocuments</code>の引数には検索条件を渡すことができます。ここでは一旦全件の件数を取得するようにします。検索条件は後ほど設定します。</p>\n<p>さて、実際に処理の開始は<code>dbUtils.connectionToDB()</code>のアクセスから始まります。アクセス後に取得したDBインスタンスを使って<code>countTodos(db)</code>の呼び出しをします。<code>dbClient = client;</code>としてMongoClientを一時的に保存していますが、これは処理の最後で<code>dbClient.close();</code>としてDB接続を閉じるために保存しています。</p>\n<p>最後に取得した件数を<code>remainingTodoCount</code>の値として設定すれば件数取得の完了です。現在はデータがないので画面には0件と表示されるでしょう。</p>\n<img src="images/express/mongodb/get_data_count.png" alt="Todo件数取得" title="Todo件数取得" style="max-height:400px;">\n<h2 id="insert-mongodb">MongoDBにデータを書き込む</h2>\n<p>データ件数を取得できるようになりましたが、今のままではデータを追加できないので一覧は0件のままです。データ追加を実装して正しく件数が表示されることを確認していきましょう。</p>\n<p>Todoのフォーム画面は<a href="https://irisash.com/express/editrouting/">Expressのルーティングの設定</a>で既に用意しています。残りは「submit」ボタンを押した後の処理の実装です。</p>\n<p><strong>routes/todo.js</strong></p>\n<p>データの追加処理はPOSTリクエストなので<code>routes/todo.js</code>では<code>router.post</code>を使って<code>/create</code>のPOST処理を登録しましょう。</p>\n<pre><code class="language-routes/todo.js.prettyprint">// routes/todo.js\n省略\n...\nrouter.get(\'/create\', todoController.createGet);\nrouter.post(\'/create\', todoController.createPost);\n</code></pre>\n<p><strong>controllers/todoController.js</strong></p>\n<p>MongoDBへの接続はこれまでの通りです。先程の件数取得と異なるのはデータ追加関数の定義箇所となります。</p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n省略\n...\nexports.createPost = function(req, res) {\n  var dbClient;\n  var createOneTodo = function(db, data) {\n    return new Promise(function(resolve, reject) {\n      db.collection(\'todos\')\n      .insertOne(data, function(error, r) {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(r);\n        }\n      });\n    });\n  };\n  \n  dbUtils.connectionToDB()\n  .then(function({ client, db }) {\n    dbClient = client;\n    var { title, description, status, estimatedDate } = req.body;\n    return createOneTodo(db, {\n      title,\n      description,\n      status,\n      estimatedDate: new Date(estimatedDate)\n    });\n  })\n  .then(function(result) {\n    res.redirect(\'/todo\');\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  })\n  .then(function() {\n    if (dbClient) {\n      dbClient.close();\n    }\n  });\n};\n</code></pre>\n<p>データ追加関数<code>createOneTodo</code>はDBインスタンスと挿入データとしています。データを1件追加にはコレクションの関数<code>insertOne</code>を利用します。第１引数に挿入データを第２引数には追加後のコールバックです。コールバックには追加した結果が渡されます。追加の成功件数や追加データなどが参照できます。ここではPromiseで結果情報を参照できるようにしていますが特には使用していません。</p>\n<p>また、POSTリクエストで渡されたデータは<code>req.body</code>から参照することができます。<code>createOneTodo</code>に渡すデータは<code>req.body</code>から拾って、適宜加工してから渡します。</p>\n<p>最後にPOST処理なのでデータ登録完了後は<code>res.redirect(\'/todo\');</code>でTodoの一覧画面にリダイレクトしておきましょう。</p>\n<p>さて、実際にTodoを追加してみましょう。追加して行く度に「残りのTODO」の件数がカウントされていくのが確認できます。</p>\n<h2 id="find-mongodb">MongoDBでデータ詳細を取得する</h2>\n<p>データ追加ができるようになりました。今度は「残りのTODO」の一覧画面にTODOの詳細が表示されるようにしましょう。</p>\n<p><strong>controllers/todoController.js</strong></p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n省略\n...\nexports.index = function(req, res, next) {\n  var dbClient;\n\n  var getTodos = function(db) {\n    return new Promise(function(resolve, reject) {\n      db.collection(\'todos\')\n      .find({})\n      .toArray(function(error, docs) {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(docs);\n        }\n      });\n    });\n  }\n\n  dbUtils.connectionToDB()\n  .then(function({ client, db }) {\n   dbClient = client;\n   return getTodos(db);\n  })\n  .then(function(result) {\n    res.render(\'todo/index\', {\n      todos: result\n    });\n  })\n  .catch(function(err) {\n    console.log(err);\n    next(err);\n  })\n  .then(function() {\n    if (dbClient) {\n      dbClient.close();\n    }\n  });\n};\n</code></pre>\n<p>データ検索はコレクションの<code>find</code>関数でできます。引数には検索条件を設定します。空オブジェクトを指定あるいは何も指定しない場合は全件検索になります。検索後は検索結果をそのままビュー側に渡しています。</p>\n<p>「残りのTODO」を取得する場合は検索条件を指定する必要がありますが、ここでは一旦全件検索しておきます。検索条件は後で設定します。</p>\n<p><strong>views/todo/index.pug</strong><br />\n<a href="https://irisash.com/express/editrouting/">Expressのルーティングの設定</a>では、画面は固定の文字を表示していたので、データの中身を表示するように編集しましょう。</p>\n<pre><code class="language-views/todo/index.pug.prettyprint">// views/todo/index.pug\n省略\n...\n  h1 残りのTODO\n  if !!todos\n    ul\n      each todo in todos\n        li\n        p #{todo.title}\n        p #{todo.description}\n        p #{todo.status}\n        p #{todo.estimatedDate}\n        p\n          | [\n          a(href=\'\') 編集\n          | ]\n        p\n  \t  | [\n  \t  a(href=\'\') 削除\n  \t  | ]\n</code></pre>\n<p>追加画面で登録した内容が表示されれば成功です。</p>\n<img src="images/express/mongodb/get_todo_list.png" alt="Todo件数取得" title="Todo件数取得" style="max-height:400px;">\n<h2 id="where-mongodb">MongoDBで検索条件を指定する</h2>\n<p>さて、データ取得・追加まで一通りできるようになりました。次は検索条件を指定して必要とするデータのみ取得するようにしてみましょう。<br />\n検索条件は様々な箇所で使い回しをする可能性があるので、クエリ作成の処理は共通化しておきましょう。lib配下に<code>todoQueries.js</code>を作成します。</p>\n<h3>詳細画面に検索条件を追加する</h3>\n<p><strong>lib/todoQueries.js</strong></p>\n<pre><code class="language-lib/todoQueries.js.prettyprint">// lib/todoQueries.js\n\nexports.completed = function() {\n  return { status: { $eq: \'completed\' } };\n};\nexports.notCompleted = function() {\n  return { status: { $ne: \'completed\' } };\n};\nexports.today = function() {\n  var now = new Date();\n  var start = new Date(new Date(now).setHours(0,0,0,0));\n  var end = new Date(new Date(now).setHours(23,59,59,999));\n  return {\n    estimatedDate: {\n      $gte: start,\n      $lte: end\n    }\n  };\n};\n</code></pre>\n<p>MongoDB Driverでは、MongoDBコンソールで扱うクエリと同様の書き方で条件を指定できます。基本的に条件は<code>{ プロパティ: 値 }</code>の形式か<code>{ プロパティ: { 比較文字: 値 } }</code>の形式で指定できます。以下に一部ですが比較文字の一覧を記載しておきます。</p>\n<table>\n<thead>\n<tr>\n<th>比較文字</th>\n<th>詳細</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$eq</td>\n<td>値と同値のデータを条件に検索します</td>\n</tr>\n<tr>\n<td>$nq</td>\n<td>値と異なるデータを条件に検索します</td>\n</tr>\n<tr>\n<td>$gt</td>\n<td>値より大きいデータを条件に検索します</td>\n</tr>\n<tr>\n<td>$gte</td>\n<td>値と同値または値より大きいデータを条件に検索します</td>\n</tr>\n<tr>\n<td>$lt</td>\n<td>値より小さいデータを条件に検索します</td>\n</tr>\n<tr>\n<td>$lte</td>\n<td>値と同値または値より小さいデータを条件に検索します</td>\n</tr>\n</tbody>\n</table>\n<p>「残りのTODO」を検索する条件はステータスが<code>completed</code>でないとするので、その条件<code>{ status: { $ne: \'completed\' } }</code>を返す<code>notCompleted</code>関数を定義しています。<br />\n同様に「今日のTODO」の条件として<code>today</code>関数を、「完了済TODO」の条件として<code>completed</code>関数をそれぞれ用意しています。</p>\n<p><strong>controllers/todoController.js</strong></p>\n<p>条件作成部品は用意できたので、実際に検索時に条件を指定してみましょう。</p>\n<pre><code class="language-controllers/todoController.js.prettyprint">// controllers/todoController.js\n省略\n...\n// クエリ作成部品をインポート\nvar todoQueries = require(\'../lib/todoQueries\');\n\n// 変更\nvar getTodos = function(db, condition) {\n  return new Promise(function(resolve, reject) {\n    db.collection(\'todos\')\n    .find(condition)\n    .toArray(function(error, docs) {\n      if (error) {\n        reject(error);\n      } else {\n        resolve(docs);\n      }\n    });\n  });\n}\n\nexports.index = function(req, res, next) {\n  var dbClient;\n\n  dbUtils.connectionToDB()\n  .then(function({ client, db }) {\n    dbClient = client;\n    // 変更\n    return getTodos(db, todoQueries.notCompleted());\n  })\n  .then(function(result) {\n    res.render(\'todo/index\', {\n...\n\n</code></pre>\n<p>条件検索の方法はコレクション関数<code>find</code>の引数に条件のオブジェクトを渡すことで実行できます。<br />\nTodoを取得する関数は「残りのTODO」「今日のTODO」「完了済TODO」と使いまわせるようにファイル内でグローバルに定義し直します。さらに、第２引数には条件を指定できるようにしておきます。指定した条件を<code>find</code>関数に渡せば完了です。<br />\nあとは、<code>getTodos</code>の呼び出し時にクエリ作成部品で指定するクエリを渡せば検索できます。</p>\n<p>データ追加でステータスが<code>completed</code>とそれ以外のデータを作成してみてください。<code>/todo</code>では<code>completed</code>以外のTodoしか表示されていないことが確認できます。</p>\n<p>同様にして「今日のTODO」「完了済TODO」も実装してみてください。</p>\n<h3>件数一覧画面に検索条件を追加する</h3>\n<p>件数一覧画面にも検索条件を組み込みましょう。実装方法は<code>find</code>の時と同様です。<code>countDocuments</code>の関数にクエリを渡すだけです。</p>\n<pre><code class="language-controllers/homeController.js.prettyprint">// controllers/homeController.js\n省略\n...\nexports.index = function(req, res) {\n  var dbClient;\n\n  // 条件を設定できるように変更\n  var countTodos = function(db, condition) {\n    return new Promise(function(resolve, reject) {\n      db.collection(\'todos\')\n      .countDocuments(\n        // 条件を渡す\n        condition,\n        function(error, count) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve(count);\n          }\n        }\n      );\n    });\n  }\n\n  dbUtils.connectionToDB()\n  .then(function({ client, db }) {\n    dbClient = client;\n    // ３つの検索が全て終わるまで待つようにする\n    return Promise.all([\n      countTodos(db, todoQueries.notCompleted()),\n      countTodos(db, todoQueries.today()),\n      countTodos(db, todoQueries.completed()),\n    ]);\n  })\n  .then(function(result) {\n    res.render(\'home/index\', {\n      // 取得した件数をそれぞれ設定\n      remainingTodoCount: result[0],\n      todayTodoCount: result[1],\n      completedTodoCount: result[2]\n    });\n  })\n...\n\n</code></pre>\n<p><code>countTodos</code>の変更は先程の<code>getTodos</code>と同様です。注意するのは<code>countTodos</code>を呼び出す際に３つの検索が全て終わってから、次の画面描画処理に移るようにしないといけないことです。<br />\nそこで<code>Promise.all</code>を使ってこれを実装しています。<code>all</code>には実行するPromiseの配列を指定します。すると実行結果として指定したPromiseの結果が配列で取得できます（結果の配列の中身は<code>all</code>で渡したPromiseの順で返ってきます）</p>\n<p><code>/home</code>の件数が期待どうりに取得できていれば成功です。</p>\n<h2 id="delete-mongodb">MongoDBでデータを削除する</h2>\n<h2 id="update-mongodb">MongoDBでデータを更新する</h2>\n</section>\n'},272:function(n,e,o){"use strict";o.r(e);o(20),o(248);var t=o(253),r=o(247),d=o(254),c=o(73),l=o(261),m=o.n(l),h={components:{ArticleTimestamp:t.a,SideMenu:r.a,TableContent:d.a},data:function(){return{menuSections:Object.values(c)}},computed:{MongodbMd:function(){return m.a}},head:function(){return{title:c.mongodb.headerTitle,meta:[{hid:"description",name:"description",content:c.mongodb.headerDescription}]}}},f=o(9),component=Object(f.a)(h,function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"wrapper"}},[e("article",{attrs:{id:"main"}},[e("section",[e("div",{domProps:{innerHTML:this._s(this.MongodbMd)}}),this._v(" "),e("article-timestamp",{attrs:{createdAt:"2019/03/24",updatedAt:"2019/03/24"}})],1)]),this._v(" "),e("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),e("table-content",{attrs:{articleMd:this.MongodbMd}})],1)},[],!1,null,null,null);e.default=component.exports}}]);