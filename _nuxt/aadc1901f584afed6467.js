(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(e,t,n){"use strict";n.r(t);var _=n(248),v=n(249),r=n(85),l={components:{ArticlePage:_.a,CodeBox:v.a},data:function(){return{menuSections:r,categoryName:"routing_view",articleName:"express_session",datePublished:new Date("2019/04/14 22:00:00 +0900"),dateModified:new Date("2020/01/01 01:00:00 +0900"),contents:[{id:"in-link-less-overview",title:"Lessについて"},{id:"in-link-less-generate",title:"プロジェクト生成時にLessを導入する"},{id:"in-link-less-including",title:"開発途中でLessを導入する"},{id:"in-link-sass-overview",title:"Sass/Scssについて"},{id:"in-link-sass-generate",title:"プロジェクト生成時にSassを導入する"},{id:"in-link-change-scss",title:"SassをScssに切り替える"},{id:"in-link-sass-including",title:"開発途中でSassを導入する"},{id:"in-link-stylus-overview",title:"Stylusについて"},{id:"in-link-stylus-generate",title:"プロジェクト生成時にStylusを導入する"},{id:"in-link-stylus-including",title:"開発途中でStylusを導入する"}]}}},d=n(12),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article-page",{attrs:{menuSections:e.menuSections,contents:e.contents,categoryName:e.categoryName,articleName:e.articleName,datePublished:e.datePublished,dateModified:e.dateModified}},[n("h1",[e._v("ExpressでCSSプリプロセッサを利用する")]),e._v(" "),n("div",{staticClass:"abstract"},[n("p",[e._v("\n        ここではExpressでCSSプリプロセッサを導入します。\n        CSSプリプロセッサはCSSメタ言語とも呼ばれCSSを記述するための言語です。\n        このメタ言語を使うことによってどういったメリットがあるかと言いますと、\n        CSSコード内で変数を定義して利用したり、少ないコードで記述できたり、構造的にコードを記述できたりします。\n      ")]),e._v(" "),n("p",[e._v("CSSプリプロセッサにはいくつか種類がありますが、今回はLess, Sass/Scss, Stylusを説明します。")])]),e._v(" "),n("h2",{attrs:{id:"in-link-less-overview"}},[e._v("Lessについて")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://lesscss.org/",target:"_blank"}},[e._v("Less")]),e._v("\n      はLeaner CSSの略で、Javascript製のCSSメタ言語です。\n      現在のところ他のメタ言語と比べて\n      "),n("a",{attrs:{href:"https://github.com/less/less.js",target:"_blank"}},[e._v("Github")]),e._v("\n      は一番多くなっています。\n      しかし、現在は利用は減少傾向にありSassの利用が多くなっています。\n    ")]),e._v(" "),n("p",[e._v("\n      Lessの記法はCSS記法にかなり近いので、既存のCSSコードをLessコードとして利用することができます。\n      また、Lessファイルは拡張子"),n("code",[e._v(".less")]),e._v("です。\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-less-generate"}},[e._v("プロジェクト生成時にLessを導入する")]),e._v(" "),n("p",[n("code",[e._v("express-generator")]),e._v("でプロジェクトを作成する際に、\n      Lessを利用するように設定することができます。\n    ")]),e._v(" "),n("p",[e._v("下記のようにプロジェクトを作成します。")]),e._v(" "),n("code-box",[e._v("\n$ express --css=less プロジェクト名\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-less-including"}},[e._v("開発途中でLessを導入する")]),e._v(" "),n("p",[e._v("\n      既に生成済みのプロジェクトにLessを導入してみます。\n      手元に既に作成済みのプロジェクトがない場合は\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/initial-template",target:"_blank"}},[e._v("こちら")]),e._v("\n      にサンプルプロジェクトがあるので利用してください。\n    ")]),e._v(" "),n("p",[e._v("\n      先ずはExpressでLessファイルをコンパイルするためのモジュール\n      "),n("a",{attrs:{href:"https://github.com/emberfeather/less.js-middleware",target:"_blank"}},[e._v("less-middleware")]),e._v("\n      をインストールします。\n    ")]),e._v(" "),n("code-box",[e._v("\n$ yarn add less-middleware\n    ")]),e._v(" "),n("p",[n("code",[e._v("less-middleware")]),e._v("をコードに組み込みます。\n      下記のように"),n("code",[e._v("app.js")]),e._v("を編集してみましょう。\n    ")]),e._v(" "),n("code-box",{attrs:{fileName:"app.js"}},[e._v("\n省略\n...\nvar logger = require('morgan');\nvar lessMiddleware = require('less-middleware'); // 追加\n...\n\n...\napp.use(lessMiddleware(path.join(__dirname, 'public'))); // 追加\napp.use(express.static(path.join(__dirname, 'public')));\n    ")]),e._v(" "),n("p",[e._v("\n      後は"),n("code",[e._v("public/stylesheets/")]),e._v("以下のCSSファイルを"),n("code",[e._v(".less")]),e._v("に\n      拡張子を変えて適宜Lessの記法に変更するだけです。\n      Less導入後のサンプルは\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/tutorial-ver-less",target:"_blank"}},[e._v("こちら")]),e._v("\n      です。\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-sass-overview"}},[e._v("Sass/Scssについて")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://sass-lang.com/",target:"_blank"}},[e._v("Sass")]),e._v("\n      はSyntactically Awesome Style Sheetsの略で、Ruby製のCSSメタ言語です。\n      元々はRubyでの実装ですが、現在は他言語の実装も用意されています。\n      現在Sassは最も多く利用されているようで、Sassを利用したCSSフレームワークもあります。\n    ")]),e._v(" "),n("p",[e._v("\n      Expressで利用する場合は\n      "),n("a",{attrs:{href:"https://github.com/sass/node-sass",target:"_blank"}},[e._v("node-sass")]),e._v("\n      （実際にはその拡張\n      "),n("a",{attrs:{href:"https://github.com/sass/node-sass-middleware",target:"_blank"}},[e._v("node-sass-middleware")]),e._v("\n      ）を使って組み込むことができます。\n    ")]),e._v(" "),n("p",[e._v("\n      またScssはSassの別構文でCSS記法に近い形で記述することができます。\n      Sassの場合は"),n("code",[e._v(".sass")]),e._v("の拡張子を、Scssの場合は"),n("code",[e._v(".scss")]),e._v("の拡張子を使います。\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-sass-generate"}},[e._v("プロジェクト生成時にSassを導入する")]),e._v(" "),n("p",[e._v("\n      Less同様で"),n("code",[e._v("express-generator")]),e._v("でプロジェクトを作成する際に、\n      Sassを利用するように設定することができます。\n    ")]),e._v(" "),n("p",[e._v("下記のようにプロジェクトを作成します。")]),e._v(" "),n("code-box",[e._v("\n$ express --css=sass プロジェクト名\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-change-scss"}},[e._v("SassをScssに切り替える")]),e._v(" "),n("p",[e._v("Scss記法を使うためには、プロジェクト生成でSassを指定した後に設定をScss用に変更する必要があります。")]),e._v(" "),n("h3",[e._v("ファイル拡張子の変更する")]),e._v(" "),n("p",[e._v("ファイルの拡張子は"),n("code",[e._v(".scss")]),e._v("に変えてください。")]),e._v(" "),n("code-box",[e._v("\n$ mv public/stylesheets/style.sass public/stylesheets/style.scss\n    ")]),e._v(" "),n("h3",[e._v("構文設定を変更する")]),e._v(" "),n("p",[n("code",[e._v("node-sass-middleware")]),e._v("の構文設定を変更します。\n      デフォルトでは設定は"),n("code",[e._v("app.js")]),e._v("に記述されています。\n    ")]),e._v(" "),n("p",[n("code",[e._v("node-saas-middleware")]),e._v("の\n      "),n("code",[e._v("indentedSyntax")]),e._v("を\n      "),n("code",[e._v("true")]),e._v("にするとSass、\n      "),n("code",[e._v("false")]),e._v("にするとScssに\n      設定が変更できます。\n    ")]),e._v(" "),n("code-box",{attrs:{fileName:"app.js"}},[e._v("\n省略\n...\napp.use(cookieParser());\napp.use(sassMiddleware({\n  src: path.join(__dirname, 'public'),\n  dest: path.join(__dirname, 'public'),\n  indentedSyntax: false, // falseにするとScssになります\n  sourceMap: true\n}));\n    ")]),e._v(" "),n("p",[e._v("後はファイルのSass記法をScss記法へ書き換えるだけです。")]),e._v(" "),n("h2",{attrs:{id:"in-link-sass-including"}},[e._v("開発途中でSassを導入する")]),e._v(" "),n("p",[e._v("\n      次に生成済みのプロジェクトにSassを導入します。\n      先程と同様既存プロジェクトがない場合はサンプルプロジェクトは\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/initial-template",target:"_blank"}},[e._v("こちら")]),e._v("\n      をご利用ください。\n    ")]),e._v(" "),n("p",[e._v("\n      先程説明した通りExpressでSassを利用するには\n      "),n("a",{attrs:{href:"https://github.com/sass/node-sass-middleware",target:"_blank"}},[e._v("node-sass-middleware")]),e._v("\n      を利用します。\n    ")]),e._v(" "),n("code-box",[e._v("\n$ yarn add node-sass-middleware\n    ")]),e._v(" "),n("p",[n("code",[e._v("app.js")]),e._v("Sassのコンパイル実装を追加します。")]),e._v(" "),n("code-box",{attrs:{fileName:"app.js"}},[e._v("\n省略\n...\nvar logger = require('morgan');\nvar sassMiddleware = require('node-sass-middleware'); // 追加\n...\n\n...\n// 追加\napp.use(sassMiddleware({\n  src: path.join(__dirname, 'public'),\n  dest: path.join(__dirname, 'public'),\n  indentedSyntax: true,\n  sourceMap: true\n}));\napp.use(express.static(path.join(__dirname, 'public')));\n    ")]),e._v(" "),n("p",[n("code",[e._v("public/stylesheets/")]),e._v("以下のCSSファイルの拡張子を"),n("code",[e._v(".sass")]),e._v("に変更してください。\n      Scss利用の場合は先程の通り"),n("code",[e._v("indentedSyntax")]),e._v("を"),n("code",[e._v("false")]),e._v("にし拡張子を"),n("code",[e._v(".scss")]),e._v("にしてください。\n    ")]),e._v(" "),n("p",[e._v("\n      Sass導入後のサンプルは\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/tutorial-ver-sass",target:"_blank"}},[e._v("こちら")]),e._v("\n      です。\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-stylus-overview"}},[e._v("Stylusについて")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank"}},[e._v("Stylus")]),e._v("\n      はNode.js環境で利用できるCSSメタ言語です。\n      LessやSassより後に作られた言語で、両方の記法を使うことができ、拡張機能も他に比べて豊富です。\n      またJavascriptコードのような記法で変数定義や制御構文を記述することが出来ます。\n    ")]),e._v(" "),n("p",[e._v("\n      ただ現在のところは他の言語に比べて\n      "),n("a",{attrs:{href:"https://github.com/stylus/stylus/",target:"_blank"}},[e._v("github")]),e._v("\n      のスターが少なく、参考記事なども少ないです。\n    ")]),n("p",[e._v("\n      ファイルの拡張子は"),n("code",[e._v(".styl")]),e._v("を使います。\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-stylus-generate"}},[e._v("プロジェクト生成時にStylusを導入する")]),e._v(" "),n("p",[e._v("\n      他同様で"),n("code",[e._v("express-generator")]),e._v("でプロジェクトを作成する際に設定することができます。\n    ")]),e._v(" "),n("p",[e._v("下記のようにプロジェクトを作成します。")]),e._v(" "),n("code-box",[e._v("\n$ express --css=stylus プロジェクト名\n    ")]),e._v(" "),n("h2",{attrs:{id:"in-link-stylus-including"}},[e._v("開発途中でStylusを導入する")]),e._v(" "),n("p",[e._v("\n      さて生成済みのプロジェクトにStylusを導入します。\n      サンプルプロジェクトは\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/initial-template",target:"_blank"}},[e._v("こちら")]),e._v("\n      をご利用ください。\n    ")]),e._v(" "),n("p",[e._v("\n      StylusはNode.js環境で利用できるので、他のようにミドルウェアではなく\n      "),n("a",{attrs:{href:"https://github.com/stylus/stylus/",target:"_blank"}},[e._v("stylus")]),e._v("\n      そのままのインストールになります。\n    ")]),e._v(" "),n("code-box",[e._v("\n$ yarn add stylus\n    ")]),e._v(" "),n("p",[e._v("Stylusコンパルのために"),n("code",[e._v("app.js")]),e._v("を編集しましょう。")]),e._v(" "),n("code-box",{attrs:{fileName:"app.js"}},[e._v("\n省略\n...\nvar logger = require('morgan');\nvar stylus = require('stylus'); // 追加\n...\n\n...\napp.use(stylus.middleware(path.join(__dirname, 'public'))); // 追加\napp.use(express.static(path.join(__dirname, 'public')));\n    ")]),e._v(" "),n("p",[e._v("\n      最後に"),n("code",[e._v("public/stylesheets/")]),e._v("以下のCSSファイルを"),n("code",[e._v(".styl")]),e._v("に拡張子を変更してください。\n    ")]),e._v(" "),n("p",[e._v("\n      Stylus導入後のサンプルは\n      "),n("a",{attrs:{href:"https://github.com/irisAsh/express-todo-tutorial/tree/tutorial-ver-stylus",target:"_blank"}},[e._v("こちら")]),e._v("\n      です。\n    ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);