function fn(arg) {
    console.log(arg);
}
fn(1);
// ↓関数スコープの外なのでエラーとなる
// console.log(arg); 

//========================================================
if (true) {
    const x = "inner";
}
// ↓ブロックスコープの外なのでエラーとなる
// console.log(arg); 

//for文はループごとにブロックスコープを作成する。

//========================================================
console.log(x); // error
console.log(y); // undifind var は宣言の巻き上げが怒る

let x = 'test';
var y = 'test';

