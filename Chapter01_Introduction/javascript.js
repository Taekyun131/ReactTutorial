// 변수 선언
// let은 블록 스코프를 가지지만, var는 전역
if(true){
    // let x = 13;
    var x = 13;
}
console.log(x);

// let은 동일한 변수 중복 선언 불가능
// let msg = "Hello";
// let msg = "Good Bye";

var msg = "Hello";
var msg = "Good Bye";
console.log(msg);