import readlineSync from 'readline-sync';
import { makeMenu } from './menus.js';
import { task } from './task.js';
import { menuWarning } from './warning.js';
export function taskMake(){
        
    let loop = true
    let menu = 0;
    let newTask = new task;
    do{
        makeMenu(newTask);
        menu = Number(readlineSync.question());
        switch(menu){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break
            case 6:
                loop = false;
                break;
            default:
                menuWarning(menu)
                break;
        }
        menu = 0;
    }while(loop)
}
