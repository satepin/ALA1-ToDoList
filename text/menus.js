export function mainMenu(){
    console.log('Escoja una tarea\n[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n...')
}

export function makeMenu(task, estados, dificultades){
    console.log('\nEstas creando una nueva tarea\nFecha de creacion: ' + task.fechaCreacion + '\nUltima edicion: ' + task.ultimaEdicion);
    console.log('\n[1] Ingresa el Titulo: ' + task.titulo );
    console.log('\n[2] Ingresa la descripcion: ' + task.descripcion );
    console.log('\n[3] Estado: ' + estados.get(task.status));
    console.log('\n[4] Dificultad: ' + dificultades.get(task.dificultad));
    console.log('\n[5] Vencimiento: ' + task.vencimiento);
    console.log('\n[0] Guardar Tarea\n');
}