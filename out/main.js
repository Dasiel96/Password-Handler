"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("./Menu/Menu");
function HelloWorld() {
    console.log("hello world");
}
function HelloSun() {
    console.log("hello sun");
}
const MENU = new Menu_1.Menu();
MENU.AddOption("print hello world", HelloWorld);
MENU.AddOption("print hello sun", HelloSun);
MENU.DisplayMenu();
