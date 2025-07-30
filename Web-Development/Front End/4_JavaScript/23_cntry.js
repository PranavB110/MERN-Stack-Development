// function addCountry(func,n){
//         let country=[];
        
//         for(let i=0;i<n;i++){
//             country.push(prompt(`Enter the country at index no: ${i}`));
//         }
//         func();
//         return country;
//         }
    
// let n=prompt("Enter the number of countries to enter:");
// let k=console.log(addCountry(count,n));
let addCountry=["India","Pakistan","China"];

function count(addCountry){
      let ansIndex=0;

    for (let i = 0; i < addCountry.length; i++){
        let longestLength=addCountry[ansIndex].length;
        let current=addCountry[i].length;

        if (current > longestLength) {
            ansIndex = i;
            console.log(i);
        }
    }
    
    return addCountry[ansIndex];
}  

console.log(count(addCountry));