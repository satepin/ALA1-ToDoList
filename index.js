"use strict";
import readlineSync from 'readline-sync';
import * as mainMenu from 'menus.js';
import PromptSync from 'prompt-sync';
let menu = 0;
let loop = true;
do{
    mainMenu()
menu = Number(readlineSync());
switch(menu){

}

}while(loop);
