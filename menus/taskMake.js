import readlineSync from 'readline-sync';
import { task } from '../task/task.js';
import { menuWarning } from '../text/warning.js';
import { makeMenu } from '../text/menus.js';
import * as taskMakeData from '../prompt/taskMakeData.js';
import * as mapas from '../task/mapas.js'
import { isNewEmptyCheck , rangeCheck } from './check.js';
export function taskMake(editTask){
        
    let loop = true
    let check = true;
    let menu = 6;
    let newTask = null;
    if(!editTask){
        newTask = new task();
    } else{
        newTask = editTask;
    }
    
    do{
        makeMenu(newTask,mapas.estados,mapas.dificultades);
        menu = Number(readlineSync.question());
        switch(menu){
            case 1: //nombre
                newTask.titulo = taskMakeData.taskMakeString('el nombre','(100 caracteres maximo)',100);
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 2: //descripcion
                newTask.descripcion = taskMakeData.taskMakeString('una descripcion','(500 caracteres maximo)',500);
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 3: //estado ; check de status valido
                newTask.status = (taskMakeData.taskMakeNumber('el estado','\n[1] Pendiente\n[2] En Curso\n[3] Terminada\n[4] Cancelada'))
                if(!rangeCheck(newTask.status,4)){ newTask.status = 1 };
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 4: //Dificultad
                newTask.dificultad = taskMakeData.taskMakeNumber('la dificultad' + '')
                if(!rangeCheck(newTask.dificultad,3)){ newTask.dificultad = 1 };
                newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break;
            case 5: //vencimiento
            newTask.vencimiento = taskMakeData.taskSetDate('vencimiento',' (yyyy-mm-dd)')
            newTask.ultimaEdicion = taskMakeData.lastEditDate()
                break
            case 0: //guardar tarea
                check = isNewEmptyCheck(newTask)
                if(!check){
                    loop = false;
                    return newTask;
                }else{
                    console.log('\nEl atributo ' + check + ' se encuentra no definido o vacio, por favor corregir para guardar la tarea.');
                }
                break;
            case -1:
                loop = false;
                return false;
            default:
                menuWarning(menu)
                break;
        }
        menu = 6;
    }while(loop)
}
