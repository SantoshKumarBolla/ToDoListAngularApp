import  { ToDoItem } from "./ToDoItem";

export class ToDo{
    user;
    items;

    constructor(){
        this.user = "MN";
        this.items = [
            new ToDoItem("Buy Flowers", false),
            new ToDoItem("Get Shoe", false),
            new ToDoItem("Collect Tickets", true),
            new ToDoItem("Call Tintin", false)
        ];
    }
}