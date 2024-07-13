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