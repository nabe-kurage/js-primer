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

// code unit(符号単位) はUnicodeの１文字を表す最小ビットの組み合わせのこと。
// codePointとCodeUnitoは異なる場合もある
//  以下は２つのCodeUnitsの組み合わせで1つのCodePointsを表現する、この仕組みを場合サロゲートペアという
function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}

function convertCodePoints(str){
    
    return Array.from(str).map(char => {
        return char.codePointAt(0).toString(16);
    });
};

console.log(convertCodeUnits("🍎"));
console.log(convertCodePoints("🍎"));

console.log("\uD867\uDE3D");
console.log("𩸽"[0]);
console.log("𩸽"[1]);

//========================================================

const codePoints = Array.from("りんご🍎");
console.log(codePoints);
console.log(codePoints.length);

function countOfCodePoints(str, codePoint) {
    return Array.from(str).filter(item => {
        return item === codePoint;
    }).length;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));
