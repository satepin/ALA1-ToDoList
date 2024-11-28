"use strict";
import readlineSync from 'readline-sync';
import { mainMenu } from './menus.js';
import { menuWarning } from './warning.js';
import { taskMake } from './taskMake.js';
let menu = 0;
let loop = true;
const taskList = [];
do{
    mainMenu();
    menu = Number(readlineSync.question());
    switch(menu){
        case 1:
            break;
        case 2:
            break;
        case 3:
            taskMake();
            break;
        case 0:
            loop = false;
            console.log('\nTerminando Programa...\n');
            break;
        default:
            menuWarning(menu);
            break;
    }
    menu = 0;
}while(loop);
