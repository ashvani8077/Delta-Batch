let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=='quit'){
        console.log("Quiting app");
        break;
    }
    if(req=='list'){
        for(task of todo){
            console.log(task);
        }
    }
    else if(req=='add'){
        let task=prompt("Please enter your task");
        todo.push(task);
        console.log("Task Added")
    }
    else if(req=='delete'){
        let task=prompt("Please enter the task you want to delete");
        for(t of todo){
            if(t==task){
                todo.splice(todo.indexOf(t),1);
            }
        }
    }
    else{
        console.log("Enter valid");
    }
}