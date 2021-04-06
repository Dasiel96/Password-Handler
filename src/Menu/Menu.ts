export class Menu {
    private readonly MENU = new Array<Array<string | (() => void)>>()
    private readonly STRING_INDEX = 0
    private readonly FUNC_INDEX = 1

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
    }
}