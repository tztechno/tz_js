
// ランダムな整数を生成する関数 rnd
const rnd = (n) => Math.floor(Math.random() * n);

// モジュールのエクスポート
export { rnd };



export { rnd };: rnd 関数をこのモジュールからエクスポートしています。
  
これにより、他のファイルでこのモジュールをインポートする際に、rnd 関数を利用できるようになります。

このモジュールを他のファイルで使用するためには、次のようにインポートします：

// 他のファイルでの使用例
import { rnd } from './モジュールのファイルパス';
