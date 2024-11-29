"use strict";
import readlineSync from 'readline-sync';
import { mainMenu, viewMenu } from './text/menus.js';
import { menuWarning } from './text/warning.js';
import { taskMake } from './menus/taskMake.js';
import { searchTask } from './menus/search.js';

let menu = 0;
let loop = true;
let newTask = false;
const taskList = [];
//preguntar nombre de usuario
let username = readlineSync.question('\nCual es tu nombre?\n...');
do{
    console.log('Hola ' + username + '!');
    mainMenu();
    menu = Number(readlineSync.question());
    switch(menu){
        case 1:
            viewMenu(taskList);
            break;
        case 2:
            newTask = searchTask(taskList, readlineSync.question('Ingrese el titulo de la tarea a buscar\n...'))
            if(newTask){
                taskMake(newTask);
                newTask = false;
            }
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
