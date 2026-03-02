//const는 상수를 선언하기 위한 명령어 
const author = "홍길동";
// author = "WINGS 프로젝트";   // Assignment to constant variable 오류발생
console.log(author);

// const는 재입력 불가능, 변경은 가능
const list = ['React', 'Vue', 'Angular'];
list[0] = 'Riot';
console.log(list);  // 'React'에서 'Riot'으로 변경됨
