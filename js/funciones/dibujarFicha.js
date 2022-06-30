import {
  anchoFicha,
  altoFicha,
  tile,
  margenSup,
  margenLat,
} from "../variables/variables.js";

export const dibujarFicha = (
  ctx,
  x,
  y,
  color,
  pos = null,
  anchoF = anchoFicha,
  altoF = altoFicha
) => {
  if (tile && pos !== null) {
    ctx.drawImage(
      tile,
      pos * 512,
      0,
      512,
      512,
      anchoFicha * (x - margenLat),
      altoFicha * (y - margenSup),
      anchoFicha,
      altoFicha
    );
  } else {
    ctx.fillStyle = color;
    ctx.fillRect(
      (x - margenLat) * anchoF,
      (y - margenSup) * altoF,
      anchoF,
      altoF
    );
  }
};
