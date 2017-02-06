function makeTraveler(name) {
    return {
        amount: 25,
        name: name,
        isHealthy: true,
    };
}
let traveler = makeTraveler('henrietta');
let traveler2 = makeTraveler('juan')
console.log(traveler);
console.log(traveler2);
console.log(traveler.name);
console.log(traveler.isHealthy);
console.log(traveler2.isHealthy);


function makeWagon(capacity) {

    return {
        passengers: [],
        capacity: capacity,
    };

}
let ride = makeWagon(5);
console.log(ride)


function hunt(traveler) {
    //50% chance to increase the traveler's food by 100 (successful hunt), 
    //and 50% to increase it by 0 (unsuccessful hunt).
    //1. successful hunt = hunt >.5
    //2. successful hunt increase points by 100

    if (Math.random() >= .5) {
        traveler.amount = traveler.amount + 100;
    };
}

hunt(traveler2);
console.log(traveler2);


function eat(traveler) {
    traveler.amount = (traveler.amount - 20);
    if (traveler.amount < 20) {
        traveler.isHealthy = false;
    };
};

eat(traveler);
console.log(traveler)
eat(traveler2);
console.log(traveler2)

// console.log(ride.passengers.length)
function join(wagon, peep) {

    if (wagon.passengers.length < wagon.capacity) {
        wagon.passengers.push(peep)
    }

};

join(ride, traveler);
join(ride, traveler2);
console.log(ride)



function quarantine(wagon) {

    for (i = 0; i < wagon.passengers.length; i++) {
        if (wagon.passengers[i].isHealthy === false) {
            return true;
        };
    }
    return false;
};

console.log(quarantine(ride));

// console.log(quarantine(ride));
// function food(wagon) {
//     let total = 0;
//     total = (total + wagon.traveler.amount + wagon.traveler2.amount);
// }
// console.log(total);
            //Return the total amount of food among all occupants of the wagon.



// //Code Should Work:
// // let wagon = makeWagon(5);
// // let traveler = makeTraveler('Henrietta');
// // let traveler2 = makeTraveler('Juan');

// //hunt(traveler); // maybe get more food
// //eat(traveler2);
// //eat(traveler2); // juan is hungry
// //join(wagon, traveler);
// //join(wagon, traveler2);

// //console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
// //console.log(food(wagon)); // print juan's food + henrietta's food