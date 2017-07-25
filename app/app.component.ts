import { Component } from "@angular/core";
import  { ToDo } from "./models/todo";
import  { ToDoItem } from "./models/ToDoItem";

@Component(
    {
        selector: "app-todo",
        moduleId: module.id,
        templateUrl: "./app.component.html"
    }
)

export class AppComponent {
    toDo = new ToDo();

    getName(){
        return this.toDo.user;
    }

    getToDoList(){
        return this.toDo.items;
    }

    addItem(newItem){
        if(newItem !== ""){
            this.toDo.items.push(new ToDoItem(newItem, false));
        }
    }

    deleteItem(item){
        if(item!==""){
            console.log("Item -> " + item);
            this.toDo.items = this.toDo.items.filter(d => d.action != item);
        }
    }

    getPendingToDo(){
        return this.toDo.items.filter(d => !d.done).length;
    }

    getToDoListCountClass(){
        return "p1 " + (this.toDo.items.length > 3 ? "bg-warning" : "bg-primary");
    }

    fontSize: string = "20px";
    setFontSizeColor(){
        return {
            fontSize: "30px", color: this.getPendingToDo() > 3 ? "red":"blue" 
        };
    }

    lastUpdateOn() { return Date.now(); }

}

// import { Component } from "@angular/core";
// @Component(
//     {
//         selector: "app-todo",
//         template: `<div class="bg-warning">ToDo List will come here....</div>`
//     }
// )
// export class AppComponent {}