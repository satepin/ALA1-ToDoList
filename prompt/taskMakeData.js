import readlineSync from 'readline-sync';
import { menuWarning } from '../text/warning.js';
import { format, parse, getTime } from 'date-fns';
export function taskMakeNumber(dataName, extraData){
    let taskData = Number(readlineSync.question('\nIngrese ' + ' de la tarea ' + extraData + '\n'));
    if(isNaN(taskData)){
        menuWarning(taskData);
        return;
    }
    return taskData;
}

export function taskMakeString(dataName, extraData){
    let taskData = readlineSync.question('\nIngrese ' + ' de la tarea ' + extraData + '\n');
    return taskData;
}

export function taskSetDate(dataName, extraData){
    let taskData = readlineSync.question('\nIngrese la fecha de ' + dataName + extraData +'\n');
    taskData = format(parse(taskData, 'yyyy-MM-dd', new Date()) + 'Hora Estandar Argentina');
    // check de fecha valida requerido ; letras, numeros invalidos, menor a la fecha de creacion
    return taskData;
}

export function lastEditDate(){
   let editDate = format(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
   return editDate
}