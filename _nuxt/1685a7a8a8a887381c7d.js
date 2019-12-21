(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{261:function(e,n,t){var content=t(265);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(14).default)("2c1f7920",content,!0,{sourceMap:!1})},262:function(e,n,t){"use strict";var o={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},r=t(12),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,(function(n){return t("section",{key:n.category},[t("div",{staticClass:"menu-overview"},[e._v(e._s(n.category))]),e._v(" "),e._l(n.menus,(function(n){return t("div",{key:n.linkPath,staticClass:"menu-item"},[t("nuxt-link",{class:e.routePath==n.linkPath?"access-now":"",attrs:{to:n.linkPath}},[e._v("\n          "+e._s(n.title)+"\n        ")])],1)}))],2)})),0)])}),[],!1,null,null,null);n.a=component.exports},263:function(e,n,t){"use strict";n.a='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},264:function(e,n,t){"use strict";var o=t(261);t.n(o).a},265:function(e,n,t){(n=t(13)(!1)).push([e.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa}.article-timestamp,.timestamp-container{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.timestamp-container{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""]),e.exports=n},266:function(e,n,t){"use strict";var o={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},r=(t(264),t(12)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"article-timestamp"},[t("div",{staticClass:"timestamp-container"},[t("i",{staticClass:"far fa-clock"}),e._v(" "),t("p",[e._v(e._s(e.createdAt))])]),e._v(" "),t("div",{staticClass:"timestamp-container"},[t("i",{staticClass:"fas fa-clock"}),e._v(" "),t("p",[e._v(e._s(e.updatedAt))])])])}),[],!1,null,null,null);n.a=component.exports},267:function(e,n,t){"use strict";t(263);var o={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var e,n=/<h2 id="(.*)">(.*)<\/h2>/gm,t=[];null!=(e=n.exec(this.$props.articleMd));)e[1]&&e[2]&&t.push({id:e[1],title:e[2]});return t||[]}}},r=t(12),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"table-content"}},[t("aside",{attrs:{id:"table-content-list"}},e._l(e.getInternalLinks,(function(n){return t("div",{key:n.id,staticClass:"link-container"},[t("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+n.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[e._v("\n        "+e._s(n.title)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);n.a=component.exports},291:function(e,n,t){"use strict";t.r(n);var o=t(266),r=t(262),c=t(267),d=t(87),l={components:{ArticleTimestamp:o.a,SideMenu:r.a,TableContent:c.a},data:function(){return{menuSections:d}},computed:{ExpressSessionMd:function(){return'<section><h1>Expressでセッションを利用する</h1>\n<p>Expressでセッション管理するためには<a href="https://github.com/expressjs/session">express-session</a>というミドルウェアを使います。セッションはデフォルトではメモリに保存されますが、外部パッケージを利用することでRedisやMongoDBに保存先を変更することができます。</p>\n<p>また、本ページのexpress-sessionnのサンプルコードを<a href="https://github.com/irisAsh/express-session-tutorial">Github</a>においていますのでご参考ください。</p>\n<h2 id="express-session">express-sessionの設定</h2>\n<p>先ずはインストールです。<code>yarn</code>でパッケージをインストールします。</p>\n<pre><code class="language-shell.prettyprint">$ yarn add express-session\n</code></pre>\n<p>インストールしたら、express-sessionを設定する実装をしましょう。<code>app.js</code>を編集します。</p>\n<pre><code class="language-app.js.prettyprint">// app.js\n\nvar logger = require(\'morgan\');\nvar session = require(&quot;express-session&quot;); // 追加\n...\n\napp.use(express.static(path.join(__dirname, \'public\')));\n\n// 追加\napp.use(session({\n  secret: &quot;secret word&quot;,\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    maxAge: 60 * 1000\n  }\n}));\n</code></pre>\n<p><code>session({ オプション })</code>でexpress-sessionの設定をします。簡単にですがオプションの説明をしておきます。</p>\n<h3 id="secret">secret</h3>\n<p>クッキーに保存するセッションIDを署名するために使用される秘密ワードです。文字列または配列を設定できます。<br />\n配列を設定した場合は署名時には配列の最初の文字列をしようし、署名検証には配列のすべての文字列が考慮されます。</p>\n<h3 id="resave">resave</h3>\n<p>セッションをセッションストアに強制的に保存するかどうかの設定です。（<code>true</code>にするとセッションの変更なしでも保存されます）<br />\n通常は<code>false</code>で良いです。</p>\n<h3 id="saveUninitialized">saveUninitialized</h3>\n<p>初期化されていないセッションを強制的に保存するかどうかの設定です。<br />\n通常は<code>false</code>で良いです。</p>\n<h3 id="cookie">cookie</h3>\n<p>セッションIDのクッキーの設定を指定できます。ここでは<code>maxAge</code>(ミリ秒)でクッキーの保存期間を１分に設定しています。</p>\n<h2 id="how-to-use-session">セッションの使い方</h2>\n<p>下図のようにページを訪れた回数をセッションを使って表示します。</p>\n<img src="images/express/express_session/home_page.png" alt="Home画面" title="Home画面" style="max-height:400px;">\n<p>実装は下記のようになります。</p>\n<pre><code class="language-routes/index.js.prettyprint">// routes/index.js\n\nrouter.get(\'/\', function(req, res, next) {\n  var session = req.session;\n  if (!!session.visitCount) {\n    session.visitCount += 1;\n  } else {\n    session.visitCount = 1;\n  }\n  res.render(\'index\', { visitCount: session.visitCount });\n});\n</code></pre>\n<p>express-sessionを設定したことにより、<code>req.session</code>からセッションを取得することができます。ここでは訪問回数は<code>visitCount</code>に保存するようにし、初期値があれば１回分カウント、なければ１を設定するようにしています。</p>\n<p>実際に画面を開くと、画面を更新する度に訪問回数が増えていくのが確認できます。また、今回はセッションの設定で保存時間を１分に設定しているので１分以上経ってから画面を更新すると訪問回数が１回に戻るようになっています。</p>\n<img src="images/express/express_session/visit_five_times.png" alt="訪問回数" title="訪問回数" style="max-height:400px;">\n<h2 id="connect-mongo">MongoDBでセッションを管理する</h2>\n<p>セッションの格納先をメモリ上からMongoDBに変更してみましょう。MongoDBと連携するパッケージはいくつかありますが、ここでは<a href="https://github.com/jdesboeufs/connect-mongo">connect-mongo</a>を使ってみます。</p>\n<p>また、MongoDBのインストールや使い方は以下を参考にしてください。</p>\n<ul>\n<li><a href="https://irisash.github.io/express/mongodb/">Express入門（MongoDBの利用）</a></li>\n<li><a href="https://irisash.github.io/express/mongoose/">Express入門（Mongooseの利用）</a></li>\n</ul>\n<p><strong>インストール</strong></p>\n<pre><code class="language-shell.prettyprint">$ yarn add connect-mongo\n</code></pre>\n<p><strong>実装</strong></p>\n<pre><code class="language-app.js.prettyprint">// app.js\n...\nvar session = require(&quot;express-session&quot;);\nvar MongoStore = require(\'connect-mongo\')(session); // 追加\n...\n\napp.use(express.static(path.join(__dirname, \'public\')));\n\napp.use(session({\n  secret: &quot;secret word&quot;,\n  resave: false,\n  saveUninitialized: false,\n  // 変更\n  store: new MongoStore({\n    url: \'mongodb://127.0.0.1:27017/express-sesstion-tutorial\',\n    ttl: 60\n  })\n}));\n</code></pre>\n<p>sessionの<code>store</code>オプションにセッションの格納先を指定をすることができます。</p>\n<p><code>require(\'connect-mongo\')(session)</code>でExpressとconnect-mongoの連携を行い、<code>store</code>オプションに指定します。</p>\n<p>connect-mongoのオプションには<code>url</code>にMongoDBのURLを指定する必要があります。<br />\nまた、セッションの保存期間には<code>ttl</code>オプション（単位は秒）を使います。これはMongoDBのTTLインデックスを利用しています。TTLは指定した時間を過ぎると自動的にデータを削除するMongoDBの機能です。</p>\n<p><strong>確認</strong></p>\n<p>先程と同様に訪問回数を確認してください。また、MongoDBコンソールでデータの中身を確認してみると実際にセッションか保存されていることがわかります。<br />\n<code>sessions</code>コレクションにセッションが保存されています。</p>\n<pre><code class="language-shell.prettyprint">$ mongo\n...\n\n&gt; use express-sesstion-tutorial\nsessions\n&gt; db.sessions.find()\n{ &quot;_id&quot; : &quot;Z9rKh7pJnj1cM6SCxkz2ZCMUEeFuAqxL&quot;, &quot;expires&quot; : ISODate(&quot;2019-04-21T15:12:49.411Z&quot;), &quot;session&quot; : &quot;{\\&quot;cookie\\&quot;:{\\&quot;originalMaxAge\\&quot;:null,\\&quot;expires\\&quot;:null,\\&quot;httpOnly\\&quot;:true,\\&quot;path\\&quot;:\\&quot;/\\&quot;},\\&quot;visitCount\\&quot;:2}&quot; }\n</code></pre>\n<h2 id="connect-redis">Redisでセッションを管理する</h2>\n<p>MongoDBの時と同様にRedisを使ってセッション管理ができるようにしてみましょう。</p>\n<p>Redisと連携するパッケージ<a href="https://github.com/tj/connect-redis">connect-redis</a>を使って実装します。</p>\n<p>また、Redis自体の使い方については<a href="https://irisash.github.io/redis/setup/">Redisの環境設定</a>をご参考ください。</p>\n<p><strong>インストール</strong></p>\n<pre><code class="language-shell.prettyprint">$ yarn add connect-redis\n</code></pre>\n<p><strong>実装</strong></p>\n<pre><code class="language-app.js.prettyprint">// app.js\n\nvar session = require(&quot;express-session&quot;);\n// 追加\nvar RedisStore = require(\'connect-redis\')(session);\n...\n\napp.use(express.static(path.join(__dirname, \'public\')));\n\napp.use(session({\n  secret: &quot;secret word&quot;,\n  resave: false,\n  saveUninitialized: false,\n  // 追加\n  store: new RedisStore({\n    host: \'127.0.0.1\',\n    port: 6379,\n    prefix: \'session-tutorial:\',\n    ttl: 60\n  })\n}));\n</code></pre>\n<p>Expressとconnect-redisの連携は<code>require(\'connect-mongo\')(session)</code>で設定します。そして<code>express-session</code>の<code>store</code>オプションにRedisを指定します。<br />\nまた、<code>connect-redis</code>のオプションについてですが、<code>host</code>と<code>port</code>オプションはRedisの場所を指定します。初期設定はホストが<code>127.0.0.1</code>で、ポートが<code>6379</code>です。<br />\n<code>prefix</code>はRedisに保存する時のキーの接頭辞になります。上記の場合は<code>session-tutorial:ランダム値</code>の形式でキーが作成されます。<br />\n<code>ttl</code>はセッションの保存期間で単位は秒です。</p>\n</section>\n'}},head:function(){var e=d.routing_view.menus;return{title:e.express_session.headerTitle,meta:[{hid:"description",name:"description",content:e.express_session.headerDescription}]}}},h=t(12),component=Object(h.a)(l,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("article",{attrs:{id:"main"}},[n("section",[n("div",{domProps:{innerHTML:this._s(this.ExpressSessionMd)}}),this._v(" "),n("article-timestamp",{attrs:{createdAt:"2019/04/27",updatedAt:"2019/04/28"}})],1)]),this._v(" "),n("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),n("table-content",{attrs:{articleMd:this.ExpressSessionMd}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);