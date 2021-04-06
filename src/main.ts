import { Menu } from "./Menu/Menu";

function HelloWorld() {
    console.log("hello world")
}

function HelloSun() {
    console.log("hello sun")
}

const MENU = new Menu()

MENU.AddOption("print hello world", HelloWorld)
MENU.AddOption("print hello sun", HelloSun)
MENU.DisplayMenu()
MENU.Input()