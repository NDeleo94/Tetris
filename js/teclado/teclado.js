export const inicializarTeclado = (pieza, tablero) => {
  document.addEventListener("keydown", (tecla) => {
    switch (tecla.key) {
      case "ArrowUp":
        pieza.rotarPieza();
        break;
      case "ArrowDown":
        pieza.bajarPieza();
        break;
      case "ArrowLeft":
        pieza.moverIzquierda();
        break;
      case "ArrowRight":
        pieza.moverDerecha();
        break;
      case " ":
        tablero.reiniciarTablero();
        pieza.obtenerTablero(tablero.tablero);
        pieza.reiniciarPieza();
      default:
        break;
    }
  });
};
