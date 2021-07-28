import CallingCard from "./CallingCard.js";

class CellPhone {
    constructor (card) {
        this.isTalking = false;
        this.card = card;
        this.callHistory = [];
    }

    call(phoneNum) {
        this.callHistory.push(phoneNum)
        this.isTalking = true; 
        

    }

    isTalking() {
        if (this.isTalking === true) {
            return true
        } else {
            return false
        }
    }

    tick() {

    }

    endCall() {

    }

    getHistory() {
        return this.callHistory;
    }


}

export default CellPhone;
