(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(e,t,n){var content=n(265);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("2c1f7920",content,!0,{sourceMap:!1})},262:function(e,t,n){"use strict";var r={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},o=n(12),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,(function(t){return n("section",{key:t.category},[n("div",{staticClass:"menu-overview"},[e._v(e._s(t.category))]),e._v(" "),e._l(t.menus,(function(t){return n("div",{key:t.linkPath,staticClass:"menu-item"},[n("nuxt-link",{class:e.routePath==t.linkPath?"access-now":"",attrs:{to:t.linkPath}},[e._v("\n          "+e._s(t.title)+"\n        ")])],1)}))],2)})),0)])}),[],!1,null,null,null);t.a=component.exports},263:function(e,t,n){"use strict";t.a='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},264:function(e,t,n){"use strict";var r=n(261);n.n(r).a},265:function(e,t,n){(t=n(13)(!1)).push([e.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa}.article-timestamp,.timestamp-container{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.timestamp-container{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""]),e.exports=t},266:function(e,t,n){"use strict";var r={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},o=(n(264),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-timestamp"},[n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"far fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.createdAt))])]),e._v(" "),n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"fas fa-clock"}),e._v(" "),n("p",[e._v(e._s(e.updatedAt))])])])}),[],!1,null,null,null);t.a=component.exports},267:function(e,t,n){"use strict";n(263);var r={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var e,t=/<h2 id="(.*)">(.*)<\/h2>/gm,n=[];null!=(e=t.exec(this.$props.articleMd));)e[1]&&e[2]&&n.push({id:e[1],title:e[2]});return n||[]}}},o=n(12),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"table-content"}},[n("aside",{attrs:{id:"table-content-list"}},e._l(e.getInternalLinks,(function(t){return n("div",{key:t.id,staticClass:"link-container"},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+t.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);t.a=component.exports},287:function(e,t,n){"use strict";n.r(t);var r=n(266),o=n(262),c=n(267),l=n(87),d={components:{ArticleTimestamp:r.a,SideMenu:o.a,TableContent:c.a},data:function(){return{menuSections:l}},computed:{BasicAuthMd:function(){return"<section><h1>ExpressでBasic認証を実装する</h1>\n<p>Basic認証は認証方式の１つで最も簡潔で基本的な認証で、セキュリティ面では弱い部分を持ちますが、手軽に実装でき多くの環境で利用できる点で有用な認証の１つです。</p>\n<p>多くはApacheなどのアプリケーションサーバーでBasic認証を用意しますが、今回はExpressでBasic認証の設定をしてみます。</p>\n<p>実装済みのサンプルは<a href=\"https://github.com/irisAsh/express-basic-auth-tutorial\">こちら</a>のGithub上ありますのでご参照ください。</p>\n<h2 id=\"basic-auth-overview\">Basic認証の流れ</h2>\n<p>Basic認証の流れは以下のようになっています。</p>\n<ul>\n<li>クライアントが保護のかかったページに訪れる</li>\n<li>サーバーが認証を要求する</li>\n<li>クライアントがユーザー名とパスワードをサーバーへ送信する</li>\n<li>ユーザー名とパスワードが正しいことを確認しリクエストされたページの情報を返す</li>\n</ul>\n<h2 id=\"initialize-project\">サンプルプロジェクトの用意</h2>\n<p>Basic認証を試すためのサンプルプロジェクトを用意します。</p>\n<pre><code class=\"language-shell.prettyprint\">$ express --view=pug express-basic-auth-tutorial\n</code></pre>\n<p>express-generatorでプロジェクトを作った後にページを３つ用意します。</p>\n<ul>\n<li>/ : ルート画面</li>\n<li>/tutorials : チュートリアル画面（このページにBasic認証保護をかけます）</li>\n<li>/about : About画面</li>\n</ul>\n<p>Basic認証を試すだけですので、各画面は特に重要な実装はありません。</p>\n<p><strong>ルート画面</strong></p>\n<p><code>/tutorials</code>,<code>/about</code>へのリンクとログアウトのボタンがあるだけです。<br />\n(サンプルではテンプレートエンジンにPugを使っています。Pugの書き方がわからない方は<a href=\"https://irisash.github.io/express/pug_reference/\">Pugの書き方まとめ</a>をご参考ください。)</p>\n<pre><code class=\"language-index.pug.prettyprint\">// index.pug\n\nextends layout\n\nblock content\n  h1= title\n  p Welcome to #{title}\n  ul\n    li\n      a(href='/tutorial') tutorial\n    li\n      a(href='/about') about\n  a(href='/logout') logout\n</code></pre>\n<img src=\"images/express/basic_auth/root.png\" alt=\"ルート画面\" title=\"ルート画面\" style=\"max-height:400px;\">\n<p><strong>チュートリアル画面/About画面</strong></p>\n<p>画面に「Tutorial Page」が表示されるだけです。About画面も同様です。</p>\n<pre><code class=\"language-routes/tutorials.js.prettyprint\">// routes/tutorials.js\n\nvar express = require('express');\nvar router = express.Router();\n\n/* GET users listing. */\nrouter.get('/', function(req, res, next) {\n  res.send('Tutorial Page');\n});\n\nmodule.exports = router;\n</code></pre>\n<h2 id=\"return-www-authenticate\">認証を要求する</h2>\n<p>さて、今の状態ではチュートリアル画面は認証なしで閲覧できる状態です。このページを表示するようにしようとすると認証が要求されるようにしましょう。</p>\n<p>そのためにはサーバーからのレスポンスで401のステータスコードを返し同時に「WWW-Authenticate」ヘッダをつけておくようにします。この「WWW-Authenticate」ヘッダが返ってくると認証のポップアップが自動で表示されます。</p>\n<pre><code class=\"language-app.js.prettyprint\">// app.js\n\napp.use(express.static(path.join(__dirname, 'public')));\n\n// 追加\napp.use('/*', function (req, res, next) {\n  if (req.originalUrl === '/about' || req.originalUrl === '/') {\n    next();\n  } else {\n    if (false /* 認証がOKならtrue */) {\n      next();\n    } else {\n      res.setHeader('WWW-Authenticate', 'Basic realm=&quot;tutorial&quot;');\n      next(createError(401));\n    }\n  }\n});\n\napp.use('/', indexRouter);\n</code></pre>\n<p>処理の説明ですが、まず<code>req.originalUrl</code>が<code>/</code>,<code>/about</code>以外は認証を通るようにしています。</p>\n<p>そして今は全て認証NGとして、NGの場合は<code>res.setHeader('WWW-Authenticate', 'Basic realm=&quot;tutorial&quot;');</code>でヘッダに「WWW-Authenticate」を付与します。<br />\nまた<code>realm=????</code>には任意の保護領域名を設定します。これにより既に認証有効かどうかを判定できます。</p>\n<p>最後に<code>next(createError(401));</code>で401エラーを発生させます。</p>\n<p>さて、<code>/tutorial</code>にアクセスしチュートリアル画面を確認してみましょう。ユーザー名とパスワードを要求されるポップアップが表示されるようになっています。</p>\n<img src=\"images/express/basic_auth/popup.png\" alt=\"認証ポップアップ画面\" title=\"認証ポップアップ画面\" style=\"max-height:400px;\">\n<h2 id=\"decode-authenticate\">認証の情報を読み取る</h2>\n<p>認証ポップアップは表示されたので、ユーザー名とパスワードを入力し「Sign In」を押された後の実装をしましょう。<br />\nクライアントから送信されたリクエストのAuthorizationヘッダにはユーザー名とパスワードの情報が含まれています。</p>\n<p>Basic認証では、ユーザ名とパスワードをコロン( : )で結合し、さらにBase64でエンコードされた情報が送信されるようになっています。従ってサーバー側ではの逆の操作を行う必要があります。<br />\n正確にはAuthorizationヘッダの値は&quot;Basic base64でエンコードされた文字列&quot;となるので初めの&quot;Basic &quot;は省く必要があります。</p>\n<p>さて、app.jsを編集してBasic認証の実装を仕上げましょう。</p>\n<pre><code class=\"language-app.js.prettyprint\">// app.js\n\n// 認証を登録したユーザーの情報\nvar allowedUsers = {\n  &quot;Express&quot;: &quot;is good&quot;\n}\n// 認証判定関数\nvar judgeAllowedUse = function(authorization) {\n  // ヘッダの値が&quot;Basic &quot;であることを確認\n  if (!authorization || !authorization.startsWith(&quot;Basic&quot;)) {\n    return false;\n  }\n  // エンコードされた文字列を取得\n  var encodedPassword = authorization.substring(6);\n  // エンコードされた文字列をデコード\n  var decodedPassword = Buffer(encodedPassword, 'base64').toString('binary');\n  // ユーザー名とパスワードを分ける\n  var colonIndex = decodedPassword.indexOf(':');\n  var username = decodedPassword.slice(0, colonIndex);\n  var password = decodedPassword.substring(colonIndex + 1);\n  // 送信されたユーザー名とパスワードが認証登録されたものか確認\n  if (!!allowedUsers[username] &amp;&amp; allowedUsers[username] === password) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\napp.use('/*', function (req, res, next) {\n  if (req.originalUrl === '/about' || req.originalUrl === '/') {\n    next();\n  } else {\n    var authorization = req.headers[&quot;authorization&quot;] || &quot;&quot;;\n    if (judgeAllowedUse(authorization)) {\n      // 認証OK\n      next();\n    } else {\n      // 認証NG\n      res.setHeader('WWW-Authenticate', 'Basic realm=&quot;tutorial&quot;');\n      next(createError(401));\n    }\n  }\n});\n</code></pre>\n<p>まず、認証登録ユーザーを設定します。ここでは<code>allowedUsers</code>に<code>{ ユーザー名: パスワード }</code>の形式で保存しています。<br />\nただし、実際の本番環境ではコード内に含めないようにしてください。サーバー内のローカルファイルや環境変数など管理者以外が閲覧できない場所で情報を保存するようにしてください。</p>\n<p><code>judgeAllowedUse</code>は認証を判定する関数です。引数にはAuthorizationのヘッダ値を渡すようにしています。<br />\n関数の処理は先程説明した通りエンコード時と逆の処理をしています。送信された値が不正ならば<code>false</code>を返すようにしています。</p>\n<p>Authorizationのヘッダ値は<code>req.headers[&quot;authorization&quot;]</code>で取得できます。</p>\n<p>以上で実装は終わりです。実際にチュートリアル画面を開いてみて登録してあるユーザー名とパスワードで認証を進めてください。チュートリアル画面が表示されれば成功です。</p>\n<h2 id=\"logout\">Basic認証のログアウト</h2>\n<p>基本的にBasic認証を行なったブラウザが閉じられれば認証情報はリセットされて、ブラウザを開き直して再度アクセスした時にまた認証が発生します。<br />\nもし画面内からBasic認証をリセットしたい場合は、任意のアクセスで「WWW-Authenticate」ヘッダを加えて401のレスポンスを返すようにすれば可能です。</p>\n<pre><code class=\"language-app.js.prettyprint\">// app.js\n\napp.use('/', indexRouter);\napp.use('/tutorial', tutorialsRouter);\napp.use('/about', aboutRouter);\n// ログアウト処理\napp.get('/logout', function (req, res) {\n  res.set('WWW-Authenticate', 'Basic realm=&quot;tutorial&quot;');\n  return res.sendStatus(401);\n});\n</code></pre>\n<h2 id=\"use-basic-auth\">basic-authを使う</h2>\n<p>さて、ヘッダーから情報をデコードする処理をしてくれるライブラリがあるので使ってみましょう。上のままで良いという方は、この実装は必要ないです。</p>\n<p>さてライブラリですが、<a href=\"https://github.com/jshttp/basic-auth\">basic-auth</a>というのがありますのでこれを使ってみましょう。</p>\n<pre><code class=\"language-shell.prettyprint\">$ yarn add basic-auth\n</code></pre>\n<pre><code class=\"language-app.js.prettyprint\">// app.js\n\n// 追加\nvar basicAuth = require('basic-auth')\n...\n\n// 引数をcredentialsに変更\nvar judgeAllowedUse = function(credentials) {\n  if (!credentials) {\n    return false;\n  }\n  var username = credentials.name;\n  var password = credentials.pass;\n  var valid = true\n  valid = !!allowedUsers[username] &amp;&amp; allowedUsers[username] === password &amp;&amp; valid;\n  return valid;\n}\n\napp.use('/*', function (req, res, next) {\n  if (req.originalUrl === '/about' || req.originalUrl === '/') {\n    next();\n  } else {\n    // 変更\n    var credentials = basicAuth(req);\n    if (judgeAllowedUse(credentials)) {\n      next();\n    } else {\n      res.setHeader('WWW-Authenticate', 'Basic realm=&quot;tutorial&quot;');\n      next(createError(401));\n    }\n  }\n});\n</code></pre>\n<p>ライブラリにリクエスト値を渡す(<code>basicAuth(req);</code>)とユーザー名とパスワードをもつオブジェクトを返してくれます。あとは先程と同じで判定関数で認証登録済みかを確認するだけです。<br />\nライブラリを使うと少しだけ実装が楽になります。</p>\n</section>\n"}},head:function(){var e=l.authentication.menus;return{title:e.basic_auth.headerTitle,meta:[{hid:"description",name:"description",content:e.basic_auth.headerDescription}]}}},h=n(12),component=Object(h.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"wrapper"}},[t("article",{attrs:{id:"main"}},[t("section",[t("div",{domProps:{innerHTML:this._s(this.BasicAuthMd)}}),this._v(" "),t("article-timestamp",{attrs:{createdAt:"2019/04/20",updatedAt:"2019/04/20"}})],1)]),this._v(" "),t("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),t("table-content",{attrs:{articleMd:this.BasicAuthMd}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);