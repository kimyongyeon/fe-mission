var name = "";
let phone = 123123123;
const addr = [];
const obj = {};
var firstName = "";

// 변수 저장
name = "kimyongyeon";
// 변수 로드
fisrtName = name; // 로드 하면서 저장하는 거
// 변수 확인
console.log(name);

const ObjectImmable = { a: 1, b: 2 };
ObjectImmable.c = 123123;

const array2 = new Array();
const array = [1, 2, 3, 4];
array.push(5);
array.push(6);
array.push(7);
array.push(8);
console.log(array);

let object = { a: 1, b: 2 }; // {a: 1, b: 2}
let object3 = object; // 얇은 복사
let object2 = { ...object }; // 깊은 복사
object2.b = 123123; // {a: 1, b: 123123}
// console.log(object === object2);
console.log(object, object2);

// OOP - SOLID 
// S : 단일 책임 원칙 
// O : 개방/패쇄 원칙 
// I : 인터페이스 분리 
// L : 리스코프 원칙 
// D : 의존성 주입 원칙

class A {
}

class B {
  constructor(a) {
    const b = a;
  }
}
const b = new B(new A());

interface Calc {
  add();
}

class CalcImpl implements Calc {
  add() {
    console.log("add call");
  }
}

function add(a, b) {
}

add = (a, b) => a + b;


// js -> ts (super set )

// interface : 구현체가 없다. 
// abstract class 
// class 

// instance 방법
const ob = {}; // 싱글톤패턴 

function Ob() {

}

// GC : 가비지컬렉션 
// 힙에 공간에 올라간다. 
// 
const ob2 = new Ob();
ob2.add();
ob2.muliply();
ob2.divide();
const ob3 = new Ob();
const ob4 = new Ob();
const ob5 = new Ob();

