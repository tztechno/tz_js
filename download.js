//https://github.com/code4fukui/tidelevel/blob/main/download.js
//外部モジュールから DateTime、Day、および TimeZone クラスをインポートします。
//また、ローカル モジュール saveDay.js から saveDay 関数をインポートします。

import { DateTime, Day, TimeZone } from "https://js.sabae.cc/DateTime.js";
import { saveDay } from "./saveDay.js";


const today = new Day(TimeZone.JST);
const yesterday = today.dayBefore(1);
const now = new DateTime();
const daystart = new DateTime(today, TimeZone.JST);
const dt = daystart.getTime() - now.getTime();

//時差 dt が -2 時間より大きい場合 (つまり、現在時刻がその日の最初の 2 時間以内の場合)、前日 (昨日) に対して saveDay 関数が実行されます。
if (dt > -2 * 60 * 60 * 1000) {
  await saveDay(yesterday);
}
await saveDay(today);
