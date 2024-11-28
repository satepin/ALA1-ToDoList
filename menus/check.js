
import * as dates from 'date-fns';
export function isNewEmptyCheck(newTask){
    switch(newTask.titulo)
    {
        case "sin nombre":
        case undefined:
        case null:
            return 'titulo';
    }
    switch(newTask.status)
    {
        case undefined:
        case null:
            return 'estado';
    }
    switch(newTask.dificultad)
    {
        case undefined:
        case null:
            return 'dificultad';
    }
    return false;
}

export function dateCheck(dateString){
    let result = dates.parseISO(dateString)
    if(isNaN(result.getTime())){
        return false;
    }else{
        return true;
    }
}