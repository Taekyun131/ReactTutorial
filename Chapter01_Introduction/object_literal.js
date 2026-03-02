// 변수와 같은 이름의 프로퍼티: 프로퍼티와 그 값을 저장하는 변수의 이름이 같으면 값의 지정 생략가능
const title = '리액트 입문';
const price = 500;
// const book = { title, book };

const book1 = { title: title, price: price };

// 메서드의 간단한 구문
const member = {
    name: '사토 리오',
    greet: function() {
        console.log(`안녕하세요, ${this.name}님!`);
    }
}

const member1 = {
    name: '사토 리오',
    greet() {
        console.log(`안녕하세요, ${this.name}님`);
    }
}


// 프로퍼티 이름 동적으로 생성하기
let i = 0;
const member2 = {
    [`attr${++i}`]: '사토 리오',
    [`attr${++i}`]: '여성',
    [`attr${++i}`]: '18세'
};
console.log(member2);