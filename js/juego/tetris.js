import { ObjPieza } from "../objetos/objPieza.js";
import { ObjTablero } from "../objetos/objTablero.js";
import { inicializarTeclado } from "../teclado/teclado.js";
import {
  FPS,
  altoFicha,
  anchoFicha,
  altoCanvas,
  anchoCanvas,
  altoTablero,
  anchoTablero,
} from "../variables/variables.js";

var canvas;
var ctx;

export var tablero;
export var pieza;

const inicializar = () => {
  //Inicializamos la variables globales
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //Asignamos el alto y el ancho del canvas
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;

  tablero = new ObjTablero(altoTablero, anchoTablero, ctx);
  pieza = new ObjPieza(altoFicha, anchoFicha, ctx);
  pieza.obtenerTablero(tablero.tablero);
  // console.log(listaPiezas);

  inicializarTeclado(pieza, tablero);

  //Iniciamos el bucle principal
  setInterval(() => {
    principal();
  }, 1000 / FPS);
};

document.getElementById("body").onload = inicializar();

const borrarCanvas = () => {
  //La manera mas rapida de borrar el canvas
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
};

const principal = () => {
  borrarCanvas();
  tablero.dibujarTablero();
  if (!pieza.hayDerrota) {
    pieza.dibujarPieza();
    pieza.caerPieza();
  }
};
