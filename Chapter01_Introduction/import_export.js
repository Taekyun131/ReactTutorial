// 모듈 멤버에 별칭 부여하기
import { getTriangle as tri } from "./App.js";
console.log(tri(10, 2));

// 전체 모듈을 한꺼번에 가져오기
import * as app from "./App.js"
console.log(app.getTriangle(10, 2));

// 기본 내보내기를 가져오기
import Util from "../Util.js";
console.log(Util.getCircleArea(10));

// 동적 임포트
// 모듈을 비동기적으로 임포트하고, 이후에 콜백함수를 실행
import('./App.js').then(app => {
    console.log(app.getTriangle(10, 5));

    const a = new app.Article();
    console.log(a.getAppTitle());
})




