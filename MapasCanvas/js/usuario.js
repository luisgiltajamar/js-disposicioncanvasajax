

function Usuario(nombre) {
    this.nombre = nombre;

};

function Posicion(x, y, w, h, usuario) {
    this.nombre = usuario.nombre;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}