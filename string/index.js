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

console.log("文字列".length);
console.log("".length);
//  へー文字列に直接lengthで文字数取れるんだ！

//======================================================

console.log("文字列" === "文字");
//文字列の比較ではcodeUnitの並び順と文字列の長さをチェックしている

console.log("ABC" > "ABD");
// 大小関係演算子も使える　CodeUnitの数値を比較している

//======================================================

const str4 = "ABCDE";
console.log(str4.slice(1, 4));
// slice は切り取る開始位置と終了位置を指定できる（終了位置は含まれない）
console.log(str4.slice(-1));
// -は後ろから
console.log(str4.slice(-1, -3));
console.log(str4.slice(-3, -1));
// どちらにせよ左から見て先にくる方を開始位置に指定しないといけないっぽいな

//========================================================

console.log(str4.substring(1, 4));
console.log(str4.substring(-1));
console.log(str4.substring(-1, 2));
// substrignではマイナスは０として認識される

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf('?')
console.log(indexOfQuery);
console.log(url.slice(indexOfQuery)); // => ?param=1
//よくあるURLのパラメータ取得 indexOfでその文字が含まれるindexがわかるのでそこで切ることがでる

//========================================================

const str5 = "にわにはにわにわとりがいる";
console.log(str5.startsWith("にわ"));
console.log(str5.startsWith("いる"));

console.log(str5.endsWith("にわ"));
console.log(str5.endsWith("いる"));

console.log(str5.includes("いる"));
console.log(str5.includes("にわ"));
// ES5から追加されたメソッドでは真偽知が帰るようになった

//========================================================
//正規表現
// const patternA = /パターン/フラグ;
// console.log(patternA);
// 正規表現リテラルで作成する場合//で正規表現パターンを書く

const patternA = /a+/;
const patternB = new RegExp("a+");
// +は1回以上の繰り返し
function main() {
    // const invalidPattern = /[/; 正規表現リテラルは実行されなくても評価されるのでエラーが出る
    const invalidPattern = new RegExp("[");
}
// main();　RegExpコンストラクタはここでエラーが発生する

const patternC = /\s{3}/;
const spaceCount = 3;
const patternD = new RegExp(`\\s{${spaceCount}}`);
// 上の二つは三この連続空白を表す正規表現
// この様にRegExpは（評価される時期が呼ばれた際なので）変数を入れ込むことができる。

const str6 = "ABC123EFG";
const patternE = /\d{3}/;
const patternF = new RegExp("\\d{3}"); //RegExpで\使う際はそれ自体もエスケープさせる必要があるので\\となる　通常の文字列ではない特殊な文字を表示させるためのエスケープ表記
console.log(str6.search(patternE));
console.log(str6.search(patternF));

//========================================================

console.log(str6.match(patternE));
//matchメソッド：マッチした文字列に関する情報を返してくれる

const str7 = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
const result = str7.match(alphabetsPattern);
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
//0にはマッチした文字列、indexには先頭インでっクス、inputには対象文字列全体が入る

const alphabetsPattern2 = /[a-zA-Z]+/g;
const result2 = str7.match(alphabetsPattern2);
console.log(result2);
console.log(result2[1]);
console.log(result2.index);
console.log(result2.input);
// gフラグ（正規表現の最後にg）を追加するとマッチした全てのパターンを返してくれる

const matchesIterator = str7.matchAll(alphabetsPattern2);
console.log(matchesIterator);
for (const match of matchesIterator) {
    console.log(match);
}
// es6ではmatchAllメソッドで全て情報取れる

//========================================================

const pattern = /ECMAScript (\d+)/;
const [all, capture1] = 'ECMAScript 62'.match(pattern);
console.log(all);
console.log(capture1);
//()で囲んだ部分がキャプチャリングとして取り出される。
// これで正規表現でマッチした一部を取り出すことができる

const pattern2 = /ES(\d+)/g;
const matchPattern = 'ES2015、ES2016、ES2017'.matchAll(pattern2);
for (const match of matchPattern) {
console.log(match);
}
// matchAllの場合はmatch部分を繰り返しで取り出す

//========================================================
// ^は先頭
console.log(/^にわ/.test(str5));
console.log(/^いる/.test(str5));
// $末尾
console.log(/にわ$/.test(str5));
console.log(/いる$/.test(str5));
// 含まれるかどうか
console.log(/にわ/.test(str5));
console.log(/いる/.test(str5));