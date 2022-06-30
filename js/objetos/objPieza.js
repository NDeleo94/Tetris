import { dibujarFicha } from "../funciones/dibujarFicha.js";
import { listaPiezas } from "../piezas/listaPiezas.js";
import {
  colors,
  colorTile,
  margenInf,
  margenLat,
  margenSup,
} from "../variables/variables.js";

export class ObjPieza {
  constructor(altoFicha, anchoFicha, ctx) {
    this.tipo = 0;
    this.angulo = 0;
    this.y = 0;
    this.x = 0;

    this.altoFicha = altoFicha;
    this.anchoFicha = anchoFicha;

    this.retraso = 50;
    this.fotograma = 0;

    this.tablero;

    this.ctx = ctx;

    this.hayDerrota = 0;

    this.nuevaPieza();
  }

  obtenerTablero(tablero) {
    this.tablero = tablero;
  }

  nuevaPieza() {
    this.tipo = Math.floor(Math.random() * listaPiezas.length);
    // this.tipo = 3;
    this.angulo = 0;
    this.y = 0;
    this.x = 5;
  }

  caerPieza() {
    if (this.fotograma < this.retraso) {
      this.fotograma++;
    } else {
      if (!this.hayColision(this.angulo, this.x, this.y + 1)) {
        this.y++;
        this.fotograma = 0;
      } else {
        if (!this.hayDerrota) {
          this.fijarPieza();
          this.limpiarFila();
          this.nuevaPieza();
          this.hasPerdido();
        }
        if (this.hayDerrota) {
          console.log(this.tablero);
          console.log("HAS PERDIDO");
          alert("HAS PERDIDO");
          alert("BARRA ESPACIADORA o el boton REINICIAR para un nuevo juego");
        }
      }
    }
  }

  fijarPieza() {
    for (let py = 0; py < listaPiezas[this.tipo][this.angulo].length; py++) {
      for (
        let px = 0;
        px < listaPiezas[this.tipo][this.angulo][py].length;
        px++
      ) {
        if (listaPiezas[this.tipo][this.angulo][py][px] !== 0) {
          this.tablero[this.y + py][this.x + px] =
            listaPiezas[this.tipo][this.angulo][py][px];
        }
      }
    }
  }

  rotarPieza() {
    let anguloNuevo = this.angulo;
    if (anguloNuevo < 3) {
      anguloNuevo++;
    } else {
      anguloNuevo = 0;
    }
    if (!this.hayColision(anguloNuevo, this.x, this.y)) {
      this.angulo = anguloNuevo;
    }
    console.log("Rotar");
  }

  bajarPieza() {
    if (!this.hayColision(this.angulo, this.x, this.y + 1)) this.y++;
    console.log("Abajo");
  }

  moverIzquierda() {
    if (!this.hayColision(this.angulo, this.x - 1, this.y)) this.x--;
    console.log("Izquierda");
  }

  moverDerecha() {
    if (!this.hayColision(this.angulo, this.x + 1, this.y)) this.x++;
    console.log("derecha");
  }

  hayColision(anguloNuevo, xNueva, yNueva) {
    for (let py = 0; py < listaPiezas[this.tipo][anguloNuevo].length; py++) {
      for (
        let px = 0;
        px < listaPiezas[this.tipo][anguloNuevo][py].length;
        px++
      ) {
        if (listaPiezas[this.tipo][anguloNuevo][py][px] !== 0) {
          if (this.tablero[yNueva + py][xNueva + px] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  hasPerdido() {
    for (let px = margenLat; px < this.tablero[2].length - margenLat; px++) {
      if (this.tablero[2][px] !== 0) {
        this.hayDerrota = 1;
      }
    }
    // return this.derrota = 0;
  }

  esFilaCompleta(py) {
    for (let px = margenLat; px < this.tablero[py].length - margenLat; px++) {
      //Si encuentra un espacio vacio
      if (this.tablero[py][px] === 0) return false;
    }
    return true;
  }

  limpiarFila() {
    //Se evalua de arriba hacia abajo por la caida de las piezas
    for (let py = 0; py < this.tablero.length - margenInf; py++) {
      if (this.esFilaCompleta(py)) {
        for (let px = margenLat; px < this.tablero[py].length - margenLat; px++)
          this.tablero[py][px] = 0;
        this.bajarBloques(py);
      }
    }
  }

  bajarBloques(fila) {
    for (let py = fila; py > 0; py--) {
      for (let px = margenLat; px < this.tablero[py].length - margenLat; px++) {
        this.tablero[py][px] = this.tablero[py - 1][px];
      }
    }
  }

  dibujarPieza() {
    for (let py = 0; py < listaPiezas[this.tipo][this.angulo].length; py++) {
      for (
        let px = 0;
        px < listaPiezas[this.tipo][this.angulo][py].length;
        px++
      ) {
        if (listaPiezas[this.tipo][this.angulo][py][px] !== 0) {
          switch (this.tipo + 1) {
            case 1:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.azul,
                colorTile.azulTile
              );
              break;
            case 2:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.rojo,
                colorTile.rojoTile
              );
              break;
            case 3:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.naranja,
                colorTile.naranjaTile
              );
              break;
            case 4:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.amarillo,
                colorTile.amarilloTile
              );
              break;
            case 5:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.verde,
                colorTile.verdeTile
              );
              break;
            case 6:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.violeta,
                colorTile.celesteTile
              );
              break;
            case 7:
              dibujarFicha(
                this.ctx,
                this.x + px,
                this.y + py,
                colors.indigo,
                colorTile.indigoTile
              );
              break;
            default:
              this.ctx.fillStyle = blanco;
              break;
          }
        }
      }
    }
  }

  reiniciarPieza() {
    this.hayDerrota = 0;
    this.nuevaPieza();
  }
}
