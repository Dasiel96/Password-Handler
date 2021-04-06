var prompt = require("prompt-sync")()

export class Menu {
    private readonly MENU = new Array<Array<string | (() => void)>>()
    private readonly STRING_INDEX = 0
    private readonly FUNC_INDEX = 1
    private readonly EXIT = "exit"

    private DisplayElement(i: number) {
        console.log(`${i+1}. ${this.MENU[i][this.STRING_INDEX]}`)
    }

    AddOption(option_msg: string, option_behavior: () => void) {
        const MENU_OPTION = new Array<string | (() => void)>(2)
        MENU_OPTION[this.STRING_INDEX] = option_msg
        MENU_OPTION[this.FUNC_INDEX] = option_behavior
        this.MENU.push(MENU_OPTION)
    }

    DisplayMenu() {
        for(let i = 0; i < this.MENU.length; i++) {
            this.DisplayElement(i)
        }
        console.log(`type '${this.EXIT}' to leave`)
    }

    Input() {
        let collect_input = true
        let index = -1
        while (collect_input) {
            let input = prompt("please enter the number of the desired option: ")
            try {
                index = Number(input) - 1
                if (!Number.isInteger(index)) {
                    throw Error()
                }
                else if (index < 0 || index >= this.MENU.length) {
                    throw Error()
                }
                collect_input = false
            }
            catch {
                if (input === this.EXIT) {
                    collect_input = false
                }
                else {
                    console.log(`\nplease enter a valid integer between 1 and ${this.MENU.length}\n`)
                }
            }
        }

        if (index >= 0) {
            (this.MENU[index][this.FUNC_INDEX] as CallableFunction)()
        }
    }
}