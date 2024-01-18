

/*
className変数に初期のクラス名文字列が代入されます。
document.cookieからjawikimwclientpreferencesというクッキーを取得し、それを解析してcookie変数に格納します。
クッキーが存在する場合、クッキー内の設定に基づいてclassName内の一部のクラスを置き換えます。
最終的に、document.documentElement.classNameに更新されたclassNameが設定されます。
*/

(function () {
  var className = "client-js vector-feature-language-in-header-enabled " +
    "vector-feature-language-in-main-page-header-disabled " +
    "vector-feature-sticky-header-disabled " +
    "vector-feature-page-tools-pinned-disabled " +
    "vector-feature-toc-pinned-clientpref-1 " +
    "vector-feature-main-menu-pinned-disabled " +
    "vector-feature-limited-width-clientpref-1 " +
    "vector-feature-limited-width-content-enabled " +
    "vector-feature-zebra-design-enabled " +
    "vector-feature-custom-font-size-clientpref-0 " +
    "vector-feature-client-preferences-disabled " +
    "vector-feature-client-prefs-pinned-disabled " +
    "vector-toc-available";

  var cookie = document.cookie.match(/(?:^|; )jawikimwclientpreferences=([^;]+)/);

  if (cookie) {
    cookie[1].split('%2C').forEach(function (pref) {
      className = className.replace(
        new RegExp('(^| )' + pref.replace(/-clientpref-\w+$|[^\w-]+/g, '') +
          '-clientpref-\\w+( |$)'), '$1' + pref + '$2'
      );
    });
  }

  document.documentElement.className = className;
}());
