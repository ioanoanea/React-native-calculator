class Stack {
    #items;

    constructor() {
        this.#items = [];
    }

    // push element in stack
    push(elem) {
        this.#items.push(elem);
    }

    // pop element from stack
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.#items.length === 0) {
            throw 'Stack underflow!';
        }
        return this.#items.pop();
    }

    // return top of the stack
    top() {
        return this.#items[this.#items.length - 1];
    }

    // check if stack is empty
    isEmpty() {
        return this.#items.length === 0;
    }

    // return stack as list
    toLst() {
        return this.#items;
    }

    // return stack as string
    toStr() {
        return this.#items.toString();
    }

}

export default Stack;
