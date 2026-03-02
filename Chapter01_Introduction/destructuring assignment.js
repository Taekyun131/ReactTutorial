// 구조 분해 할당

// 배열을 이용한 구조분해 핳당
const list = [10, 20, 30];
const [x, y, z] = list;
console.log(x, y,z);    // 10 20 30

const [a, b] = list;
console.log(a, b);  // 10 20

const [l, m, n, o] = list;
console.log(l, m, n, o);    // 10 20 30 undefined

const [p, , r] = list;
console.log(p, r);  // 10, 30

const [one, ...rest] = list;
console.log(one, rest);     // 10 [20, 30]


// 객체의 구조분해 할당
const member = {
    fullname: '사토 리오',
    sex: '여성',
    age: 18
};
const { fullname, sex, memo = '---' } = member;
console.log(sex, fullname, memo);

// 프로퍼티 명: 별칭
const { sex: gender } = member;
console.log(gender);    // 여성

// 나머지 프로퍼티
const member1 = {
    fullname1: '사토 리오',
    sex1: '여성',
    age1: 18
};
const { fullname1, ...rest1 } = member1;
console.log(fullname1);
console.log(rest1);

// 중첩된 객체 분해
const member2 = {
    fullname: '사토 리오',
    address: {
        prefecture: '스즈오카현',
        city: '후지에다시'
    }
};

const { address, address: {city} } = member2;
console.log(address);
console.log(city);

// 선언문과 대입문 분리하기
let fullname2, sex2, memo2;
({ fullname2, sex2, memo2 = '---'}) = member;   // 대입문 앞뒤를 ()로 묶지 않으면 {}가 블록으로 간주됨
