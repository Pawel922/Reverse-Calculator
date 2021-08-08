class ScreenManager {
    constructor() {
        //variable which represents what is currently displayed
        this.displayContent = '';
        //amount of wins
        this.winsValue = 0;
        //amount of losses
        this.lossesValue = 0;
        //amount of trials
        this.trialsValue = 0;
    }

    //set methods

    setDisplayContent(content, param, answer = "?") {
        const regex1 = /^[0-9]+/;
        const regex2 = /[0-9]+=/;
        const regex3 = /=[0-9]+/;
        switch (param) {
            case ("first"):
                this.displayContent = content.replace(regex1, answer);
                break;
            case ("second"):
                this.displayContent = content.replace(regex2, answer + "=");
                break;
            case ("third"):
                this.displayContent = content.replace(regex3, "=" + answer);
                break;
            default:
                this.displayContent = content;
        }
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