export const calculate = (a: number, b: number, operator: any) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '**':
            if (b < 0 || a < 0) {
                throw new Error('Cannot division by 0');
            } else {
                return a ** b;
            }
        case '*':
            return a * b;
        case '/':
            if (b === 0 || a === 0) {
                throw new Error('Cannot divide by 0');
            } else {
                return a / b;

            }
        case '%':
            return (a / 100) * b;
    }
};

// console.log(calculate(1, 2, '+'));
// console.log(calculate(5, 7, '-'));
// console.log(calculate(10, 3, '/'));
// console.log(calculate(11, 7, '*'));
// console.log(calculate(13, 2, '**'));
// console.log(calculate(10, 2, '%'));