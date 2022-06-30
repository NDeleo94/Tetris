import { pieza, tablero } from "../juego/tetris.js";

const rotar = () => {
  console.log("estoy rotando");
  pieza.rotarPieza();
};
const moverIzquierda = () => {
  console.log("estoy izquierdo");
  pieza.moverIzquierda();
};
const moverDerecha = () => {
  console.log("estoy derecho");
  pieza.moverDerecha();
};
const bajar = () => {
  console.log("estoy bajando");
  pieza.bajarPieza();
};

const reiniciar = () => {
  tablero.reiniciarTablero();
  pieza.obtenerTablero(tablero.tablero);
  pieza.reiniciarPieza();
};

document.getElementById("btnRotar").onclick = rotar;
document.getElementById("btnIzq").onclick = moverIzquierda;
document.getElementById("btnDer").onclick = moverDerecha;
document.getElementById("btnBajar").onclick = bajar;
document.getElementById("btnReset").onclick = reiniciar;
