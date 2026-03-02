// 매개변수 기본값
function getTrapezoidArea(upper = 1, lower = 1, height = 1){
    return (upper + lower) * height / 2;
}

console.log(getTrapezoidArea(10, 5, 3));    // 22.5
console.log(getTrapezoidArea(10, 5));       // 7.5
console.log(getTrapezoidArea(10));          // 5

// 가변인자 함수
function sum(...nums){
    let result = 0;
    for(const num of nums){
        result += num;
    }
    return result;
}
console.log(sum(10, 25, 2));
console.log(sum(7, 13, 25, 6, 100));


// 구조분해할당을 통한 객체 리터럴 분해
function greet({ name, age }){
    console.log(`안녕하세요, 저는 ${name}, ${age}세 입니다.`);
}

const my = { name: '사토 리오', sex: '여성', age: 18 };
greet(my);