function sum(n){
      let add=0;
      for(let i=0;i<=n;i++){
        add=add+i;
      }
      return add;
}

console.log(sum(10));



function addStr(arr){
       let concat="";
       for(let i=0;i<arr.length;i++){
        concat = concat + arr[i];
       }
       return concat;
}

let arr=["Pranav","Ananda","Bhakare","From","Pune"];
// let k=;
console.log(addStr(arr));