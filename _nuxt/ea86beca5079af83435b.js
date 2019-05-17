(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{246:function(e,n,t){var content=t(250);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(11).default)("40aafe93",content,!0,{sourceMap:!1})},247:function(e,n,t){"use strict";var r={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},o=t(9),component=Object(o.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("aside",{attrs:{id:"sidebar"}},e._l(e.menuSections,function(n){return t("section",{key:n.category},[t("div",{staticClass:"menu-overview"},[e._v(e._s(n.category))]),e._v(" "),e._l(n.menus,function(n){return t("div",{key:n.linkPath,staticClass:"menu-item"},[t("nuxt-link",{class:e.routePath==n.linkPath?"access-now":"",attrs:{to:n.linkPath}},[e._v("\n          "+e._s(n.title)+"\n        ")])],1)})],2)}),0)])},[],!1,null,null,null);n.a=component.exports},248:function(e,n){e.exports='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},249:function(e,n,t){"use strict";var r=t(246);t.n(r).a},250:function(e,n,t){(e.exports=t(10)(!1)).push([e.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa;display:flex;flex-direction:row}.timestamp-container{display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""])},251:function(e,n,t){"use strict";t(248);var r={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var e,n=/<h2 id="(.*)">(.*)<\/h2>/gm,t=[];null!=(e=n.exec(this.$props.articleMd));)e[1]&&e[2]&&t.push({id:e[1],title:e[2]});return t||[]}}},o=t(9),component=Object(o.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"table-content"}},[t("aside",{attrs:{id:"table-content-list"}},e._l(e.getInternalLinks,function(n){return t("div",{key:n.id,staticClass:"link-container"},[t("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+n.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[e._v("\n        "+e._s(n.title)+"\n      ")])],1)}),0)])},[],!1,null,null,null);n.a=component.exports},252:function(e,n,t){"use strict";var r={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},o=(t(249),t(9)),component=Object(o.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"article-timestamp"},[t("div",{staticClass:"timestamp-container"},[t("i",{staticClass:"far fa-clock"}),e._v(" "),t("p",[e._v(e._s(e.createdAt))])]),e._v(" "),t("div",{staticClass:"timestamp-container"},[t("i",{staticClass:"fas fa-clock"}),e._v(" "),t("p",[e._v(e._s(e.updatedAt))])])])},[],!1,null,null,null);n.a=component.exports},272:function(e,n){e.exports="<section><h1>ExpressとPassportを使ってForm認証を作成する</h1>\n<p><a href=\"https://irisash.github.io/express/form_auth/\">ExpressでForm認証を実装する</a>では認証を提供するライブラリなしでForm認証を実装しました。今回は<a href=\"http://www.passportjs.org/\">Passport</a>というライブラリを使ってのForm認証の実装を説明したいと思います。</p>\n<p>サンプルは<a href=\"https://github.com/irisAsh/express-passport-local-tutorial\">Github</a>においていますのでご参考にしてください。</p>\n<p>また、セッション管理に<code>express-session</code>、データベースに<code>mongoose</code>を使っています。それぞれの使い方が分からない方は以下の記事をご参照ください。</p>\n<ul>\n<li><a href=\"https://irisash.github.io/express/express_session/\">Expressでセッションを利用する</a></li>\n<li><a href=\"https://irisash.github.io/express/mongoose/\">Express入門（Mongooseの利用）</a></li>\n</ul>\n<h2 id=\"install\">パッケージのインストール</h2>\n<p>まずはPassportパッケージをインストールします。Passportではいくつかの種類の認証が扱えるようになっていて、それぞれの認証の用途に合わせてパッケージが用意されています。<br />\nForm認証の場合は<code>passport-local</code>というパッケージを使用します。また、ログイン状態を保持するためにセッション管理のパッケージ<code>express-session</code>もインストールしておきます。</p>\n<pre><code class=\"language-shell\">$ yarn run passport passport-local express-session\n</code></pre>\n<h2 id=\"setup\">認証処理を実装する</h2>\n<p>Passportでは認証時の動作をストラテジーと呼んでいて、実装ではこのストラテジーの設定をする必要があります。先程インストールした<code>passport-local</code>はユーザーIDとパスワード(emailなどに変更可)で認証するストラテジーの雛形を提供します。</p>\n<pre><code class=\"language-app.js.prettyprint\">// app.js\n\n// パッケージのインポート\nvar passport = require('passport')\nvar LocalStrategy = require('passport-local').Strategy;\nvar session = require('express-session');\n...\n\napp.use(express.static(path.join(__dirname, 'public')));\n\n// ここから追加\n// セッションの設定\napp.use(session({\n  secret: 'secret word',\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    maxAge: 60 * 1000\n  }\n}));\n// Passportの初期化\napp.use(passport.initialize());\n// Passportとセッション管理を連携\napp.use(passport.session());\n// セッションにユーザーIDを格納\npassport.serializeUser(function(user, done) {\n  done(null, user.id);\n});\n// 認証後セッションのユーザーIDからユーザー情報を取得する\npassport.deserializeUser(function(id, done) {\n  User.findById(id, function(err, user) {\n    done(err, user);\n  });\n});\n// ログイン用のストラテジー\npassport.use(new LocalStrategy(\n  function(username, password, done) {\n    // usernameで検索\n    User.findOne({ username: username }, function(err, user) {\n      if (err) { return done(err); }\n      // ユーザー登録なし\n      if (!user) {\n        return done(null, false, { message: 'usernameが登録されていません。' });\n      }\n      // パスワードを検証\n      if (user.password !== password) {\n        return done(null, false, { message: 'passwordが間違っています。' });\n      }\n      // 認証OKならユーザー情報を返す\n      return done(null, user);\n    });\n  }\n));\n// サインアップ用のストラテジー\npassport.use('local-signup', new LocalStrategy(\n  function(username, password, done) {\n    // usernameで検索\n    User.findOne({ username: username }, function(err, user) {\n      if (err) { return done(err); }\n      // ユーザー登録済み\n      if (!!user) {\n        return done(null, false, { message: '既に登録されているusernameです。' });\n      }\n      // ユーザー登録\n      User.create({\n        username,\n        password\n      })\n      .then(function(user) {\n        // 完了したらユーザー情報を返す\n        return done(null, user);\n      })\n      .catch(function(err) {\n        console.log(err);\n        return done(null, false, { message: '登録エラー' });\n      });\n    });\n  }\n));\n\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n</code></pre>\n<p>実装の内容は大体コードのコメントに記載している内容になります。少し補足の説明をしておきます。</p>\n<h3>ログイン状態の保存</h3>\n<pre><code class=\"language-js.prettyprint\">passport.serializeUser(function(user, done) {\n  done(null, user.id);\n});\n</code></pre>\n<p>ここではログイン/サインアップ成功後に返されるユーザーデータからセッションにユーザーIDを格納する処理が行われます。<br />\nセッションにユーザーIDを保存することでログイン状態を保持しています。これは<a href=\"https://irisash.github.io/express/form_auth/\">PassportなしでのForm認証</a>では自前で実装しました。<br />\nまた引数に<code>user.id</code>と指定していますが、<code>user</code>のみにしてデータ全てを格納することもできます。</p>\n<h3>ストラテジーの設定</h3>\n<pre><code class=\"language-js.prettyprint\">// ログイン用\npassport.use(new LocalStrategy( ... );\n\n// サインアップ用\npassport.use('local-signup', new LocalStrategy( ... ));\n</code></pre>\n<p><code>passport.use</code>でストラテジーの定義を行います。ログイン用とサインアップ用の２種類を定義していますが、サインアップの方では第１引数に<code>'local-signup'</code>と指定しています。これはストラテジーの識別名で、後述しますが実際にアクセスした時に実行する認証の処理をこの識別名を使って呼び出します。ログイン用のように名前を指定しない場合は<code>logal</code>が識別名になります。複数ストラテジーを用意する場合は第１引数に名前を指定するようにしてください。</p>\n<h2 id=\"authentication\">認証処理を指定する</h2>\n<p>さて、設定したストラテジーを使用する処理をルーティングに設定しましょう。</p>\n<pre><code class=\"language-routes/index.js.prettyprint\">// routes/index.js\n\n// サインアップ処理\nrouter.post('/signup', passport.authenticate('local-signup', \n  {\n    successRedirect: '/users',\n    failureRedirect: '/signup',\n    session: true\n  }\n));\n\n// ログイン処理\nrouter.post('/login', passport.authenticate('local', \n  {\n    successRedirect: '/users',\n    failureRedirect: '/login',\n    session: true\n  }\n));\n</code></pre>\n<p>ルーターのMETHOD関数のコールバックに<code>passport.authenticate</code>を指定すると、エンドポイントにアクセスした時に認証が実行されるようになります。<code>authenticate</code>の第１引数には使用するストラテジーの識別名を、第2引数には次のオプションを指定します。</p>\n<ul>\n<li><code>successRedirect</code>: 認証成功時のリダイレクト先。</li>\n<li><code>failureRedirect</code>: 認証失敗時のリダイレクト先。</li>\n<li><code>session</code>: セッション管理をするかどうか。基本はログイン状態を保持するので<code>true</code>。</li>\n</ul>\n<h2 id=\"confirm\">ログイン状態の確認</h2>\n<p>ログイン後はユーザーページにリダイレクトするようにしていますが、このページは当然ログインしている状態でないと表示されないようにしないといけません。<br />\nログイン状態の確認は<code>req.isAuthenticated</code>でできます。Passportを導入しているとリクエストオブジェクト<code>req</code>に<code>isAuthenticated</code>の関数が定義され、この関数が利用できるようになります。</p>\n<pre><code class=\"language-routes/users.js.prettyprint\">// routes/users.js\n\nrouter.get('/',\n  function(req, res, next) {\n    // ログイン状態を確認\n    if (req.isAuthenticated()) {\n      // OKなら次のコールバックの処理に進む\n      next();\n    } else {\n      // NGならHome画面へリダイレクト\n      res.redirect('/');\n    }\n  },\n  function(req, res, next) {\n    var session = req.session;\n    res.render('user', { title: 'User page' });\n  }\n);\n</code></pre>\n<h2 id=\"logout\">ログアウト</h2>\n<p>最後にログアウトです。任意の箇所でログアウトボタンを用意し<code>/logout</code>にPOSTリクエストするようにします。<br />\nログアウト自体の処理は<code>req.logout()</code>を呼び出すだけです。この<code>logout</code>関数もPassportを導入することで、リクエストオブジェクトに定義される関数の１つです。</p>\n<pre><code class=\"language-routes/index.js.prettyprint\">// routes/index.js\n\nrouter.post('/logout', function(req, res, next) {\n  req.logout();\n  res.redirect('/');\n});\n</code></pre>\n<h2 id=\"reference\">参考サイト</h2>\n<ul>\n<li><a href=\"https://scotch.io/tutorials/easy-node-authentication-setup-and-local#toc-handling-signupregistration\">Easy Node Authentication: Setup and Local ― Scotch.io</a></li>\n</ul>\n</section>\n"},295:function(e,n,t){"use strict";t.r(n);var r=t(252),o=t(247),c=t(251),l=t(73),d=t(272),h=t.n(d),m={components:{ArticleTimestamp:r.a,SideMenu:o.a,TableContent:c.a},data:function(){return{menuSections:l}},computed:{PassportLocalMd:function(){return h.a}},head:function(){var e=l.authentication.menus,article=this.$createArticleStructuredData({headline:e.passport_local.headerTitle,datePublished:"2019-05-17T16:00:00+09:00",dateModified:"2019-05-17T16:00:00+09:00"}),n=this.$createBreadcrumbListStructuredData({itemList:[{name:"足跡はもう見えない",url:"https://irisash.github.io/"},{name:"Express",url:"https://irisash.github.io/express/"},{name:e.passport_local.headerTitle,url:"https://irisash.github.io/express/passport_local/"}]});return{title:e.passport_local.headerTitle,meta:[{hid:"description",name:"description",content:e.passport_local.headerDescription}],__dangerouslyDisableSanitizers:["script"],script:[article,n]}}},f=t(9),component=Object(f.a)(m,function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("article",{attrs:{id:"main"}},[n("section",[n("div",{domProps:{innerHTML:this._s(this.PassportLocalMd)}}),this._v(" "),n("article-timestamp",{attrs:{createdAt:"2019/05/17",updatedAt:"2019/05/17"}})],1)]),this._v(" "),n("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),n("table-content",{attrs:{articleMd:this.PassportLocalMd}})],1)},[],!1,null,null,null);n.default=component.exports}}]);