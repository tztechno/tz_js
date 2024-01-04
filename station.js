//https://github.com/code4fukui/tidelevel/blob/main/Station.js

import { Day } from "https://js.sabae.cc/DateTime.js";
//Day クラスをインポートします。

const base = "https://code4fukui.github.io/tidelevel/";

export class Station {
  
//Station クラスは、id と dt (日付) をパラメーターとして受け取るコンストラクターを使用して定義されます。  
//コンストラクター内で、dt が Day クラスのインスタンスであるかどうかを確認します。 
//一致する場合は、toStringYMD メソッドを使用して YMD (年-月-日) 形式の文字列に変換します。
  
  constructor(id, dt) {
    this.id = id;
    if (dt instanceof Day) {
      dt = dt.toStringYMD();
    }
    this.dt = dt;
  }
  getName() {
    return `tide_obs_${this.dt}_${this.id}.json`;
  }
  getPath() {
    return "data/" + this.dt.substring(0, 6) + "/" + this.id + "/";  
  }
  getURL() {
    return base + this.getPath() + this.getName();
  }
};
