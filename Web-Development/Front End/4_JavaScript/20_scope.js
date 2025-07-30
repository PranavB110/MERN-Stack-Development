{
let age=25;

if(age>=18){
    let str="adult";
    console.log(age);
    let num=2;
}
}
 
function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    } else{
        console.log("wrong request");
    }
}

let request="odd";