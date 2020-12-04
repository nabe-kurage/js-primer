var double = "test";
var single = 'test'
console.log(double === single); // true

//========================================================

const multiline = `1行
2行
3行
`;
console.log(multiline);
// のようにバッククオートを使ったテンプレートレテラルでは改行することができる

//========================================================

const str = "this book is \"js-primer\""
console.log(str);
// 文字列リテラルと同じ文字を使いたい場合はバックスラッシュでエスケープ

//========================================================

const multiline2 = "1行\n2行\n3行";
console.log(multiline2);
// 特殊な文字はエスケープシーケンスとして書く必要がある

//======================================================

console.log("¯\\_(ツ)_/¯");
// \は無視されるので//にする

//======================================================

const name = "JS";
console.log(`Hello${name}!!!`);
// テンプレートリテラル

//======================================================

const str2 = "文字列";
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[3]);

//======================================================

console.log(str2.charCodeAt(0));
console.log(str2.charCodeAt(0).toString(16));
console.log(String.fromCharCode(
    0x30a2, 0x30a6, 0x30a4
));
//16真数で文字列を表せられる

//======================================================
const string = "赤・青・緑".split("・");
console.log(string);

console.log(string.join(','));
//splitとjoin

//======================================================
const str3 = "a     b    c      d";
const strings = str3.split(/\s+/);
console.log(strings);
// 1つい上のスペースで分解

//======================================================