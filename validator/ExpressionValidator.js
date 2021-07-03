class ExpressionValidator {

    validate(expression) {
        let operators = 0;
        let points = 0;

        for (let i = 0; i < expression.length; i++){
            let ch = expression[i];

            if (ch === '+' || ch === '-' || ch === '×' || ch === '÷') {
                operators++;
                points = 0;
                if (operators > 1) return false;
            } else {
                operators = 0;
                if (ch === '.') {
                    points++;
                    if (points > 1 || !('0' <= expression[i - 1] <= '9'))
                        return false;
                }
            }
        }
        return true;
    }
}

export default ExpressionValidator;
