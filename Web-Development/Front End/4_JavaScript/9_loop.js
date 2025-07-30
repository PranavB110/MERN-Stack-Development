let guess=prompt("Enter the Faviourate Movie");
let favourite="Avtar";

while((guess!=favourite)){
    if(guess=="quit"){
        console.log("You loose the game as you have quite");
        break;
    }
    
    console.log("Wrong Guess");
    guess=prompt("wrong guess try Again");
}
if(guess==favourite){
    console.log("You won the game as you have guess correct");
}

let fruits=["Mango","Banana","Grapes","Fig","Guava"];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}