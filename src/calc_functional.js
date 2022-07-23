function calc(a, b, callback) {
    console.log(a, b);
    callback(a, b);
}

calc(1, 2, (a, b) => a + b);
calc(1, 2, (a, b) => a - b);
calc(1, 2, (a, b) => a / b);
calc(1, 2, (a, b) => a % b);
calc(1, 2, (a, b) => a == b);
calc(1, 2, (a, b) => a != b);
calc(1, 2, (a, b) => a / b);

function calc_switch(a, b,  command) {
    switch(command) {
        case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;case "+":
            return a + b;
        default:
            return 0;
    }
}
