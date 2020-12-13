//========================================================
//ユニコードで使われている文字はすべて一意のIDにあらわせ、そのIDをCodePointという
// 文字→CodePoint
console.log('あ'.codePointAt(0));
console.log('log'.codePointAt(2));
// CodePoint→文字
console.log(String.fromCodePoint(12233));

// 文字列リテラルを使って直接CodePiintを書くことができる
const codePointOfあ = "あ".codePointAt(0); // CodePointをチェック
const hexOfあ = codePointOfあ.toString(16);// 16進数に変更
console.log(hexOfあ);
console.log("\u{3042}");
//========================================================