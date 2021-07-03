import Stack from './Stack'

class ExpressionConvertor {


    // Function to return precedence of operators
    prec(ch) {
        if (ch === '%')
            return 3;
        if (ch === '×' || ch === '÷')
            return 2;
        if (ch === '+' || ch === '-')
            return 1;
        return -1;
    }

    // Function to convert infix expression
    //to postfix expression
    convert(expression) {
        // operation stack
        const stack = new Stack();
        // result stack
        const resultStack = new Stack();
        // add first character to number (this can be sign)
        let nr = '' + expression[0];

        for (let i = 1; i < expression.length; i++) {
            // current char
            const ch = expression[i];
            // if current char is an operand
            if (this.prec(ch) === -1){
                nr += ch;
            } else {
                // push number to stack
                resultStack.push(parseFloat(nr));
                // reset nr value
                nr = '';
                // push number in result stack
                while(!stack.isEmpty() && this.prec(ch) <= this.prec(stack.top())) {
                    resultStack.push(stack.pop());
                }
                // push operator in stack
                stack.push(ch);
            }
        }

        // add remained number
        if (nr !== '')
            resultStack.push(parseFloat(nr));

        // Pop all the remaining elements from the stack
        while(!stack.isEmpty()) {
            resultStack.push(stack.pop());
        }

        return resultStack;

    }
}

export default ExpressionConvertor;
