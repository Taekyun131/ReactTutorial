// 옵셔널 체이닝 연산자(?.)
const str = null;
// console.log(str.substring(1));  // Cannot read properties of null

if(str !== null && str !== undefined) {
    console.log(str.substring(1));
}
// 위 코드와 같은 의미
console.log(str?.substring(1)); // undefined


// null 병합 연산자
let value = null;
console.log(value ?? '기본값'); // 기본값

value ??= '기본값';
console.log(value); // 기본값