import { dibujarFicha } from "../funciones/dibujarFicha.js";
import {
  margenLat,
  margenSup,
  colorTile,
  colors,
  margenInf,
} from "../variables/variables.js";

export class ObjTablero {
  constructor(altoTablero, anchoTablero, ctx) {
    this.tablero = [];
    this.altoTablero = altoTablero;
    this.anchoTablero = anchoTablero;

    this.ctx = ctx;

    this.nuevoTablero();
  }

  nuevoEstatico() {
    this.tablero = [
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //0
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //5
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //10
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //15
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], //20
    ];
  }

  reiniciarTablero() {
    this.tablero = [];
    this.nuevoTablero();
  }

  nuevoTablero() {
    for (let py = 0; py < this.altoTablero; py++) {
      this.tablero.push([]);
      for (let px = 0; px < this.anchoTablero; px++) {
        if (px === 0 || px === this.anchoTablero - 1) {
          this.tablero[py].push(9);
        } else {
          if (py === this.altoTablero - 1) {
            this.tablero[py].push(9);
          } else {
            this.tablero[py].push(0);
          }
        }
      }
    }
  }

  dibujarTablero() {
    for (let py = margenSup; py < this.altoTablero - margenInf; py++) {
      for (let px = 0; px < this.anchoTablero - 0; px++) {
        switch (this.tablero[py][px]) {
          case 0:
            dibujarFicha(this.ctx, px, py, colors.negro);
            break;
          case 1:
            dibujarFicha(this.ctx, px, py, colors.azul, colorTile.azulTile);
            break;
          case 2:
            dibujarFicha(this.ctx, px, py, colors.rojo, colorTile.rojoTile);
            break;
          case 3:
            dibujarFicha(
              this.ctx,
              px,
              py,
              colors.naranja,
              colorTile.naranjaTile
            );
            break;
          case 4:
            dibujarFicha(
              this.ctx,
              px,
              py,
              colors.amarillo,
              colorTile.amarilloTile
            );
            break;
          case 5:
            dibujarFicha(this.ctx, px, py, colors.verde, colorTile.verdeTile);
            break;
          case 6:
            dibujarFicha(
              this.ctx,
              px,
              py,
              colors.violeta,
              colorTile.celesteTile
            );
            break;
          case 7:
            dibujarFicha(this.ctx, px, py, colors.indigo, colorTile.indigoTile);
            break;
          default:
            this.ctx.fillStyle = colors.blanco;
            break;
        }
        // if (this.tablero[py][px] === 0) {
        //   ctx.fillStyle = "#333";
        //   ctx.fillRect(px * anchoFicha, py * altoFicha, anchoFicha, altoFicha);
        // } else {
        //   ctx.fillStyle = "#888";
        //   ctx.fillRect(px * anchoFicha, py * altoFicha, anchoFicha, altoFicha);
        // }
      }
    }
  }
}
