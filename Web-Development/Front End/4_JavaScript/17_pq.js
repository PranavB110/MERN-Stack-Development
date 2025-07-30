let dice=Math.floor(Math.random()*6)+1;
console.log(dice);

const car={
    name:"Audi",
    model:"M65",
    color:"black"
}

const person={
    name:"Pranav",
    Age:20,
    City:"Pune"
}

person.City="New York";
console.log(person);

person.Country="United States";
console.log(person);

function rollDice(){
    let k=Math.floor(Math.random()*6)+1;
    console.log(k);
}

rollDice();
