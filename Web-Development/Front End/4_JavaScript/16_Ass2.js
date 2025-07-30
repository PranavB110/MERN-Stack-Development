const max=prompt("Enter the max range in which you want to get the number");

let num=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");
while(true){
    if(num==guess){
        console.log("Congratulation!! You found the number!!");
        break;
    }
    else if(guess=="quit"){
        console.log("You are quitting")
        break;
    }
    else if(guess<num){
        guess=prompt("Number is small than actual one. Try Again");
    }
    else{
        guess=prompt("number is greater than actual one. Try again");
    }
    
}