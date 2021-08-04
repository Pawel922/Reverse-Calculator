class Equation {
    constructor() {
        //variable which represents the numbers range
        this.range = 25;
        //variable which represents the largest amount of characters which equation can have
        this.maxNumOfCharacters = 12;
        //table which contains mathematical functions
        this.mathFunctions = ['+', '-', '*', '/'];
        //variable which represents equation to guess
        let _equationToGuess = this.generateEquation();
        this.getEquationToGuess = () => _equationToGuess;
    }

    generateEquation() {
        let result = "";
        let mathFun;
        let firstNum;
        let secondNum;
        let equationHasProperLength = false;

        while (!equationHasProperLength) {
            mathFun = this.mathFunctions[Math.floor(Math.random() * this.mathFunctions.length)];
            firstNum = Math.floor(Math.random() * this.range);
            secondNum = Math.floor(Math.random() * this.range);

            if (mathFun === '+') {
                result = `${firstNum}+${secondNum}=${firstNum+secondNum}`;
            } else if (mathFun === '-') {
                if (firstNum >= secondNum) {
                    result = `${firstNum}-${secondNum}=${firstNum-secondNum}`;
                } else {
                    result = `${secondNum}-${firstNum}=${secondNum-firstNum}`;
                }
            } else if (mathFun === '*') {
                result = `${firstNum}*${secondNum}=${firstNum*secondNum}`;
            } else {
                result = `${firstNum * secondNum}/${firstNum}=${secondNum}`;
            }

            equationHasProperLength = result.length <= this.maxNumOfCharacters ? true : false;
        }
        return result;
    }

}