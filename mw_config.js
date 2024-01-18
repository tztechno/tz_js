/*
window.RLQ（RequestLoadQueueの略）が存在しない場合は、新しい配列を作成します。このグローバル変数は、ページの読み込み時に非同期に実行される関数や処理をキューに追加するために使用されるものと考えられます。
mw.config.set()メソッドを使用して、MediaWikiの設定を更新します。これにより、さまざまな設定値が変更されます。
"wgHostname"や"wgBackendResponseTime"、"wgPageParseReport"など、さまざまな設定が指定されています。これらの設定は、ページのパース、レンダリング、およびパフォーマンスに関する情報を含んでいるようです。
"timingprofile"など、特にパフォーマンスに関連する情報が含まれており、各機能がコードの合計実行時間内でどれくらいの割合を占めているかを示しています。
*/

(RLQ = window.RLQ || []).push(function() {
  mw.config.set({
    "wgHostname": "mw2339",
    "wgBackendResponseTime": 137,
    "wgPageParseReport": {
      "limitreport": {
        "cputime": "0.398",
        "walltime": "0.585",
        "ppvisitednodes": {
          "value": 6551,
          "limit": 1000000
        },
        "postexpandincludesize": {
          "value": 140497,
          "limit": 2097152
        },
        "templateargumentsize": {
          "value": 10420,
          "limit": 2097152
        },
        "expansiondepth": {
          "value": 33,
          "limit": 100
        },
        "expensivefunctioncount": {
          "value": 40,
          "limit": 500
        },
        "unstrip-depth": {
          "value": 1,
          "limit": 20
        },
        "unstrip-size": {
          "value": 18874,
          "limit": 5000000
        },
        "entityaccesscount": {
          "value": 1,
          "limit": 400
        },
        "timingprofile": [
          "100.00%  436.512      1 -total",
          " 29.33%  128.031      1 Template:Infobox_プログラミング言語",
          " 28.80%  125.709      1 Template:Infobox",
          " 16.43%   71.706      2 Template:Reflist",
          " 13.54%   59.108      3 Template:Navbox",
          " 11.14%   48.632     27 Template:仮リンク",
          "  9.94%   43.375      1 Template:CProLang",
          "  8.35%   36.437      1 Template:Authority_control",
          "  8.20%   35.804      1 Template:雑多な内容の箇条書き",
          "  6.29%   27.453      1 Template:Ambox"
        ]
      },
      "scribunto": {
        "limitreport-timeusage": {
          "value": "0.132",
          "limit": "10.000"
        },
        "limitreport-memusage": {
          "value": 4654911,
          "limit": 52428800
        }
      },
      "cachereport": {
        "origin": "mw-web.codfw.main-869f97c749-jfz9v",
        "timestamp": "20240111090345",
        "ttl": 1781777,
        "transientcontent": true
      }
    }
  });
});
