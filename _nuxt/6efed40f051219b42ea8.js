(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(n,e,t){"use strict";t.r(e);var r=t(248),v=t(249),_=t(85),o={components:{ArticlePage:r.a,CodeBox:v.a},data:function(){return{menuSections:_,categoryName:"authentication",articleName:"digest_auth",datePublished:new Date("2019/05/03 22:00:00 +0900"),dateModified:new Date("2019/12/31 01:00:00 +0900"),contents:[{id:"in-link-initialize-project",title:"実装準備"},{id:"in-link-digest",title:"Digest認証の実装"},{id:"in-link-response",title:"認証要求のレスポンスを返す"},{id:"in-link-authenticate",title:"Digestを算出し検証する"}<{id:"in-link-reference-links",title:"参考サイト"}]}}},d=t(12),component=Object(d.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("article-page",{attrs:{menuSections:n.menuSections,contents:n.contents,categoryName:n.categoryName,articleName:n.articleName,datePublished:n.datePublished,dateModified:n.dateModified}},[t("h1",[n._v("ExpressでDigest認証を実装する")]),n._v(" "),t("div",{staticClass:"abstract"},[t("p",[t("a",{attrs:{href:"https://irisash.github.io/express/basic_auth/",target:"_blank"}},[n._v("ExpressでBasic認証を実装する")]),n._v("\n        でBasic認証の仕組みをみました。\n        そこで分かるのは、送信される情報の値を取得できれば、Base64でデコードするだけでパスワードを解読できてしまうということです。\n      ")]),n._v(" "),t("p",[n._v("\n        そこでクライアントから送信するパスワードはハッシュ化して、またサーバー側でも登録しているパスワードをハッシュ化し、\n        それぞれの値を照合することで認可する方法が考案されました。これがDigest認証です。\n      ")]),n._v(" "),t("p",[n._v("\n        Digest認証のアルゴリズムや詳細については記事最後の参考サイトをご参考ください。\n        今回の実装もそちらのサイトを参考に作成しました。\n        実装済みのサンプルは\n        "),t("a",{attrs:{href:"https://github.com/irisAsh/express-digest-auth-tutorial",target:"_blank"}},[n._v("Github")]),n._v("\n        においていますのでご参考ください。\n      ")])]),n._v(" "),t("h2",{attrs:{id:"in-link-initialize-project"}},[n._v("実装準備")]),n._v(" "),t("p",[n._v("\n      プロジェクトのテンプレートを\n      "),t("a",{attrs:{href:"https://github.com/irisAsh/express-digest-auth-tutorial/tree/project-template",target:"_blank"}},[n._v("こちら")]),n._v("\n      に置いています。\n      認証を組み込むプロジェクトがない場合はこちらを活用ください。\n    ")]),n._v(" "),t("p",[n._v("実装目標はサンプルの"),t("code",[n._v("/tutorial")]),n._v("ページにDigest認証を設定とします。")]),n._v(" "),t("amp-img",{attrs:{src:"/images/express/digest_auth/root.png",alt:"ルート画面",title:"ルート画面",width:"640",height:"457",layout:"responsive"}}),n._v(" "),t("p",[n._v("まずは実装に利用するパッケージをインストールします。")]),n._v(" "),t("h3",[n._v("node-uuid")]),n._v(" "),t("p",[n._v("\n      WWW-Authenticateヘッダーを返す際に、ランダムな文字列(nonce)を付与する必要があります。\n      今回はUUIDを生成してその値をnonceの値として利用することにしました。UUID生成パッケージとして\n      "),t("a",{attrs:{href:"https://github.com/kelektiv/node-uuid",target:"_blank"}},[n._v("node-uuid")]),n._v("\n      を使用します。\n    ")]),n._v(" "),t("code-box",[n._v("\n$ yarn add uuid\n    ")]),n._v(" "),t("h3",[n._v("express-session")]),n._v(" "),t("p",[n._v("\n      照合値の算出時にランダムな文字列(nonce)やリクエスト回数(nc)をサーバー側で保持しておく必要があります。\n      それらの値はセッションで管理することにしました。\n      Expressでセッションを管理するには\n      "),t("a",{attrs:{href:"https://github.com/expressjs/session",target:"_blank"}},[n._v("express-session")]),n._v("\n      を使います。\n    ")]),n._v(" "),t("p",[t("code",[n._v("express-session")]),n._v("の使い方については\n      "),t("nuxt-link",{attrs:{to:"/express/express_session/"}},[n._v("Expressでセッションを利用する")]),n._v("\n      で説明しているのでご参考にしてください。\n    ")],1),n._v(" "),t("code-box",[n._v("\n$ yarn add express-session\n    ")]),n._v(" "),t("h3",[n._v("JavaScript-MD5")]),n._v(" "),t("p",[n._v("\n      ハッシュ化にはMD5アルゴリズムを使用します。\n      "),t("a",{attrs:{href:"https://github.com/blueimp/JavaScript-MD5",target:"_blank"}},[n._v("JavaScript-MD5")]),n._v("\n      はJavascriptでハッシュ化(MD5)するパッケージの１つです。\n    ")]),n._v(" "),t("code-box",[n._v("\n$ yarn add blueimp-md5\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-digest"}},[n._v("Digest認証の実装")]),n._v(" "),t("p",[n._v("先に実装全体を記載してしまいます。")]),n._v(" "),t("code-box",{attrs:{fileName:"app.js"}},[n._v("\nvar logger = require('morgan');\n// 追加\nvar session = require(\"express-session\");\nvar md5 = require('blueimp-md5');\nvar uuidv4 = require('uuid/v4');\n...\n\n// 追加\napp.use(session({\n  secret: \"secret word\",\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    maxAge: 60 * 1000\n  }\n}));\n\n// 登録ユーザー\nvar allowedUsers = {\n  'Express': 'good'\n};\n\n// authorization のパラメータを分解\nvar parseAuthorization = function(authorization) {\n  // 始めの'Digest 'を省き、', 'で分割\n  var arr = authorization.substr(7).split(', ');\n  var result = {};\n  arr.forEach(function(param) {\n    if (param.indexOf(\"=\") < 0) {\n      return;\n    }\n    var [key, value] = param.split(\"=\");\n    result[key] = value.replace(/\"/g, '');\n  });\n  return result;\n};\n\napp.use('/*', function (req, res, next) {\n  var session = req.session;\n  // リクエスト数をカウントしセッションに残す\n  if (!!session.nc) {\n    session.nc += 1;\n  } else {\n    session.nc = 1;\n  }\n  if (req.originalUrl === '/about' || req.originalUrl === '/') {\n    next();\n  } else {\n    var realm = 'tutorial';\n    var method = 'GET';\n    var qop = 'auth';\n    var judgement = false;\n    var authorization = req.get('authorization');\n    if (!!authorization && !!session.nonce && !!session.nc) {\n      var authParams = parseAuthorization(authorization);\n      // リクエスト数が一致しているかチェック\n      if (session.nc === parseInt(authParams.nc, 16)) {\n        // responseを算出\n        var a1 = authParams.username + ':' + realm + ':' + allowedUsers[authParams.username];\n        var a2 = method + ':' + authParams.uri;\n        var a1_md5 = md5(a1);\n        var a2_md5 = md5(a2);\n        var code = a1_md5 + ':' + session.nonce + ':' + authParams.nc + ':' + authParams.cnonce + ':' + qop + ':' + a2_md5;\n        var code_md5 = md5(code);\n        judgement = code_md5 === authParams.response;\n      }\n    }\n    if (judgement) {\n      // 認証OK\n      next();\n    } else {\n      // 認証NG\n      session.nonce = uuidv4();\n      session.nc = 0;\n      res.set({\n        'WWW-Authenticate': 'Digest realm=\"' + realm + '\", nonce=\"' + session.nonce + '\", algorithm=MD5, qop=\"' + qop + '\"'\n      });\n      next(createError(401));\n    }\n  }\n});\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-response"}},[n._v("認証要求のレスポンスを返す")]),n._v(" "),t("p",[n._v("\n      クライアントが保護のかかったページに訪れた時にWWW-Authenticateヘッダーを返す必要があります。\n      また以下の値を付与する必要があります。\n    ")]),n._v(" "),t("table",[t("tr",[t("th",[n._v("key")]),n._v(" "),t("th",[n._v("value")])]),n._v(" "),t("tr",[t("td",[n._v("realm")]),n._v(" "),t("td",[n._v("任意の保護領域名")])]),n._v(" "),t("tr",[t("td",[n._v("nonce")]),n._v(" "),t("td",[n._v("ランダムな文字列")])]),n._v(" "),t("tr",[t("td",[n._v("algorithm")]),n._v(" "),t("td",[n._v("MD5, MD5-sess, SHA-256, SHA-256-sess")])]),n._v(" "),t("tr",[t("td",[n._v("qop")]),n._v(" "),t("td",[n._v('"auth", "auth-int"')])])]),n._v(" "),t("p",[n._v("\n      nonce の値は準備でインストールした node-uuid で生成した値を指定します。\n    ")]),n._v(" "),t("p",[n._v("\n      また、algorithm には MD5 を指定します。\n       SHA-256 の方がセキュリティが強固になりますが、ブラウザがまだ対応していなかったため今回は MD5 にしました。\n    ")]),n._v(" "),t("p",[n._v("qop は auth の場合はリクエストのメソッドから、auth-int の場合はリクエストボディを含めて照合します。")]),n._v(" "),t("p",[n._v("実装例では下記のようなヘッダーを返すようになっています。")]),n._v(" "),t("code-box",[n._v('\nWWW-Authenticate: Digest\n  realm="tutorial",\n  nonce="uuidv4で生成した文字列",\n  algorithm=MD5,\n  qop="auth"\n    ')]),n._v(" "),t("p",[n._v("\n      クライアントへの返答時に、nonce の値はセッションに保存します。\n      nonce はクライアントから同じ値が送信されますが、検証にはサーバーで発行した値を使うため保存しておく必要があります。\n    ")]),n._v(" "),t("p",[n._v("\n      また、クライアントのリクエスト回数(nc)もセッションに保存しておきます。\n      クライアントからパスワードが送信される時に16進数のリクエスト回数も同時に付与されてきます。\n      検証時にこのリクエスト回数も一致しているか確認します。\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-authenticate"}},[n._v("Digestを算出し検証する")]),n._v(" "),t("p",[n._v("クライアントからユーザー名とパスワードが送信されるので、送信される値から Digest の値を算出します。")]),n._v(" "),t("amp-img",{attrs:{src:"/images/express/digest_auth/popup.png",alt:"認証画面",title:"認証画面",width:"640",height:"437",layout:"responsive"}}),n._v(" "),t("p",[n._v("クライアントから送信される値は次のようになります。")]),n._v(" "),t("table",[t("tr",[t("th",[n._v("key")]),n._v(" "),t("th",[n._v("value")])]),n._v(" "),t("tr",[t("td",[n._v("realm")]),n._v(" "),t("td",[n._v("返答した値と同値")])]),n._v(" "),t("tr",[t("td",[n._v("nonce")]),n._v(" "),t("td",[n._v("返答した値と同値")])]),n._v(" "),t("tr",[t("td",[n._v("algorithm")]),n._v(" "),t("td",[n._v("返答した値と同値")])]),n._v(" "),t("tr",[t("td",[n._v("qop")]),n._v(" "),t("td",[n._v("返答した値と同値")])]),n._v(" "),t("tr",[t("td",[n._v("username")]),n._v(" "),t("td",[n._v("ユーザー名")])]),n._v(" "),t("tr",[t("td",[n._v("uri")]),n._v(" "),t("td",[n._v("アクセスしたURI")])]),n._v(" "),t("tr",[t("td",[n._v("nc")]),n._v(" "),t("td",[n._v("16進数のリクエスト回数(8桁になるようゼロサプライされています)")])]),n._v(" "),t("tr",[t("td",[n._v("cnonce")]),n._v(" "),t("td",[n._v("ランダムな文字列")])]),n._v(" "),t("tr",[t("td",[n._v("response")]),n._v(" "),t("td",[n._v("Digest値(この値をサーバ側でも算出して照合します)")])])]),n._v(" "),t("p",[n._v("実装例では下記のような送信がされます。")]),n._v(" "),t("code-box",[n._v('\nWWW-Authenticate: Digest\n  realm="tutorial",\n  nonce="uuidv4で生成した文字列",\n  algorithm=MD5,\n  qop="auth",\n  username="Express",\n  uri="/tutorial",\n  nc="00000001",\n  cnonce="ランダムな文字列",\n  response="Digest値"\n    ')]),n._v(" "),t("p",[n._v("\n      上記のリクエストの値は１列の文字列になっているので"),t("code",[n._v("parseAuthorization")]),n._v("で各値を分解しています。\n      algorithm 以外の値はダブルクォートで囲まれているので注意してください。\n    ")]),n._v(" "),t("p",[n._v("\n      分解した値の nc はリクエスト数は16進数なので"),t("code",[n._v("parseInt(ncの値, 16)")]),n._v("で10進数に変換してからセッションで管理しているリクエスト回数が一致しているか確認しておきます。\n      不一致の場合は再度認証要求を行いサーバーで保存しているリクエスト回数は0に初期化します。\n    ")]),n._v(" "),t("p",[n._v("さて、残りはDigest値の算出です。流れは下記の通りです。")]),n._v(" "),t("ul",[t("li",[n._v("A1 = 'username:realm:password'")]),n._v(" "),t("li",[n._v("A2 = 'method:uri' (method はHTTPメソッド、ここではGET)")]),n._v(" "),t("li",[n._v("Digest値 = 'A1のMD5ハッシュ化:nonce:nc:cnonce:A2のMD5ハッシュ化' のMD5ハッシュ化")])]),n._v(" "),t("p",[n._v("算出したDigest値とresponseの値が一致すれば認証OKです。")]),n._v(" "),t("p",[n._v("\n      実際に"),t("code",[n._v("/tutorial")]),n._v("にアクセスして認証手続きが完了すれば成功です。\n      Digest認証の実装は以上となります。\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-reference-links"}},[n._v("参考サイト")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tools.ietf.org/html/rfc7616",target:"_blank"}},[n._v("RFC 7616 - HTTP Digest Access Authentication")])]),n._v(" "),t("li",[t("a",{attrs:{href:"http://x68000.q-e-d.net/~68user/net/http-auth-2.html",target:"_blank"}},[n._v("HTTP クライアントを作ってみよう(6) - Digest 認証編 -")])]),n._v(" "),t("li",[t("a",{attrs:{href:"http://unarist.hatenablog.com/entry/2015/09/25/013142",target:"_blank"}},[n._v("Digest認証のパラメータを眺めた - うならぼ")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);