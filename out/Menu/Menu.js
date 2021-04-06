"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
class Menu {
    constructor() {
        this.MENU = new Array();
        this.STRING_INDEX = 0;
        this.FUNC_INDEX = 1;
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
    }
}
exports.Menu = Menu;
