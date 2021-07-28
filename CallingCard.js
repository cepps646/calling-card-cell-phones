
class CallingCard {
    constructor(centsPerMinute) {
        this.centsPerMinute = centsPerMinute
        this.centsBalance = 0
        this.minutesBalance = 0

        // this.minutes = minutes

    };

    addDollars(dollars) {
        //dollars = this.centsBalance
        
        this.centsBalance += dollars*100;
        this.minutesBalance = Math.floor(this.centsBalance/this.centsPerMinute);
        return this.centsBalance;
        

    };

    getRemainingMinutes() {
        //this.minutesBalance = this.centsBalance/this.centsPerMinute;
        return this.minutesBalance;


    }

    useMinutes(minutes) {
        this.minutesBalance -= minutes;
            if (this.minutesBalance < 0) {
                this.minutesBalance = 0;
            }
    }

}


    





export default CallingCard