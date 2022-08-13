console.log("hello ts");

function longText<T>(text: T): T {
    return text;
}

longText<string>('sdfsfsddsf');
longText<number>(123123123123);

// 기본 제네릭
interface GenericDefault {
    <T>(x: T): T;
}
// 제네릭 강조
interface GenericAdult<T> {
    (x: T): T;
}
function test<T>(text: T): T {
    return text;
}

let t: GenericDefault = test;
let t2: GenericAdult<string> = test;

interface wiseLength {
    length: number;
}

function test2<T extends wiseLength>(text: T): T {
    let len = text.length;
    return text;
}

var total = (num) => {
    switch (num) {
        case 1:
            return 0;
        default:
            return 1;
    }

};

