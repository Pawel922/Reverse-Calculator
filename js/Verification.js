class Verification {
    static checkAnswer(properAnswer, userAnswer) {
        //check if userAnswer is empty
        if (userAnswer.includes(" ")) {
            return false;
        } else {
            //delete redundant '0' digits
            let tempArray = userAnswer.split(/[+|-|*|\/|=]/).map((elem) => {
                return elem.replace(/^0+/, "") === "" ? "0" : elem.replace(/^0+/, "");
            })

            const regexArray = [/^[0-9]+/, /[0-9]+=/, /=[0-9]+/];
            userAnswer = userAnswer.replace(regexArray[0], tempArray[0]);
            userAnswer = userAnswer.replace(regexArray[1], tempArray[1] + "=");
            userAnswer = userAnswer.replace(regexArray[2], "=" + tempArray[2]);

            return properAnswer === userAnswer ? true : false;
        }
    }
}