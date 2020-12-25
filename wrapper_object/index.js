//========================================================
var test = "string".toUpperCase();
console.log(test);

//========================================================

const str = new String('input vue');
console.log(str.toUpperCase());

//========================================================

// プリミテゥブ型をオブジェクト型に変更するラッパーオブジェクトという物が存在する。
const str2 = "文字列";
console.log(typeof str2);
const stringWrapper = new String("文字列");
console.log(typeof stringWrapper);

//========================================================

// 自動的にラッパーオブジェクトに変換される。
const str2 = "string";
str2.toUpperCase();
// (new String(str)).toUpperCase();と同じになる
// なので常にラッパーオブジェクトのほうでは無く、リテラルを使うほうが効率的