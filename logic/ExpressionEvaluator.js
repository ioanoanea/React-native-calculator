import Stack from "./Stack";

class ExpressionEvaluator {

    // evaluate an expression in postfix notation
    evaluate(expression) {
        // operation stack
        const stack = new Stack();

        for (let i = 0; i < expression.length; i++) {
            let elem = expression[i];
            // if current element is a number
            if (typeof elem === 'number'){
                stack.push(elem);
            } else if (elem === '%'){
                let val = stack.pop();
                stack.push(val / 100);
            } else {
                let val1 = stack.pop();
                let val2 = stack.pop();
                switch (elem) {
                    case '+' : stack.push(val2 + val1); break;
                    case '-' : stack.push(val2 - val1); break;
                    case '×' : stack.push(val2 * val1); break;
                    case '÷' : stack.push(val2 / val1); break;
                }
            }
        }

        return stack.pop();
    }
}

export default ExpressionEvaluator;
