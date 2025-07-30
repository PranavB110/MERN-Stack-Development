let toDo=[];

let request=prompt("Please Enter the request");
while(true){
      if(request=="quit"){
        console.log("Quitting the app");
        break;
      }

      else if(request=="add"){
        let task=prompt("Please enter the task you want to perform");
         toDo.push(task);
         console.log("Task Added");
      }

      else if(request=="list"){
        for(let i=0;i<toDo.length;i++){
            console.log(i,toDo[i]);
        }
      }

      else if(request=="delete"){
       let k= prompt("Enter the index of task to delete");
        toDo.splice(k,1);
        console.log("Task Deleted");
      }
      else{
        console.log("Wrong Request");
      }
      request=prompt("Enter the request");
}