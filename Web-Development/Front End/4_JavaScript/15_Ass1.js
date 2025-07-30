let range=prompt("Enter the range in which you have to generate number");
let arr=[1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1);
        
    }  
}
console.log(arr);

// apply concept of below sum problem here too
let number="287152";
for(let i=0;i<number.length;i++){
    let count=1;
    if(number[i]==number){
        count+=1;
    }
}

// let n='287152';
// let sum=0;

// for(let i=0;i<n.length;i++){
//     sum=parseInt(n[i]) + sum;

// }

// console.log(sum);

let n=287152;
let sum=0;
let copy=number;
while(copy>0){
    digit=copy%10;
    sum+=digit;
    copy=Math.floor(copy/10);

}

 console.log(sum);


let k=prompt("Enter the number whose Factorial to find");
let mult=1;
 for(let i=1; i<=k;i++){
     mult=i*mult;
 }
 console.log(mult);


 let lar=[1,4,2,6,8,3,9,54];
 let largestNum=0;

 for(let i=0;i<lar.length;i++){
    if(lar[i]>=largestNum){
        largestNum=lar[i];
    }
 }
 console.log(largestNum);

 const post={
    username:"@pranavbhakare_110",
    content:"Placement in MNC",
    likes:2000,
    repost:20,
    tags:["@apnacollege","Sigma 6.0"]
 };

 let random=Math.floor(Math.random()*100)+1;
 let randoms=Math.floor(Math.random()*5)+1;