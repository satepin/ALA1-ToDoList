"use strict";
import readlineSync from 'readline-sync';
import { mainMenu, viewMenu } from './text/menus.js';
import { menuWarning } from './text/warning.js';
import { taskMake } from './menus/taskMake.js';
let menu = 0;
let loop = true;
let newTask = false;
const taskList = [];
do{
    mainMenu();
    menu = Number(readlineSync.question());
    switch(menu){
        case 1:
            viewMenu()
            break;
        case 2:
            break;
        case 3:
            newTask = taskMake();
            if(newTask){
                taskList.push(newTask);
                newTask = false;
            } else {
                console.log('\nSe ha cancelado la tarea\n')
            }
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
