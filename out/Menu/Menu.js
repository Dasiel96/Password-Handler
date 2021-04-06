"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var prompt = require("prompt-sync")();
class Menu {
    constructor() {
        this.MENU = new Array();
        this.STRING_INDEX = 0;
        this.FUNC_INDEX = 1;
        this.EXIT = "exit";
    }
    DisplayElement(i) {
        console.log(`${i + 1}. ${this.MENU[i][this.STRING_INDEX]}`);
    }
    AddOption(option_msg, option_behavior) {
        const MENU_OPTION = new Array(2);
        MENU_OPTION[this.STRING_INDEX] = option_msg;
        MENU_OPTION[this.FUNC_INDEX] = option_behavior;
        this.MENU.push(MENU_OPTION);
    }
    DisplayMenu() {
        for (let i = 0; i < this.MENU.length; i++) {
            this.DisplayElement(i);
        }
        console.log(`type '${this.EXIT}' to leave`);
    }
    Input() {
        let collect_input = true;
        let index = -1;
        while (collect_input) {
            let input = prompt("please enter the number of the desired option: ");
            try {
                index = Number(input) - 1;
                if (!Number.isInteger(index)) {
                    throw Error();
                }
                else if (index < 0 || index >= this.MENU.length) {
                    throw Error();
                }
                collect_input = false;
            }
            catch (_a) {
                if (input === this.EXIT) {
                    collect_input = false;
                }
                else {
                    console.log(`\nplease enter a valid integer between 1 and ${this.MENU.length}\n`);
                }
            }
        }
        if (index >= 0) {
            this.MENU[index][this.FUNC_INDEX]();
        }
    }
}
exports.Menu = Menu;
