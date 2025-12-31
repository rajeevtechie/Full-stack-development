let req = prompt("Enter your request");
let todo = [];
while (true) {
    if (req == "add") {
        let task = prompt("Enter the task to add");
        todo.push(task);
        console.log("Task added");
    }

    else if (req == "list") {
        console.log("-------Items------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------------")
    }

    else if (req == "quit") {
        console.log("Quitting.");
        break;
    }

    else if (req == "remove") {
        let index = prompt("Enter the index value to remove the task");
        todo.splice(index, 1);
        console.log("item deleted");
    }
    
    else{
        console.log("Enter valid request");
    }
    req = prompt("Enter your request");
}