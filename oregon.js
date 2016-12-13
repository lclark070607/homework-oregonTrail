function makeTraveler(name) {
    return {
        amount: 50,
        name: name,
        isHealthy: true,
    };
}
let henrietta = makeTraveler('henrietta');
let juan = makeTraveler('juan')
console.log(henrietta);
console.log(juan);


function makeWagon(capacity) {

    return {
        passengers: [],
        capacity: capacity,
    };

}
let ride = makeWagon(5);
console.log(ride);


function hunt(traveler) {
    //50% chance to increase the traveler's food by 100 (successful hunt), 
    //and 50% to increase it by 0 (unsuccessful hunt).
    //1. successful hunt = hunt >.5
    //2. successful hunt increase points by 100

    if (Math.random() >= .5) {
        traveler.amount = traveler.amount + 100;
    };
}

hunt(juan);
console.log(juan);



    function eat(traveler) {
       //Consumes 20 of the traveler's food. 
       //If the traveler doesn't have 20 food, the traveler is no longer healthy.
            
            
            traveler.amount = (traveler.amount - 20);
            if (traveler.amount < 20); {
              traveler.isHealthy = false;
          };
          
      } 
      eat(henrietta);
      console.log(henrietta)
      eat(juan);
      console.log(juan);
       





//Code Should Work:
// let wagon = makeWagon(5);
// let traveler = makeTraveler('Henrietta');
// let traveler2 = makeTraveler('Juan');

//hunt(traveler); // maybe get more food
//eat(traveler2);
//eat(traveler2); // juan is hungry
//join(wagon, traveler);
//join(wagon, traveler2);

//console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
//console.log(food(wagon)); // print juan's food + henrietta's food