import estados from './estados.js';
function task(titulo,descripcion,statusindex,fechaCreacion,ultimaEdicion,vencimiento,dificultad) {
        this.titulo = titulo; //Array(100);
        this.descripcion = descripcion; //Array(500);
        this.status = estados[statusindex];
        this.fechaCreacion = fechaCreacion;
        this. ultimaEdicion = ultimaEdicion;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
}
export { task };
