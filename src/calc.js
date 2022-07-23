// 개발방법론...
// 변화에는 닫혀있고, 확장에는 열려 있는 코드를 작성해라.

class Calc {
    stringToNumber(a) {
        // todo ::: 다음주에...
        return parseInt(a);
    }
    constructor(a = 0, b = 0) {
        // a 변수를 문자열이면서 숫자로 변환시 숫자가 아니면 0으로 설정 하는 함수...
        if (typeof a === 'string' || typeof b === 'string') {
            a = this.stringToNumber(a);
            b = parseInt(b);
            // try {
            //
            // } catch (e) {
            //     console.log('>>>>>>> nan called me', e);
            // }
        }
        this.a = a;
        this.b = b;
        console.log(a, b);
    }
    add = () => this.a + this.b;
    minus = () => this.a - this.b;
    divide = () => this.a / this.b;
    multipy = () => this.a * this.b;
    // // add() {
    // //     return this.a + this.b;
    // // }
    //
    // minus() {
    //     return this.a - this.b;
    // }
    //
    // divide() {
    //     return this.a / this.b;
    // }
    //
    // multipy () {
    //     return this.a * this.b;
    // }
}

var c = new Calc('1', 2);
console.log(c.add()); // 1 + 2 = 3
console.log(c.minus()); // 1 + 2 = 3
console.log(c.divide()); // 1 + 2 = 3
console.log(c.multipy()); // 1 + 2 = 3


