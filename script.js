// const dados = population => (population / 7900000000) * 100;


// const angola = dados(30000000)
// const brasil = dados(150000000)
// const portugal = dados(25000000)

// console.log(`Angola ${angola}\nBrasil ${brasil}\n Portugal ${portugal}`);

// "use strict";
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const koalasAvg = calcAverage(10, 10, 10);
// const dolphinsAvg = calcAverage(20, 20, 20);

// function checkWinner(Avgkoalas, Avgdolphins) {

//     if (Avgkoalas >= (Avgdolphins * 2)) {

//         return `Koalas Win (${Avgkoalas} vs. ${Avgdolphins})`;
//     }
//     else if (Avgdolphins >= (Avgkoalas * 2)) {

//         return `Dolphis Win (${Avgdolphins} vs. ${Avgkoalas})`;
//     }

//     else {
//         console.log('There is no winner!....')
//     }

// }

// const winner = checkWinner(koalasAvg, dolphinsAvg);

// console.log(winner);

// Coding Challenge #2 Part # 1
'use strict';
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// const total = bill + tip;

// console.log(total);



// //Coding Challenge #2

// const billValue = prompt("Insert the Value of the Bill");

// const calcTip = (value) => value >= 50 && value <= 300 ? value * .15 : value * .20;

// alert(`Your Tip is ${calcTip(billValue)}`);

// const bills = [125, 555, 44];

// const tips = bills.map(myFunction);

// function myFunction(value) {

//     return calcTip(value);
// }

// const total = bills.map(myfunction1)

// function myfunction1(value, i) {
//     return tips[i] + bills[i];
// }

// alert(`The Total is ${total}`)

//Coding Challenge #2



const calcTip = (value) => value >= 50 && value <= 300 ? value * .15 : value * .20;


const bills = [125, 555, 70];
const arrayTips = [0, 0, 0];


for (var i = 0; i < bills.length; i++) {
    arrayTips[i] = calcTip(bills[i]);
}


alert(arrayTips);

const totais = [0, 0, 0];

for (var i = 0; i < totais.length; i++) {
    totais[i] = arrayTips[i] + bills[i];
}

alert(totais);








