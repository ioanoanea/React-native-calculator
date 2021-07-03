import ExpressionValidator from "../validator/ExpressionValidator";
import ExpressionConvertor from "./ExpressionConvertor";
import ExpressionEvaluator from "./ExpressionEvaluator";

class ExpressionManager {

    #expression;
    #expressionValidator;
    #expressionConvertor;
    #expressionEvaluator;

    constructor() {
        this.#expression = '';
        this.#expressionValidator = new ExpressionValidator();
        this.#expressionConvertor = new ExpressionConvertor();
        this.#expressionEvaluator = new ExpressionEvaluator();
    }

    // add to expression
    addToExpression(ch){
        if (this.#expressionValidator.validate(this.#expression + ch)){
            this.#expression += ch;
        }
        return this.#expression;
    }

    // remove from expression
    remove(){
        this.#expression = this.#expression.slice(0, this.#expression.length - 1);
        return this.#expression;
    }

    // clear expression
    clear() {
        this.#expression = '';
        return this.#expression;
    }

    // evaluate expression
    evaluate() {
        let result = this.#expressionEvaluator.evaluate(this.#expressionConvertor.convert(this.#expression).toLst());
        this.#expression = result.toString();
        return result;
    }
}

export default ExpressionManager;
