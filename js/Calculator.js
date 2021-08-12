class Calculator {
    constructor() {
        this.equation = new Equation();
        this.screenManager = new ScreenManager();
        this.screen = document.querySelector(".result span");
        document.querySelector(".buttons1 div:first-child").addEventListener('click',this.help.bind(this));
        document.querySelector(".modal .bottom").addEventListener('click', this.help.bind(this));
        document.querySelector(".buttons1 div:last-child").addEventListener('click', this.clear.bind(this));
        this.numButtons = document.querySelectorAll(".buttons2 div.num");
        document.querySelector(".buttons2 div:nth-last-child(3)").addEventListener('click', this.reset.bind(this));
        document.querySelector(".buttons2 div:last-child").addEventListener('click', this.refresh.bind(this));
        this.placementButtons = document.querySelectorAll(".buttons3 div.placement");
        document.querySelector(".buttons3 div:last-child").addEventListener('click', this.verify.bind(this));
        this.numWins = document.querySelector(".info div:nth-child(1) span");
        this.numLoss = document.querySelector(".info div:nth-child(2) span");
        this.numTotal = document.querySelector(".info div:nth-child(3) span");

        this.userAnswer = "";
        this.placement = "first";
        this.isItNewEquation = true;

        this.switchOnNumKeys();
        this.switchOnPlacementKeys();
        this.refresh();
    }

    switchOnNumKeys() {
        this.numButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (this.screenManager.getDisplayContent().length < this.screenManager.maxNumOfCharacters) {
                    this.userAnswer += button.textContent;
                    this.userAnswer = this.userAnswer.replace("?", "");
                    this.render();
                }
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
                this.equation = new Equation();
                this.userAnswer = "";
                this.refresh();
            })
        })
    }

    help() {
        document.querySelector(".modal-wrap").classList.toggle('active');
        document.querySelector(".calculator").classList.toggle('blur');
    }

    clear() {
        if ((this.userAnswer != "") && this.screenManager.getDisplayContent().includes("=")) {
            let tempArray = [...this.userAnswer];
            tempArray.pop();
            this.userAnswer = tempArray.length == 0 ? "?" : tempArray.toString().replaceAll(",", "");
            this.render();
        }
    }

    verify() {
        if (this.isItNewEquation) {
            if (Verification.checkAnswer(this.equation.getEquationToGuess(), this.screenManager.getDisplayContent())) {
                this.screenManager.setWinsValue(this.screenManager.getWinsValue() + 1);
                this.screenManager.setDisplayContent(Info.displayInfo("pass"));
            } else {
                this.screenManager.setLossesValue(this.screenManager.getLossesValue() + 1);
                this.screenManager.setDisplayContent(Info.displayInfo("fail"));
            }
            this.screenManager.setTrialsValue(this.screenManager.getTrialsValue() + 1);
            this.updateView();
        }
        this.isItNewEquation = false;
    }


    render() {
        this.screenManager.setDisplayContent(this.equation.getEquationToGuess(), this.placement, this.userAnswer);
        this.screen.textContent = this.screenManager.getDisplayContent();
    }

    reset() {
        this.screenManager.setWinsValue(0);
        this.screenManager.setLossesValue(0);
        this.screenManager.setTrialsValue(0);
        this.updateView();
    }

    refresh() {
        //check if answer was typed otherwise change scores
        if(this.screenManager.getDisplayContent().includes("?")) {
            this.screenManager.setLossesValue(this.screenManager.getLossesValue() + 1);
            this.screenManager.setTrialsValue(this.screenManager.getTrialsValue() + 1);
        }
        this.equation = new Equation();
        this.isItNewEquation = true;
        this.userAnswer = "";
        this.screenManager.setDisplayContent(this.equation.getEquationToGuess(), this.placement);
        this.updateView();
    }

    updateView() {
        this.screen.textContent = this.screenManager.getDisplayContent();
        this.numWins.textContent = this.screenManager.getWinsValue();
        this.numLoss.textContent = this.screenManager.getLossesValue();
        this.numTotal.textContent = this.screenManager.getTrialsValue();
    }
}