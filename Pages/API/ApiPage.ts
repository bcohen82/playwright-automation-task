import { Page } from "@playwright/test";

export class ApiPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async checkBoardDelete(data, boardId: string) {
        let flag = false
        const temp = data.find(element => {
            if(element.id === boardId){
                console.log('true');
                console.log(element.id);
                flag = true                
            } 
        })
        return flag
    }
}