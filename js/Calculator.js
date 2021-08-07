class Calculator {
    constructor() {
        this.equation = new Equation();
        this.screenManager = new ScreenManager();
        this.screen = document.querySelector(".result span");
        this.numButtons = document.querySelectorAll(".buttons2 div.num");
        this.placementButtons = document.querySelectorAll(".buttons3 div.placement");
        document.querySelector(".buttons3 div:last-child").addEventListener('click', this.verify.bind(this));
        this.numWins = document.querySelector(".info div:nth-child(1) span")
        this.numLoss = document.querySelector(".info div:nth-child(2) span")
        this.numTotal = document.querySelector(".info div:nth-child(3) span")

        this.userAnswer = "";
        this.placement = "first";

        this.switchOnNumKeys();
        this.switchOnPlacementKeys();
        this.refresh();
    }



    switchOnNumKeys() {
        this.numButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.userAnswer += button.textContent;
                this.render();
            })
        })
    }

    switchOnPlacementKeys() {
        this.placementButtons.forEach(button => {
            button.addEventListener('click', () => {
                //remove class active from all remaining buttons
                this.placementButtons.forEach((btn) => {
                    btn.classList.remove('active');
                })
                button.classList.add('active');
                this.placement = button.getAttribute('data-plc');
                this.userAnswer = "";
                this.refresh();
            })
        })
    }

    verify() {
        if (Verification.checkAnswer(this.equation.getEquationToGuess(), this.screenManager.getDisplayContent())) {
            this.screenManager.setWinsValue(this.screenManager.getWinsValue() + 1);
        } else {
            this.screenManager.setLossesValue(this.screenManager.getLossesValue() + 1);
        }
        this.screenManager.setTrialsValue(this.screenManager.getTrialsValue() + 1);
        this.equation = new Equation();
        this.userAnswer = "";
        this.refresh();
    }


    render() {
        this.screenManager.setDisplayContent(this.equation.getEquationToGuess(), this.placement, this.userAnswer);
        this.screen.textContent = this.screenManager.getDisplayContent();
    }

    refresh() {
        this.screenManager.setDisplayContent(this.equation.getEquationToGuess(), this.placement);
        this.screen.textContent = this.screenManager.getDisplayContent();
        this.numWins.textContent = this.screenManager.getWinsValue();
        this.numLoss.textContent = this.screenManager.getLossesValue();
        this.numTotal.textContent = this.screenManager.getTrialsValue();
    }


}