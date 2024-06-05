
---
1. document.getElementById('result').innerText

用途: テキスト内容を取得または設定するために使用されます。
対象要素: 主に<div>, <span>, <p>などのコンテンツを持つ要素。
操作: このプロパティを使用することで、要素の内部のテキストを取得したり、新しいテキストを設定することができます。

```
// 'result'要素のテキスト内容を取得
var text = document.getElementById('result').innerText;

// 'result'要素のテキスト内容を設定
document.getElementById('result').innerText = "新しいテキスト";
```

---

2. document.getElementById('inputN').value

用途: フォーム要素（入力フィールド）の値を取得または設定するために使用されます。
対象要素: 主に<input>, <textarea>, <select>などのフォーム要素。
操作: このプロパティを使用することで、ユーザーが入力した値を取得したり、新しい値を設定することができます。

```
// 'inputN'入力フィールドの値を取得
var value = document.getElementById('inputN').value;

// 'inputN'入力フィールドの値を設定
document.getElementById('inputN').value = "新しい値";
```

---
