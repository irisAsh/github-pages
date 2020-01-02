(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{247:function(n){n.exports=JSON.parse('{"tutorial":{"category":"入門","iconClass":"fas fa-coins","menus":{"setup":{"linkPath":"/mariadb/setup/","ogpImage":"/images/mariadb/setup/ogp.png","title":"環境設定","subTitle":"MariaDB","menuIcon":"fas fa-coins","headerTitle":"MariaDBの環境設定","headerDescription":"MariaDBはMySQLから派生したオープンソースのリレーショナルデータベース管理システムです。LinuxOSでは標準のデータベースとして利用が広まっています。ここではMacOSでMariaDBを利用するための方法を説明します。"},"user_and_authority":{"linkPath":"/mariadb/user_and_authority/","ogpImage":"/images/mariadb/user_and_authority/ogp.png","title":"ユーザー管理と権限","subTitle":"CREATE USER / GRANT","menuIcon":"far fa-user-circle","headerTitle":"MariaDBのユーザー管理と権限","headerDescription":"MariaDBでのユーザー管理（ロール）と権限付与について説明していきます。環境構築後や入れ替え作業時くらいで頻繁に行う作業なので、忘れた時のメモとして活用ください。"},"databases":{"linkPath":"/mariadb/databases/","ogpImage":"/images/mariadb/databases/ogp.png","title":"データベースの作成","subTitle":"CREATE DATABASES","menuIcon":"fas fa-database","headerTitle":"MariaDBのデータベースの作成","headerDescription":"MariaDBでのデータベース作成について説明していきます。データベースの作成も頻繁に行う作業ではないのでメモとして活用ください。"}}}}')},302:function(n,e,t){"use strict";t.r(e);var o=t(234),r=t(235),l=t(247),_={components:{ArticlePage:o.a,CodeBox:r.a},data:function(){return{menuSections:l,categoryName:"tutorial",articleName:"user_and_authority",datePublished:new Date("2019/05/19 19:01:00 +0900"),dateModified:new Date("2020/01/03 01:00:00 +0900"),contents:[{id:"in-link-select-user",title:"ユーザーの確認"},{id:"in-link-create-user",title:"ユーザーの作成"},{id:"in-link-drop-user",title:"ユーザーの削除"},{id:"in-link-replace-user",title:"ユーザーの変更"},{id:"in-link-login-user",title:"ユーザーを指定してログイン"},{id:"in-link-grant-user",title:"ユーザーの権限の確認"},{id:"in-link-add-grant",title:"権限の付与"},{id:"in-link-reference-link",title:"参考サイト"}]}}},d=t(12),component=Object(d.a)(_,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("article-page",{attrs:{menuSections:n.menuSections,contents:n.contents,categoryName:n.categoryName,articleName:n.articleName,datePublished:n.datePublished,dateModified:n.dateModified}},[t("h1",[n._v("MariaDB ユーザーと権限")]),n._v(" "),t("p",[n._v("\n      MariaDBでのユーザー管理（ロール）と権限付与について説明していきます。\n      環境構築後や入れ替え作業時くらいで頻繁に行う作業なので、忘れた時のメモとして活用ください。\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-select-user"}},[n._v("ユーザーの確認")]),n._v(" "),t("p",[n._v("管理されているユーザーは"),t("code",[n._v("mysql.user")]),n._v("に保存されています。")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> SELECT host,user,password FROM mysql.user;\n+-----------+------+----------+\n| host      | user | password |\n+-----------+------+----------+\n| localhost | root |          |\n| 127.0.0.1 | root |          |\n| ::1       | root |          |\n| localhost |      |          |\n+-----------+------+----------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-create-user"}},[n._v("ユーザーの作成")]),n._v(" "),t("p",[n._v("\n      ユーザーの作成コマンドです。\n      大抵の場合はパスワードを付与してユーザーを作成することでしょう。\n      パスワードは"),t("code",[n._v("IDENTIFIED BY 'パスワード'")]),n._v("で付与できます。\n      またDBに保存される場合はパスワードの値はハッシュ化されて登録されるようになっています。\n    ")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> CREATE USER test_user@localhost IDENTIFIED BY 'test';\n\nMariaDB [(none)]> SELECT host,user,password FROM mysql.user;\n+-----------+-----------+-------------------------------------------+\n| host      | user      | password                                  |\n+-----------+-----------+-------------------------------------------+\n| localhost | root      |                                           |\n| 127.0.0.1 | root      |                                           |\n| ::1       | root      |                                           |\n| localhost |           |                                           |\n| localhost | test_user | *94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29 |\n+-----------+-----------+-------------------------------------------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-drop-user"}},[n._v("ユーザーの削除")]),n._v(" "),t("p",[t("code",[n._v("DROP USER")]),n._v("または"),t("code",[n._v("DROP USER IF EXISTS")]),n._v("でユーザーを削除できます。\n      ユーザーが存在しない場合、"),t("code",[n._v("IF EXISTS")]),n._v("なしではコンソールにエラー表示され、\n      "),t("code",[n._v("IF EXISTS")]),n._v("ありではエラーはNoteに書き込まれます。\n      "),t("code",[n._v("SHOW WARNINGS")]),n._v("でNoteの内容を確認できます。\n    ")]),n._v(" "),t("p",[n._v("ユーザーが存在する場合。")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> DROP USER IF EXISTS test_user@localhost;\n\nMariaDB [(none)]> SELECT host,user,password FROM mysql.user;\n+-----------+------+----------+\n| host      | user | password |\n+-----------+------+----------+\n| localhost | root |          |\n| 127.0.0.1 | root |          |\n| ::1       | root |          |\n| localhost |      |          |\n+-----------+------+----------+\n    ")]),n._v(" "),t("p",[n._v("ユーザーが存在しなかった場合。")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> DROP USER IF EXISTS test_user;\n\nMariaDB [(none)]> SHOW WARNINGS;\n+-------+------+---------------------------------------------------+\n| Level | Code | Message                                           |\n+-------+------+---------------------------------------------------+\n| Note  | 1974 | Can't drop user 'test_user'@'%'; it doesn't exist |\n+-------+------+---------------------------------------------------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-replace-user"}},[n._v("ユーザーの変更")]),n._v(" "),t("p",[n._v("\n      ユーザー情報の変更は"),t("code",[n._v("ALTER USER")]),n._v("でできます。\n      下記はユーザーのパスワードを変更しています。\n    ")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> ALTER USER test_user@localhost IDENTIFIED BY 'new_password';\n\nMariaDB [(none)]> SELECT host,user,password FROM mysql.user;\n+-----------+-----------+-------------------------------------------+\n| host      | user      | password                                  |\n+-----------+-----------+-------------------------------------------+\n| localhost | root      |                                           |\n| 127.0.0.1 | root      |                                           |\n| ::1       | root      |                                           |\n| localhost |           |                                           |\n| localhost | test_user | *0913BF2E2CE20CE21BFB1961AF124D4920458E5F |\n+-----------+-----------+-------------------------------------------+\n    ")]),n._v(" "),t("p",[t("code",[n._v("CREATE OR REPLACE USER")]),n._v("でユーザーを作り直すこともできます。\n      ただし、下記の処理はパスワードを変更してユーザーを作り直していますが、\n      変更前の権限など情報は初期の状態（権限なし）となってしまいます。\n      "),t("code",[n._v("ALTER USER")]),n._v("であれば作り直しではないので、パスワードを変更されるだけでその他の情報はそのままです。\n    ")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> CREATE OR REPLACE USER test_user@localhost IDENTIFIED BY 'new_password';\n\nMariaDB [(none)]> SELECT host,user,password FROM mysql.user;\n+-----------+-----------+-------------------------------------------+\n| host      | user      | password                                  |\n+-----------+-----------+-------------------------------------------+\n| localhost | root      |                                           |\n| 127.0.0.1 | root      |                                           |\n| ::1       | root      |                                           |\n| localhost |           |                                           |\n| localhost | test_user | *0913BF2E2CE20CE21BFB1961AF124D4920458E5F |\n+-----------+-----------+-------------------------------------------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-login-user"}},[n._v("ユーザーを指定してログイン")]),n._v(" "),t("p",[n._v("\n      作成されたユーザーを指定してログインすることができます。\n      "),t("coed",[n._v("mysql -u ユーザー名")]),n._v("でログインができます。\n      またパスワードを設定する場合は"),t("code",[n._v("-p")]),n._v("オプションをつけます。\n      "),t("code",[n._v("-p")]),n._v("オプションをつけるとコマンド実行後にパスワードの確認が表示されます。\n      もしワンライナーでログインしたい場合は"),t("code",[n._v("-p")]),n._v("の後にスペースなしでパスワードを付与すれば確認なしでログインできます。\n    ")],1),n._v(" "),t("code-box",[n._v("\n$ mysql -u test_user -p\nEnter password:\n    ")]),n._v(" "),t("p"),n._v(" "),t("code-box",[n._v("\n$ mysql -u test_user -pパスワード\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-grant-user"}},[n._v("ユーザーの権限の確認")]),n._v(" "),t("p",[n._v("ユーザーの権限は"),t("code",[n._v("SHOW GRANTS FOR")]),n._v("で確認できます。")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> SHOW GRANTS FOR test_user@localhost;\n+------------------------------------------------------------------------------------------------------------------+\n| Grants for test_user@localhost                                                                                   |\n+------------------------------------------------------------------------------------------------------------------+\n| GRANT USAGE ON *.* TO 'test_user'@'localhost' IDENTIFIED BY PASSWORD '*0913BF2E2CE20CE21BFB1961AF124D4920458E5F' |\n+------------------------------------------------------------------------------------------------------------------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-add-grant"}},[n._v("権限の付与")]),n._v(" "),t("p",[n._v("\n      権限は"),t("code",[n._v("GRANT 権限の種類 ON DB名.* TO ユーザー@ホスト")]),n._v("で付与できます。\n      下記の処理は"),t("code",[n._v("test_user")]),n._v("に全権限を付与しています。\n      権限の種類は\n      "),t("a",{attrs:{href:"https://mariadb.com/kb/en/library/grant/#the-all-privileges-privilege",target:"_blank"}},[n._v("こちら")]),n._v("\n      を参照ください。\n    ")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> GRANT ALL PRIVILEGES ON *.* TO test_user@localhost;\n\nMariaDB [(none)]> SHOW GRANTS FOR test_user@localhost;\n+---------------------------------------------------------------------------------------------------------------------------+\n| Grants for test_user@localhost                                                                                            |\n+---------------------------------------------------------------------------------------------------------------------------+\n| GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'localhost' IDENTIFIED BY PASSWORD '*0913BF2E2CE20CE21BFB1961AF124D4920458E5F' |\n+---------------------------------------------------------------------------------------------------------------------------+\n    ")]),n._v(" "),t("p",[n._v("DBを限定して権限を与える場合。")]),n._v(" "),t("code-box",[n._v("\nMariaDB [(none)]> GRANT ALL PRIVILEGES ON dbname.* TO test_user@localhost;\n\nMariaDB [(none)]> SHOW GRANTS FOR test_user@localhost;\n+------------------------------------------------------------------------------------------------------------------+\n| Grants for test_user@localhost                                                                                   |\n+------------------------------------------------------------------------------------------------------------------+\n| GRANT USAGE ON *.* TO 'test_user'@'localhost' IDENTIFIED BY PASSWORD '*94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29' |\n| GRANT ALL PRIVILEGES ON `dbname`.* TO 'test_user'@'localhost'                                                    |\n+------------------------------------------------------------------------------------------------------------------+\n    ")]),n._v(" "),t("h2",{attrs:{id:"in-link-reference-link"}},[n._v("参考サイト")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mariadb.com/kb/en/library/account-management-sql-commands/",target:"_blank"}},[n._v("Account Management SQL Commands")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);