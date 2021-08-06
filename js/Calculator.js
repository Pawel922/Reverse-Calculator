class Calculator {
    constructor() {
        this.equation = new Equation();
        this.screenManager = new ScreenManager();
        this.screen = document.querySelector(".result span");
        this.numButtons = document.querySelectorAll("[data-num]");
        this.numWins = document.querySelector(".info div:nth-child(1) span")
        this.numLoss = document.querySelector(".info div:nth-child(2) span")
        this.numTotal = document.querySelector(".info div:nth-child(3) span")

        this.render();
    }



    render() {
        this.screenManager.setDisplayContent(this.equation.getEquationToGuess(), "first");
        this.screen.textContent = this.screenManager.getDisplayContent();
        this.numWins.textContent = this.screenManager.getWinsValue();
        this.numLoss.textContent = this.screenManager.getLossesValue();
        this.numTotal.textContent = this.screenManager.getTrialsValue();
    }
}