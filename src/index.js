/**
 * const, let test
 */

//  var val1 = "test1";
//  console.log(val1);

// val1 = "aaa";
// console.log(val1);

// var val1 = "iii";
// console.log(val1);

// let val2 = "lethensu";
// console.log(val2);

// val2 = "test";
// console.log(val2);

// let val2 = "a";

//constで定義したオブジェクトはプロパティの変更が可能
// const val3 = "aaa";
// val3 = "sss";
//基本的にはconstを使う。
//処理内だとletを使う。

// const val4 = {
//   name: "tset",
//   age: 34,
// }
// val4.name = "iiii";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = 'aa';

/**
 * テンプレート文字列
 */

// const name = "aaa";
// const age = 34;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// // 従来の関数
// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// // アロー関数
// const func3 = (str) => {
//   return str;
// };

// // 1行で処理が完了する場合はreturnはなしでもOK.
// const func4 = (str) => str;

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func5(1, 2));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "test",
//   age: 29
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // myProfileからname, ageを取得.
// // 以降はmyProfileを付ける必要がなくなる。
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['test', 29];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 配列の内容が前から順に変数に割り当てられる。
// // 配列の型の中で変数宣言。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// 引数の変数名の後に=で書くと初期値を設定している。
// const sayHello = (name = 'test') => console.log(`こんにちは!${name}さん!`);
// sayHello();

/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);

// // ...の後に配列指定で配列の中身を表示
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// // 順番に値が設定される
// sumFunc(...arr1);

// // まとめて受け取る
// const arr2 =[1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] =arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// arr4, arr5の中身を展開してまとめられる
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// = で配列をコピーすると値を参照する
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理。これでFor文をほとんど使わなくなった
 */

const nameArr = ["test1", "test2", "test3"];
// 　for (let i = 0; i < nameArr.length; i++) {
//     console.log(`${i + 1}番目は${nameArr[i]}です。`);
//   }

// mapを使うことでアロー関数の引数に順に値を渡す
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// mapの中のアロー関数の2番目の引数はインデックスになる
// nameArr.map((name, i) => {console.log(`${i + 1}は${name}です。`)});

// const numArr = [1, 2, 3, 4, 5];
// filterを使うことで絞り込み
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === 'test3') {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がTRUEの時の処理 : Falseの時の処理
// const val1 = 1 > 0 ? 'trueです。' : 'FALSEです。';
// console.log(val1);
// const num = 1300;
// // toLocaleStringは3桁で,を入力してくれる。
// //console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }

// console.log(checkSum(50, 51));

/**
 * 論理演算子の意味
 */

//  const flag1 = true;
//  const flag2 = false;
// || は「または」、＆＆は「かつ」という意味ではない
//  if (flag1 || flag2) {
//    console.log("1か2はtrueになります");
//  }
//  if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }
// || は左側がFalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何かを設定されました";
// console.log(fee2);
