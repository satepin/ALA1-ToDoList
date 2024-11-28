export function mainMenu(){
    console.log('Escoja una tarea\n[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n...')
}

export function makeMenu(task, estados, dificultades){
    console.log('Estas creando una nueva tarea\nFecha de creacion: ' + task.fechaCreacion + '\nUltima edicion: ' + task.ultimaEdicion);
    console.log('[1] Ingresa el Titulo: ' + task.titulo );
    console.log('[2] Ingresa la descripcion: ' + task.descripcion );
    console.log('[3] Estado: ' + estados.get(task.status));
    console.log('[4] Dificultad: ' + dificultades.get(task.dificultad));
    console.log('[5] Vencimiento: ' + task.vencimiento);
    console.log('[0] Guardar Tarea');
    console.log('[-1] Cancelar Tarea\n');
}

export function searchMenu(){
    
}

export function viewMenu(taskList){
    let i = 0;
    if(taskList.length=0){
        console.log('Tu lista de tareas se encuentra vacia')
    }else{
        console.log('\nEstas son todas tus tareas:')
        for(i = 0; i<taskList.length; i++){
            console.log('[' + i + '] ' + taskList[i].titulo);
        }
    }
}