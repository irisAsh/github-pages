(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("2c1f7920",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";var r={name:"SideMenu",props:["menuSections"],computed:{routePath:function(){return this.$route.path}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("aside",{attrs:{id:"sidebar"}},t._l(t.menuSections,(function(e){return n("section",{key:e.category},[n("div",{staticClass:"menu-overview"},[t._v(t._s(e.category))]),t._v(" "),t._l(e.menus,(function(e){return n("div",{key:e.linkPath,staticClass:"menu-item"},[n("nuxt-link",{class:t.routePath==e.linkPath?"access-now":"",attrs:{to:e.linkPath}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}))],2)})),0)])}),[],!1,null,null,null);e.a=component.exports},239:function(t,e,n){"use strict";e.a='<section><h1>Express入門（環境設定）</h1>\n<p>ここでは簡易なTODOアプリを作りながらNodeJSのWebアプリケーションフレームワーク <a href="https://expressjs.com/">Express</a> の使い方を学んでいきます。<br />\n<a href="https://github.com/irisAsh/express-todo-tutorial/tree/master">こちら</a>に完成済みのサンプルを置いておきます。サンプルは後記事の<a href="https://irisash.github.io/express/editrouting/">Expressのルーティングの設定</a>、<a href="https://irisash.github.io/express/mongodb/">ExpressでMongoDBを使う</a>の内容を含んでいます。</p>\n<p><strong>環境</strong></p>\n<ul>\n<li>NodeJS v8.15.0</li>\n<li>Express v4.16.0</li>\n</ul>\n<h2 id="setting">環境設定</h2>\n<p>プロジェクト作成から起動するまでの設定手順を説明していきます。</p>\n<h2 id="express-generator">express-generator のインストール</h2>\n<p>下記のコマンドで<code>express-generator</code>をグローバルインストールします。</p>\n<pre><code class="language-sh.prettyprint">$ yarn install express-generator -g\n</code></pre>\n<h2 id="init-project">プロジェクトの作成</h2>\n<p><code>express-generator</code>を使用すると簡単にWebアプリケーションプロジェクトを最小構成で生成できます。任意のフォルダで次のコマンドを実行してください。</p>\n<pre><code class="language-sh.prettyprint">$ express express-todo-tutorial --view=pug --git\n</code></pre>\n<p>実行すると<code>express-todo-tutorial</code>というフォルダが作成されます。このフォルダの中にWebアプリケーションを動かす最低限のファイルが用意されています。<br />\n先程実行した<code>express</code>コマンドでいくつかのオプションを使っているので説明しておきます。また、オプションにはここで使っていないものもあります。<code>express -h</code>を実行するとオプションの一覧が見れるので、興味があるものを使ってみてください。</p>\n<p><strong>--view=pug</strong></p>\n<p>このオプションは使用するテンプレートエンジンを指定します。ここでは <a href="https://pugjs.org/api/getting-started.html">Pug</a>(旧Jade) と呼ばれるテンプレートを指定しています。テンプレートエンジンは他にも色々あるので自分の好みにあったものを指定してください。</p>\n<p><strong>--git</strong></p>\n<p>このオプションをつけると<code>.gitignore</code>を最初に作成してくれます。最低限のGit管理外設定をしてくれるので、Git管理をする場合は指定しましょう。</p>\n<p>作成されたプロジェクトフォルダの初期構成は以下のようになっています。</p>\n<pre><code>.\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n</code></pre>\n<p>Webアプリケーションを作成したことがある方は大体の内容はわかるかと思います。初学者の方は作りながら説明していきますので、大まかで良いのでどのファイルがどこにあるかを覚えておけば良いでしょう。</p>\n<h2 id="running">起動確認</h2>\n<p>初期作成されたプロジェクトを起動して動作確認をしておきましょう。下記のコマンドで起動確認できます。プロジェクトフォルダ内に移動した後に<code>yarn install</code>でパッケージを取得しています。最後のコマンドが実際にExpressを起動するコマンドになります。</p>\n<pre><code>$ cd express-todo-tutorial\n$ yarn install\n$ DEBUG=express-todo-tutorial:* yarn start\n</code></pre>\n<p>コマンド実行後にブラウザから<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてみましょう。以下のように画面が表示されれば起動完了です。<br />\nまた、起動を終了するときは<code>Ctrl+c</code>で終了することができます。</p>\n<img src="images/express/gettingstarted/run-start.png" alt="起動確認" title="起動確認" style="max-height:400px;">\n<p>このままでも開発を進めることはできますが、ファイルを編集する度にサーバー停止・<code>yarn stat</code>実行をするのは手間になるので、<a href="https://github.com/remy/nodemon">nodemon</a> をインストールしておきましょう。<code>nodemon</code>を使うとファイル更新の度に自動でサーバーを再起動してくれます。</p>\n<pre><code>$ yarn add nodemon --dev\n</code></pre>\n<p>また、起動コマンドもスクリプトに定義しておきましょう。<code>package.json</code>に以下のようにスクリプトを追加します。</p>\n<pre><code class="language-json.prettyprint"># package.json\n  ...\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node ./bin/www&quot;,\n    &quot;devstart&quot;: &quot;nodemon ./bin/www&quot;, # 追加\n    &quot;debugstart&quot;: &quot;DEBUG=express-todo-tutorial:* yarn run devstart&quot; # 追加\n  },\n</code></pre>\n<p>次のコマンドを実行して起動を確認しましょう。</p>\n<pre><code>$ yarn run debugstart\n</code></pre>\n<p><a href="http://localhost:3000">http://localhost:3000</a>で先程と同様に画面が表示されればOKです。<code>views/index.pug</code>を編集して<code>nodemon</code>の挙動を確認してみましょう。</p>\n<pre><code class="language-pug.prettyprint"># views/index.pug\n\nextends layout               \n                             \nblock content                \n  h1= title                  \n  p Welcome to #{title} !!!!!  # !!!!!を追加\n</code></pre>\n<p>サーバーが自動で再起動されて画面が変更されていることが確認できます。</p>\n</section>\n'},240:function(t,e,n){"use strict";var r=n(237);n.n(r).a},241:function(t,e,n){(e=n(28)(!1)).push([t.i,".article-timestamp{margin-top:1.5rem;padding-top:.5rem;border-top:1px solid #aaa;color:#aaa}.article-timestamp,.timestamp-container{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.timestamp-container{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-right:1rem}.timestamp-container i{margin-right:.4rem}",""]),t.exports=e},242:function(t,e,n){"use strict";var r={name:"ArticleTimestamp",props:["createdAt","updatedAt"]},o=(n(240),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-timestamp"},[n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"far fa-clock"}),t._v(" "),n("p",[t._v(t._s(t.createdAt))])]),t._v(" "),n("div",{staticClass:"timestamp-container"},[n("i",{staticClass:"fas fa-clock"}),t._v(" "),n("p",[t._v(t._s(t.updatedAt))])])])}),[],!1,null,null,null);e.a=component.exports},243:function(t,e,n){"use strict";n(239);var r={name:"TableContent",props:["articleMd"],computed:{getInternalLinks:function(){if(!this||!this.$props||!this.$props.articleMd)return[];for(var t,e=/<h2 id="(.*)">(.*)<\/h2>/gm,n=[];null!=(t=e.exec(this.$props.articleMd));)t[1]&&t[2]&&n.push({id:t[1],title:t[2]});return n||[]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"table-content"}},[n("aside",{attrs:{id:"table-content-list"}},t._l(t.getInternalLinks,(function(e){return n("div",{key:e.id,staticClass:"link-container"},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+e.id,expression:"'#' + internalLink.id"}],attrs:{to:""}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,n){"use strict";n.r(e);var r=n(242),o=n(238),c=n(243),d=n(86),l=n(239),h={components:{ArticleTimestamp:r.a,SideMenu:o.a,TableContent:c.a},data:function(){return{menuSections:d}},computed:{GettingStartedMd:function(){return l.a}},head:function(){var t=d.tutorial.menus;return{title:t.gettingstarted.headerTitle,meta:[{hid:"description",name:"description",content:t.gettingstarted.headerDescription}]}}},m=n(12),component=Object(m.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrapper"}},[e("article",{attrs:{id:"main"}},[e("section",[e("div",{domProps:{innerHTML:this._s(this.GettingStartedMd)}}),this._v(" "),e("article-timestamp",{attrs:{createdAt:"2019/03/09",updatedAt:"2019/03/31"}})],1)]),this._v(" "),e("side-menu",{attrs:{menuSections:this.menuSections}}),this._v(" "),e("table-content",{attrs:{articleMd:this.GettingStartedMd}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);