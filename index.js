console.log("hello world");

// const, let, var 변수 공부
const name = "상수";
let 변수 = "블럭스코프변수";
var var변수 = "옛날변수-호스팅";

console.log("name = " + name);
console.log(`name = ${name}`);

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i + 1); // 0, 1, .... 9
//   }, 100);
// }

// for, while, foreach, if, switch
// for (;;) {
//   console.log("무한루프");
// }
// while (true) {
// }
// do {
// } while(true)
// for문을 이용해서 1~10 더하는 함수를 만들어보세요.
// if
const a = 90;
const b = 80;
const c = 70;
if (a > 80) {
  console.log("A");
}
if (b > 70) {
  console.log("B");
}
if (c > 60) {
  console.log("C");
}

if (a > 80) {
  console.log("A");
} else if (b > 70) {
  console.log("B");
} else {
  console.log("C");
}

const list = [1, 2, 3, 4, 5];
for (var i of list) {
  console.log(i); // value
}
for (var i in list) {
  console.log(i); // index
  console.log(">>> ", list[i]);
}

const member = [{ id: "user1", pass: "1111" }]; // 주어진 저장된 데이터
const loginY = { id: "user1", pass: "1111" }; // 성공
const loginIdN = { id: "user2", pass: "1111" }; // 아이디만 실패
const loginPwN = { id: "user2", pass: "1112" }; // 패스워드 실패

// array
const memberList = []; // new Array();

// 리스트 아이템 추가
memberList.push(1);
memberList.push(2);
memberList.push(3);
console.log(memberList); // 1, 2, 3

// 리스트 아이템 삭제
memberList.splice(1, idx);

// 리스트 아이템 수정
// 1. list 값을 찾아서 해당 속성을 변경하는 방법 Object.assign, 전개연사자
// 모던 방식
memberList = [...memberList, { id: "user1" }]; // 수정
// 2. list 값에서 해당 값을 삭제 후에 추가하는 방법
for (var i = 0; i < memberList.length; i++) {
  // 클래식 방식
  const m = memberList[i]; // 해당 인덱스 값 추출
  m.id = "user02"; // 수정하는 포인트
  memberList.splice(1, i); // 삭제하는 포인트
  memberList.push(m); // 추가 포인트
}

// for, if 성공하면, true, 실패하면 false => switch
isLogin(loginY.id, loginY.pass);
isLogin(loginIdN.id, loginIdN.pass);
isLogin(loginPwN.id, loginPwN.pass);

// isLogin 함수를 완성하시요.
function 로그인체크(id, pw) {} // 비교문 TEST OK
function 회원가입(member) {} // 차주
function 회원수정(member) {} // 차차주
function 회원탈퇴(member) {} // 차차차주

successYn(200);
successYn(401);

function successYn(resultCode) {
  switch (resultCode) {
    case 200:
      console.log("로그인 성공");
      break;
    case 401:
      console.log("아이디 실패");
      break;
    case 402:
      console.log("패스워드 실패");
      break;
    case 403:
      console.log("로그인 실패");
      break;
    default:
      console.log("예외상황");
      break;
  }
}
