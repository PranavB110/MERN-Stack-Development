function checkCount(str){
    let ans="aeiou";
    let count=0;
    for(let i=0;i<str.length;i++){
        let currentChar=str[i];
       
         if(ans.indexOf(currentChar)===-1){
            count+=1;
         }
    }
    return count;
}

console.log(checkCount("abscioa"));

let range=Math.floor(Math.random()*10)+21;
console.log(range);