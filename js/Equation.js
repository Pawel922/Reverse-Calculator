class Equation {
    constructor() {
        //variable which represents the numbers range 
        this.range = 25;
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


        mathFun = this.mathFunctions[Math.floor(Math.random() * this.mathFunctions.length)];
        firstNum = Math.floor(Math.random() * this.range + 1);
        secondNum = Math.floor(Math.random() * this.range + 1);

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

        return result;
    }
}