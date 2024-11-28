import readlineSync from 'readline-sync';
import { task } from '../task/task.js';
import { menuWarning } from '../text/warning.js';
import { makeMenu } from '../text/menus.js';
import * as taskMakeData from '../prompt/taskMakeData.js';
import * as mapas from '../task/mapas.js'
export function taskMake(){
        
    let loop = true
    let menu = 0;
    const newTask = new task();
    do{
        makeMenu(newTask,mapas.estados,mapas.dificultades);
        menu = Number(readlineSync.question());
        switch(menu){
            case 1: //nombre ; check de 100 requerido
                newTask.titulo = taskMakeData.taskMakeString('el nombre','(100 caracteres maximo)');
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 2: //descripcion ; check de 500 requerido
                newTask.descripcion = taskMakeData.taskMakeString('una descripcion','500 caracteres maximo');
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 3: //estado
                newTask.status = (taskMakeData.taskMakeNumber('el estado','\n[1] Pendiente\n[2] En Curso\n[3] Terminada\n[4] Cancelada'))
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 4: //Dificultad
                newTask.dificultad = taskMakeData.taskMakeNumber('la dificultad' + '')
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 5: //vencimiento
            newTask.vencimiento = taskMakeData.taskSetDate('vencimiento',' (yyyy-mm-dd)')
            newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break
            case 0: //guardar tarea
                loop = false; //check de no nulleza requerido
                break;
            default:
                menuWarning(menu)
                break;
        }
        menu = 0;
    }while(loop) //retornar la tarea y pushearla a un array
}
