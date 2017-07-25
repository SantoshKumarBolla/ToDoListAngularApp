"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoItem_1 = require("./ToDoItem");
class ToDo {
    constructor() {
        this.user = "MN";
        this.items = [
            new ToDoItem_1.ToDoItem("Buy Flowers", false),
            new ToDoItem_1.ToDoItem("Get Shoe", false),
            new ToDoItem_1.ToDoItem("Collect Tickets", true),
            new ToDoItem_1.ToDoItem("Call Tintin", false)
        ];
    }
}
exports.ToDo = ToDo;
//# sourceMappingURL=todo.js.map