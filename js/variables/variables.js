export const FPS = 50;

export const altoFicha = 38;
export const anchoFicha = 38;

export const altoTablero = 21;
export const anchoTablero = 12;

export const margenSup = 4;
export const margenInf = 1;

//margenLat representa margenIzq y margenDer
export const margenLat = 1;

export const altoCamara = 16;
export const anchoCamara = 10;

// export const altoCanvas = altoTablero * altoFicha;
// export const anchoCanvas = anchoTablero * anchoFicha;
export const altoCanvas = (altoTablero - margenSup - margenInf) * altoFicha;
export const anchoCanvas = (anchoTablero - 2 * margenLat) * anchoFicha;

export const colors = {
  rojo: "#FF0000",
  naranja: "#FF7F00",
  amarillo: "#FFFF00",
  verde: "#00FF00",
  azul: "#0000FF",
  violeta: "#4B0082",
  indigo: "#9400D3",
  blanco: "#FFFFFF",
  negro: "#000000",
};
// export const rojo = "#FF0000";
// export const naranja = "#FF7F00";
// export const amarillo = "#FFFF00";
// export const verde = "#00FF00";
// export const azul = "#0000FF";
// export const violeta = "#4B0082";
// export const indigo = "#9400D3";
// export const blanco = "#FFFFFF";
// export const negro = "#000000";

export const tile = new Image();
tile.src = "img/tiles.png";

export const colorTile = {
  amarilloTile: 0,
  rojoTile: 1,
  verdeTile: 2,
  indigoTile: 3,
  naranjaTile: 4,
  celesteTile: 5,
  azulTile: 6,
};
