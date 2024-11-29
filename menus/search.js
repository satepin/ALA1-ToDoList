import readlineSync from 'readline-sync';

export function searchTask(taskList, busqueda){
    let i = 0;
    let foundCount = 0;
    let foundList = [];
    for(i = 0; taskList.length; i++){
        if (toLowerCase(taskList[i].titulo).includes(toLowerCase(busqueda))){
            foundCount++;
            foundList[foundCount] = taskList[i];
            console.log('[' + foundCount + '] ' + taskList[i].titulo);
        }
    }
    i = readlineSync.question('¿Deseas ver los detalles de alguna?\nIntroduce el numero o 0 para volver');
    if (isNaN(i) || i == 0 || i>foundCount){ return false} else {
        return foundList[Math.floor(i)];
    }
}