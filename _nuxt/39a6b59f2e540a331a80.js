(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{240:function(e){e.exports=JSON.parse('{"tutorial":{"category":"入門","categoryLabel":"Rails","categoryPath":"/rails/","iconClass":"fas fa-home","menus":{"setup":{"linkPath":"/rails/setup/","ogpImage":"/images/rails/setup/ogp.png","title":"環境設定","subTitle":"Gem / Bundle","menuIcon":"fas fa-home","headerTitle":"Ruby on Rails 5 の環境設定","headerDescription":"Ruby on Rails 5 の環境設定について説明します。ここでは、Rails new は使わずプロジェクト内でGemを管理してプロジェクトを作成します。また今後の記事では入門としてToDoアプリを作成しながら解説を進めていきます。"},"use_mariadb":{"linkPath":"/rails/use_mariadb/","ogpImage":"/images/rails/use_mariadb/ogp.png","title":"MariaDBを利用する","subTitle":"MariaDB","menuIcon":"fas fa-coins","headerTitle":"Ruby on RailsでMariaDBを利用する","headerDescription":"Railsプロジェクト作成直後にMariaDBを導入する手順を説明します。Rails初期設定ではSQLite3を利用するようになっていますが、プロジェクト規模が多くなる場合は関係性のあるデータベースを利用する方が良いです。"},"scaffold":{"linkPath":"/rails/scaffold/","ogpImage":"/images/rails/scaffold/ogp.png","title":"scaffoldを使う","subTitle":"rails generate scaffold","menuIcon":"fas fa-folder","headerTitle":"rails generate scaffoldを使ってページを追加する","headerDescription":"rails generate scaffoldを使って新規ページを追加してみます。scaffoldを使用するとコントローラー、ビュー、モデル等の必要とするファイルが全て自動生成されます。config/application.rbを編集して任意の単位で自動生成の拒否設定をすることもできます。"},"use_hamlit":{"linkPath":"/rails/use_hamlit/","ogpImage":"/images/rails/use_hamlit/ogp.png","title":"Hamlitを使う","subTitle":"hamlit-rails","menuIcon":"fas fa-crown","headerTitle":"HTMLテンプレートHamlitを使う","headerDescription":"Rails標準のHTMLテンプレートはERBが使われています。他にもHamlやSlimといったものがありますが、今回はHamlitというHTMLテンプレートを使う方法を説明します。HamlitはHamlの拡張でHamlをより高速にしたものです。記法はHamlと同様なのでHamlユーザーも利用しやすいでしょう。"},"add_page":{"linkPath":"/rails/add_page/","ogpImage":"/images/rails/add_page/ogp.png","title":"画面作成の基本","subTitle":"rails generate controller","menuIcon":"far fa-newspaper","headerTitle":"Railsで新規画面を作成する基本な流れ","headerDescription":"Railsで新規画面を作成する基本的な流れを説明します。今回は自動生成を使います。rails generate controllerでビューとコントローラーの自動生成をし、適宜画面を編集し画面を作成していきます。"},"use_devise":{"linkPath":"/rails/use_devise/","title":"Deviseで認証を追加する","subTitle":"Devise","menuIcon":"fas fa-passport","headerTitle":"Deviseを利用して認証を追加する","headerDescription":"Deviseを使ってユーザー認証処理を追加して見ます。Deviseはサインアップやログインなど認証の処理を提供してくれる便利なGemです。Deviseは複雑で柔軟性はないですが多機能を提供しているので独自のカスタマイズがなければとても有効です。"}}},"support_tool":{"category":"開発支援ツール","categoryLabel":"Rails","categoryPath":"/rails/","iconClass":"fas fa-hands-helping","menus":{"use_rubocop":{"linkPath":"/rails/use_rubocop/","ogpImage":"/images/rails/use_rubocop/ogp.png","title":"RuboCopを使う","subTitle":"RuboCop","menuIcon":"fas fa-robot","headerTitle":"RuboCopを導入してコードを整理する","headerDescription":"RubocopはRubyコードのスタイルガイドに沿ってコード解析をしてくれるツールです。プロジェクトの開発で実装する人数が増えればソースコードの記述が統一されなくなっていきます。コード解析ツールを使えばスタイルガイドに順守していない場合に警告を表示して知らせてくれます。"}}}}')},308:function(e,n,t){"use strict";t.r(n);var l=t(235),r=t(236),o=t(240),d={components:{ArticlePage:l.a,CodeBox:r.a},data:function(){return{menuSections:o,categoryName:"tutorial",articleName:"setup",datePublished:new Date("2019/06/02 22:00:00 +0900"),dateModified:new Date("2020/01/02 01:00:00 +0900"),contents:[{id:"in-link-rails-install",title:"Railsのインストール"},{id:"in-link-rails-project",title:"Railsプロジェクトの作成"},{id:"in-link-rails-starting",title:"Railsアプリの起動"},{id:"in-link-reference-links",title:"参考リンク"}]}}},_=t(12),component=Object(_.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article-page",{attrs:{menuSections:e.menuSections,contents:e.contents,categoryName:e.categoryName,articleName:e.articleName,datePublished:e.datePublished,dateModified:e.dateModified}},[t("h1",[e._v("Ruby on Rails 5 の環境設定")]),e._v(" "),t("div",{staticClass:"abstract"},[t("p",[e._v("\n        Ruby on Rails 5 の環境設定について説明します。\n        ここでは、Rails new は使わずプロジェクト内でGemを管理してプロジェクトを作成します。\n      ")]),e._v(" "),t("p",[e._v("\n        また今後の記事では入門としてToDoアプリを作成しながら解説を進めていきます。\n      ")]),e._v(" "),t("p",[e._v("\n        今回の実装のサンプルは\n        "),t("a",{attrs:{href:"https://github.com/irisAsh/rails-todo-tutorial/tree/ver-setup",target:"_blank"}},[e._v("こちら")]),e._v("\n        です。\n      ")])]),e._v(" "),t("h2",{attrs:{id:"in-link-rails-install"}},[e._v("Railsのインストール")]),e._v(" "),t("p",[e._v("\n      Rubyでは機能提供するライブラリのことをGemと呼びます。\n      WebアプリケーションフレームワークであるRailsもGemの１つになります。\n      Ruby環境が用意されていれば"),t("code",[e._v("gem install gem名")]),e._v("でGemをインストールできます。\n    ")]),e._v(" "),t("p",[e._v("\n      また複数のGemインストールをプロジェクト単位でまとめて実行するためにBundlerというGemを利用します。\n      Bundlerを利用すれば複数のGemインストールができるようになるだけでなくそれぞれのGemの依存関係も管理してくれるので非常に便利です。\n    ")]),e._v(" "),t("p",[e._v("下記でBundlerをインストールできます。")]),e._v(" "),t("code-box",[e._v("\n$ gem install bundler\n    ")]),e._v(" "),t("p",[e._v("\n      Bundlerの使い方ですが、まずはプロジェクトのルートディレクトリで、\n      "),t("code",[e._v("bundle init")]),e._v("を実行しGemfileを作成します。\n    ")]),e._v(" "),t("code-box",[e._v("\n$ mkdir rails-todo-tutorial\n$ cd rails-todo-tutorial\n$ bundle init\nWriting new Gemfile to /******/rails-todo-tutorial/Gemfile\n    ")]),e._v(" "),t("p",[e._v("\n      作成されたGemfileを開き、"),t("code",[e._v('gem "rails"')]),e._v("が書かれた行をコメントアウトします。\n    ")]),e._v(" "),t("code-box",{attrs:{fileName:"Gemfile"}},[e._v('\n# frozen_string_literal: true\n\nsource "https://rubygems.org"\n\ngit_source(:github) {|repo_name| "https://github.com/#{repo_name}" }\n\ngem "rails" # ここのコメントアウトを外す\n    ')]),e._v(" "),t("p",[e._v("\n      Gemfileに書かれたGemをBundlerでインストールします。\n      "),t("code",[e._v("--path プロジェクト配下のフォルダ")]),e._v("のオプションを追加することで指定したフォルダにGemをインストールするようにできます。\n      このようにすることでグローバルにインストールされてGemとプロジェクトでインストールされたGemが混在することを防ぐことができます。\n      また次回以降のインストールの際は`--path`オプションは不要です。\n    ")]),e._v(" "),t("code-box",[e._v("\n$ bundle install --path vendor/bundle\n    ")]),e._v(" "),t("p",[e._v("これでRailsのインストールは完了です。")]),e._v(" "),t("h2",{attrs:{id:"in-link-rails-project"}},[e._v("Railsプロジェクトの作成")]),e._v(" "),t("p",[e._v("\n      Railsのインストールが完了したので、あとはプロジェクトを作成するだけです。\n      下記を実行するとRailsプロジェクトに必要なファイルが自動生成されます。\n    ")]),e._v(" "),t("code-box",[e._v('\n$ bundle exec rails new . --skip-bundle --skip-test\n...\n    conflict  Gemfile\nOverwrite /****/todo-rails/rails-todo-tutorial/Gemfile? (enter "h" for help) [Ynaqdhm] Y\n...\n    ')]),e._v(" "),t("p",[e._v("\n      途中でGemfileを再生成するか尋ねられるので「Y」とタイプしてGemfileを上書きしてください。\n    ")]),e._v(" "),t("p",[t("code",[e._v("bundle exec")]),e._v("を指定するとBunderでインストールしたプロジェクト配下のGemを使うようになります。\n      "),t("code",[e._v("rails new .")]),e._v("でコマンドを実行しているディレクトリにファイルを自動生成します。\n    ")]),e._v(" "),t("p",[e._v("\n      残りのオプションについても説明しておきます。\n    ")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--skip-bundle")]),e._v(": プロジェクト生成後に`bundle install`を実行しないようにします。")]),e._v(" "),t("li",[t("code",[e._v("--skip-test")]),e._v(": テストファイルおよび付随するファイルを作成しないようにします。")])]),e._v(" "),t("p",[e._v("\n      通常はプロジェクトを作成した後、Gemfileを編集し利用するGemを指定してからBunderでインストールします。\n      今回は特に変更はしないのでそのまま`bundle install`してしまいます。\n    ")]),e._v(" "),t("code-box",[e._v("\n$ bundle install\n    ")]),e._v(" "),t("h2",{attrs:{id:"in-link-rails-starting"}},[e._v("Railsアプリの起動")]),e._v(" "),t("p",[e._v("\n      Railsアプリの起動します。\n      起動は"),t("code",[e._v("bin/rails s")]),e._v("を実行するだけです。\n      "),t("code",[e._v("bin/rails")]),e._v("でプロジェクトのRailsコマンドであることを指定しています。\n    ")]),e._v(" "),t("code-box",[e._v("\n$ bin/rails s\n=> Booting Puma\n=> Rails 5.2.3 application starting in development\n=> Run `rails server -h` for more startup options\nPuma starting in single mode...\n* Version 3.12.1 (ruby 2.6.3-p62), codename: Llamas in Pajamas\n* Min threads: 5, max threads: 5\n* Environment: development\n* Listening on tcp://localhost:3000\n    ")]),e._v(" "),t("amp-img",{attrs:{src:"/images/rails/setup/run-rails.png",alt:"起動画面",title:"起動画面",width:"640",height:"598",layout:"responsive"}}),e._v(" "),t("p",[e._v("\n      また、Railsの停止は"),t("code",[e._v("bin/raisl s")]),e._v("で起動したコンソールで「Ctrl + C」と打つとできます。\n    ")]),e._v(" "),t("p",[e._v("\n      次のステップ：\n      "),t("nuxt-link",{attrs:{to:"/rails/use_mariadb/"}},[e._v("MariaDBを利用する")])],1),e._v(" "),t("h2",{attrs:{id:"in-link-reference-links"}},[e._v("参考リンク")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://railsguides.jp/",target:"_blank"}},[e._v("Ruby on Rails ガイド")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://railstutorial.jp/chapters/beginning?version=5.1",target:"_blank"}},[e._v("Railsチュートリアル")])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);