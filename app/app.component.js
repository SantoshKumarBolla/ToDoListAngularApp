"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const todo_1 = require("./models/todo");
const ToDoItem_1 = require("./models/ToDoItem");
let AppComponent = class AppComponent {
    constructor() {
        this.toDo = new todo_1.ToDo();
        this.fontSize = "20px";
    }
    getName() {
        return this.toDo.user;
    }
    getToDoList() {
        return this.toDo.items;
    }
    addItem(newItem) {
        if (newItem !== "") {
            this.toDo.items.push(new ToDoItem_1.ToDoItem(newItem, false));
        }
    }
    deleteItem(item) {
        if (item !== "") {
            console.log("Item -> " + item);
            this.toDo.items = this.toDo.items.filter(d => d.action != item);
        }
    }
    getPendingToDo() {
        return this.toDo.items.filter(d => !d.done).length;
    }
    getToDoListCountClass() {
        return "p1 " + (this.toDo.items.length > 3 ? "bg-warning" : "bg-primary");
    }
    setFontSizeColor() {
        return {
            fontSize: "30px", color: this.getPendingToDo() > 3 ? "red" : "blue"
        };
    }
    lastUpdateOn() { return Date.now(); }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "app-todo",
        moduleId: module.id,
        templateUrl: "./app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
// import { Component } from "@angular/core";
// @Component(
//     {
//         selector: "app-todo",
//         template: `<div class="bg-warning">ToDo List will come here....</div>`
//     }
// )
// export class AppComponent {} 
//# sourceMappingURL=app.component.js.map