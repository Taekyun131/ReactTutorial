// 템플릿 문자열
const fullname = '홍길동';
const msg = `안녕하세요, ${fullname} 님!
오늘 하루 잘 지내셨나요?`;
console.log(msg);

// 숫자 구분자(_): 가독성을 높이기 위한 구조이므로 실행 결과에 영향을 주지 않음
const value = 123_456_789;
console.log(value);

// 화살표 함수
function circle(radius) {
    return (radius ** 2) * Math.PI;
}

const circle = (radius) => {
    return (radius ** 2) * Math.PI;
}
// 함수 본문이 하나의 문장이라면 {...} 생략가능
const circle1 = (radius) => (radius ** 2) * Math.PI;

// 매개변수가 한 개인 경우 (...) 생략 가능
// But 매개변수가 없는 경우에는 괄호 생략 불가능
const circle2 = radius => (radius ** 2) * Math.PI;