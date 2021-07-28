import CallingCard from "./CallingCard.js";


let card1 = new CallingCard(10); // card1 costs 10 cents / minute to use

let card2 = new CallingCard(15); // card2 costs 15 cents / minute to use





let card = new CallingCard(20); // this card costs 20 cents / minute to use

//card.addDollars(1);           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added
//card1.addDollars(4);
//card.getRemainingMinutes();   // returns 5  (5 minutes left)

//card.useMinutes(3);
//card.getRemainingMinutes();   // return 2

//card.useMinutes(1);
//card.getRemainingMinutes();   // returns 1

//console.log(card1);
//console.log(card2);

//console.log(card.getRemainingMinutes);
//card.getRemainingMinutes()
card.addDollars(1);
card.useMinutes(6);
//card.getRemainingMinutes();

console.log(card);
