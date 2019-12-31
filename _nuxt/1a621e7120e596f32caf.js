(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{247:function(e){e.exports=JSON.parse('{"tutorial":{"category":"入門","categoryLabel":"Rails","categoryPath":"/rails/","iconClass":"fas fa-home","menus":{"setup":{"linkPath":"/rails/setup/","title":"環境設定","subTitle":"Gem / Bundle","menuIcon":"fas fa-home","headerTitle":"Ruby on Rails 5 の環境設定","headerDescription":"Ruby on Rails 5 の環境設定について説明します。ここでは、Rails new は使わずプロジェクト内でGemを管理してプロジェクトを作成します。また今後の記事では入門としてToDoアプリを作成しながら解説を進めていきます。"},"use_mariadb":{"linkPath":"/rails/use_mariadb/","ogpImage":"/images/rails/use_mariadb/ogp.png","title":"MariaDBを利用する","subTitle":"MariaDB","menuIcon":"fas fa-coins","headerTitle":"Ruby on RailsでMariaDBを利用する","headerDescription":"Railsプロジェクト作成直後にMariaDBを導入する手順を説明します。Rails初期設定ではSQLite3を利用するようになっていますが、プロジェクト規模が多くなる場合は関係性のあるデータベースを利用する方が良いです。"},"scaffold":{"linkPath":"/rails/scaffold/","title":"scaffoldを使う","subTitle":"rails generate scaffold","menuIcon":"fas fa-folder","headerTitle":"rails generate scaffoldを使ってページを追加する","headerDescription":"rails generate scaffoldを使って新規ページを追加してみます。scaffoldを使用するとコントローラー、ビュー、モデル等の必要とするファイルが全て自動生成されます。config/application.rbを編集して任意の単位で自動生成の拒否設定をすることもできます。"},"use_hamlit":{"linkPath":"/rails/use_hamlit/","ogpImage":"/images/rails/use_hamlit/ogp.png","title":"Hamlitを使う","subTitle":"hamlit-rails","menuIcon":"fas fa-crown","headerTitle":"HTMLテンプレートHamlitを使う","headerDescription":"Rails標準のHTMLテンプレートはERBが使われています。他にもHamlやSlimといったものがありますが、今回はHamlitというHTMLテンプレートを使う方法を説明します。HamlitはHamlの拡張でHamlをより高速にしたものです。記法はHamlと同様なのでHamlユーザーも利用しやすいでしょう。"},"add_page":{"linkPath":"/rails/add_page/","title":"画面作成の基本","subTitle":"rails generate controller","menuIcon":"far fa-newspaper","headerTitle":"Railsで新規画面を作成する基本な流れ","headerDescription":"Railsで新規画面を作成する基本的な流れを説明します。今回は自動生成を使います。rails generate controllerでビューとコントローラーの自動生成をし、適宜画面を編集し画面を作成していきます。"},"use_devise":{"linkPath":"/rails/use_devise/","title":"Deviseで認証を追加する","subTitle":"Devise","menuIcon":"fas fa-passport","headerTitle":"Deviseを利用して認証を追加する","headerDescription":"Deviseを使ってユーザー認証処理を追加して見ます。Deviseはサインアップやログインなど認証の処理を提供してくれる便利なGemです。Deviseは複雑で柔軟性はないですが多機能を提供しているので独自のカスタマイズがなければとても有効です。"}}},"support_tool":{"category":"開発支援ツール","categoryLabel":"Rails","categoryPath":"/rails/","iconClass":"fas fa-hands-helping","menus":{"use_rubocop":{"linkPath":"/rails/use_rubocop/","ogpImage":"/images/rails/use_rubocop/ogp.png","title":"RuboCopを使う","subTitle":"RuboCop","menuIcon":"fas fa-robot","headerTitle":"RuboCopを導入してコードを整理する","headerDescription":"RubocopはRubyコードのスタイルガイドに沿ってコード解析をしてくれるツールです。プロジェクトの開発で実装する人数が増えればソースコードの記述が統一されなくなっていきます。コード解析ツールを使えばスタイルガイドに順守していない場合に警告を表示して知らせてくれます。"}}}}')},309:function(e,t,l){"use strict";l.r(t);var n=l(248),o=l(249),r=l(247),m={components:{ArticlePage:n.a,CodeBox:o.a},data:function(){return{menuSections:r,categoryName:"tutorial",articleName:"use_hamlit",datePublished:new Date("2019/06/02 22:00:00 +0900"),dateModified:new Date("2020/01/01 01:00:00 +0900"),contents:[{id:"in-link-hamlit-rails",title:"hamlit-railsのインストール"},{id:"in-link-coding-haml",title:"Hamlit(Haml)でコードを書く"}]}}},d=l(12),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("article-page",{attrs:{menuSections:e.menuSections,contents:e.contents,categoryName:e.categoryName,articleName:e.articleName,datePublished:e.datePublished,dateModified:e.dateModified}},[l("h1",[e._v("HTMLテンプレートHamlitを使う")]),e._v(" "),l("div",{staticClass:"abstract"},[l("p",[e._v("\n        Rails標準のHTMLテンプレートはERBが使われています。\n        他にもHamlやSlimといったものがありますが、今回はHamlitというHTMLテンプレートを使う方法を説明します。\n        HamlitはHamlの拡張でHamlをより高速にしたものです。\n        記法はHamlと同様なのでHamlユーザーも利用しやすいでしょう。\n      ")]),e._v(" "),l("p",[e._v("\n        以下はHamlitの導入の内容になりますが、HamlやSlimもほぼ同様になると思います。詳しくは公式のドキュメントを参考ください。\n      ")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/haml/haml",target:"_blank"}},[e._v("Haml")])]),e._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/slim-template/slim",target:"_blank"}},[e._v("Slim")])])]),e._v(" "),l("p",[e._v("\n        また、実装サンプルは\n        "),l("a",{attrs:{href:"https://github.com/irisAsh/rails-todo-tutorial/tree/ver-use-hamlit",target:"_blank"}},[e._v("こちら")]),e._v("\n        です。\n      ")])]),e._v(" "),l("h2",{attrs:{id:"in-link-hamlit-rails"}},[e._v("hamlit-railsのインストール")]),e._v(" "),l("p",[l("a",{attrs:{href:"https://github.com/k0kubun/hamlit",target:"_blank"}},[e._v("Hamlit")]),e._v("\n      のGemを直接インストールしても良いですが、\n      "),l("code",[e._v("rails generate")]),e._v("でビューファイルを自動生成したり、\n      既存のERBファイルをHaml形式に変換したりしたいので"),l("code",[e._v("hamlit-rails")]),e._v("のGemをインストールするようにします。\n    ")]),e._v(" "),l("p",[e._v("Gemfileを編集して"),l("code",[e._v("bundle install")]),e._v("してください。")]),e._v(" "),l("code-box",{attrs:{fileName:"Gemfile"}},[e._v("\ngem 'hamlit-rails' # 追加\n    ")]),e._v(" "),l("p",[e._v("\n      インストールが完了したら、既にあるERBのファイルをHamlのファイルに変換します。\n      "),l("code",[e._v("bundle exec rake hamlit:erb2haml")]),e._v("を実行してください。\n    ")]),e._v(" "),l("code-box",[e._v("\n$ bundle exec rake hamlit:erb2haml\n    ")]),e._v(" "),l("p",[e._v("これでHamlへの変換が完了すれば良いですが、下記のエラーが表示されることがあります。")]),e._v(" "),l("code-box",[e._v("\n$ bundle exec rake hamlit:erb2haml\nhtml2haml gem is not part of the bundle.\n`rake hamlit:erb2haml` requires html2haml gem to convert erb files.\n\nPlease add html2haml gem temporarily and run `rake hamlit:erb2haml` again.\n(You can remove html2haml gem after the conversion.)\n    ")]),e._v(" "),l("p",[e._v("\n      エラーメッセージ通りに"),l("code",[e._v("html2haml")]),e._v("をインストールして再度変換作業をしましょう。\n      変換作業後は不要なので削除してしまっても構いません。\n    ")]),e._v(" "),l("code-box",{attrs:{fileName:"Gemfile"}},[e._v("\ngem 'hamlit-rails'\ngem 'html2haml' # 追加\n    ")]),e._v(" "),l("p"),e._v(" "),l("code-box",[e._v("\n$ bundle install\n$ bundle exec rake hamlit:erb2haml\n\nGenerating .haml for app/views/layouts/application.html.erb...\nGenerating .haml for app/views/layouts/mailer.html.erb...\nGenerating .haml for app/views/layouts/mailer.text.erb...\nGenerating .haml for app/views/todos/index.html.erb...\nGenerating .haml for app/views/todos/edit.html.erb...\nGenerating .haml for app/views/todos/show.html.erb...\nGenerating .haml for app/views/todos/_form.html.erb...\nGenerating .haml for app/views/todos/new.html.erb...\n\nDo you want to delete original .erb files? (y/n): y\nDeleting original .erb files...\napp/views/layouts/application.html.erb\napp/views/layouts/mailer.html.erb\napp/views/layouts/mailer.text.erb\napp/views/todos/index.html.erb\napp/views/todos/edit.html.erb\napp/views/todos/show.html.erb\napp/views/todos/_form.html.erb\napp/views/todos/new.html.erb\n\nFinished to convert erb files.\n    ")]),e._v(" "),l("p",[e._v("\n      これで変換作業が完了しました。\n      Railsを一度再起動してから画面を表示してみましょう。\n      画面が正常に表示されればOKです。\n    ")]),e._v(" "),l("h2",{attrs:{id:"in-link-coding-haml"}},[e._v("Hamlit(Haml)でコードを書く")]),e._v(" "),l("p",[e._v("\n      前回作ったTodo一覧の画面を見てみましょう。\n      "),l("code",[e._v("app/views/todos/index.html.haml")]),e._v("がTodo一覧画面のビューファイルです。\n    ")]),e._v(" "),l("code-box",{attrs:{fileName:"app/views/todos/index.html.haml"}},[e._v("\n%p#notice= notice\n%h1 Todos\n%table\n  %thead\n    %tr\n      %th Title\n      %th Description\n      %th Status\n      %th Estimateddate\n      %th{:colspan => \"3\"}\n  %tbody\n    - @todos.each do |todo|\n      %tr\n        %td= todo.title\n        %td= todo.description\n        %td= todo.status\n        %td= todo.estimatedDate\n        %td= link_to 'Show', todo\n        %td= link_to 'Edit', edit_todo_path(todo)\n        %td= link_to 'Destroy', todo, method: :delete, data: { confirm: 'Are you sure?' }\n%br/\n= link_to 'New Todo', new_todo_path\n    ")]),e._v(" "),l("p",[e._v("\n      Haml記法ではHTMLタグは"),l("code",[e._v("%タグ名")]),e._v("になります。\n      適当にタグをついて画面を更新してみてください。下記はpタグを追加している例です。\n    ")]),e._v(" "),l("code-box",{attrs:{fileName:"app/views/todos/index.html.haml"}},[e._v("\n%p#notice= notice\n%h1 Todos\n# 追加\n%p Todoの一覧です\n%table\n  %thead\n    %tr\n    ")]),e._v(" "),l("amp-img",{attrs:{src:"/images/rails/use_hamlit/index-page.png",alt:"一覧画面",title:"一覧画面",width:"640",height:"509",layout:"responsive"}}),e._v(" "),l("p",[e._v("\n      次のステップ：\n      "),l("nuxt-link",{attrs:{to:"/rails/add_page/"}},[e._v("画面作成の基本")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);