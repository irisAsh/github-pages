(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{249:function(e){e.exports=JSON.parse('{"tutorial":{"category":"入門","categoryLabel":"MariaDB","categoryPath":"/mariadb/","iconClass":"fas fa-coins","menus":{"setup":{"linkPath":"/mariadb/setup/","ogpImage":"/images/mariadb/setup/ogp.png","title":"環境設定","subTitle":"MariaDB","menuIcon":"fas fa-coins","headerTitle":"MariaDBの環境設定","headerDescription":"MariaDBはMySQLから派生したオープンソースのリレーショナルデータベース管理システムです。LinuxOSでは標準のデータベースとして利用が広まっています。ここではMacOSでMariaDBを利用するための方法を説明します。"},"user_and_authority":{"linkPath":"/mariadb/user_and_authority/","ogpImage":"/images/mariadb/user_and_authority/ogp.png","title":"ユーザー管理と権限","subTitle":"CREATE USER / GRANT","menuIcon":"far fa-user-circle","headerTitle":"MariaDBのユーザー管理と権限","headerDescription":"MariaDBでのユーザー管理（ロール）と権限付与について説明していきます。環境構築後や入れ替え作業時くらいで頻繁に行う作業なので、忘れた時のメモとして活用ください。"},"databases":{"linkPath":"/mariadb/databases/","ogpImage":"/images/mariadb/databases/ogp.png","title":"データベースの作成","subTitle":"CREATE DATABASES","menuIcon":"fas fa-database","headerTitle":"MariaDBのデータベースの作成","headerDescription":"MariaDBでのデータベース作成について説明していきます。データベースの作成も頻繁に行う作業ではないのでメモとして活用ください。"}}}}')},303:function(e,n,t){"use strict";t.r(n);var r=t(234),o=t(235),l=t(249),c={components:{ArticlePage:r.a,CodeBox:o.a},data:function(){return{menuSections:l,categoryName:"tutorial",articleName:"setup",datePublished:new Date("2019/05/18 19:25:00 +0900"),dateModified:new Date("2020/01/03 01:00:00 +0900"),contents:[{id:"in-link-install",title:"インストール"},{id:"in-link-running",title:"起動"},{id:"in-link-reference-link",title:"参考サイト"}]}}},d=t(12),component=Object(d.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article-page",{attrs:{menuSections:e.menuSections,contents:e.contents,categoryName:e.categoryName,articleName:e.articleName,datePublished:e.datePublished,dateModified:e.dateModified}},[t("h1",[e._v("MariaDBの環境設定")]),e._v(" "),t("div",{staticClass:"abstract"},[t("p",[e._v("\n        MariaDBはMySQLから派生したオープンソースのリレーショナルデータベース管理システムです。\n        LinuxOSでは標準のデータベースとして利用が広まっています。\n      ")])]),e._v(" "),t("h2",{attrs:{id:"in-link-install"}},[e._v("インストール")]),e._v(" "),t("p",[e._v("macOS環境でのHomebrewを使ったインストール方法を説明します。")]),e._v(" "),t("p",[e._v("下記のコマンドを実行してください。")]),e._v(" "),t("code-box",[e._v('\n$ brew update\n$ brew install mariadb\nA "/etc/my.cnf" from another install may interfere with a Homebrew-built\nserver starting up correctly.\n\nMySQL is configured to only allow connections from localhost by default\n\nTo connect:\n    mysql -uroot\n\nTo have launchd start mariadb now and restart at login:\n  brew services start mariadb\nOr, if you don\'t want/need a background service you can just run:\n  mysql.server start\n==< Summary\n🍺  /usr/local/Cellar/mariadb/10.3.15: 658 files, 169.5MB\n    ')]),e._v(" "),t("p",[e._v("MariaDBのバージョンを表示してインストールされていることを確認します。")]),e._v(" "),t("code-box",[e._v("\n$ mysql --version\nmysql  Ver 15.1 Distrib 10.3.15-MariaDB, for osx10.14 (x86_64) using readline 5.1\n    ")]),e._v(" "),t("h2",{attrs:{id:"in-link-running"}},[e._v("起動")]),e._v(" "),t("p",[e._v("インストールが確認できたらMariaDBを起動しましょう。")]),e._v(" "),t("code-box",[e._v("\n$ mysql.server start\nStarting MariaDB\nSUCCESS!\n    ")]),e._v(" "),t("p",[e._v("PCの起動時に自動でMariaDBを起動させたい場合はHomebrewのサービスを使って設定できます。")]),e._v(" "),t("code-box",[e._v("\n$ brew services start mariadb\n    ")]),e._v(" "),t("p",[e._v("ルートユーザーでログインして起動を確認します。")]),e._v(" "),t("code-box",[e._v("\n$ mysql -uroot\nWelcome to the MariaDB monitor.  Commands end with ; or \\g.\nYour MariaDB connection id is 9\nServer version: 10.3.15-MariaDB Homebrew\n\nCopyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nMariaDB [(none)]>\n    ")]),e._v(" "),t("p",[e._v("コンソールから出るときは"),t("code",[e._v("quit")]),e._v("コマンドを入力します。")]),e._v(" "),t("h2",{attrs:{id:"in-link-reference-link"}},[e._v("参考サイト")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mariadb.com/kb/en/library/installing-mariadb-on-macos-using-homebrew/",target:"_blank"}},[e._v("Installing MariaDB Server on macOS Using Homebrew")])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);