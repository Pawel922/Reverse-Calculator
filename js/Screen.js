class Screen {
    constructor() {
        //variable which represents what is currently displayed
        this.displayContent = '';
        //amount of wins
        this.winsValue = 0;
        //amount of losses
        this.lossesValue = 0;
        //amount of trials
        this.trialsValue = 0
    }

    //set methods

    setDisplayContent(content) {
        this.displayContent = content;
    }

    setWinsValue(num) {
        this.winsValue = num;
    }

    setLossesValue(num) {
        this.lossesValue = num;
    }

    setTrialsValue(num) {
        this.trialsValue = num;
    }

    //get methods

    getDisplayContent() {
        return this.displayContent;
    }

    getWinsValue() {
        return this.winsValue;
    }

    getLossesValue() {
        return this.lossesValue;
    }

    getTrialsValue() {
        return this.trialsValue;
    }
}