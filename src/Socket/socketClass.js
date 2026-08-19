import socket from "./socket";

class SocketClass {

  constructor() {
    this.instance = null;
  }

  // Singleton Design Pattern
  static getObject() {
    if (!this.instance) {
      this.instance = new SocketClass;
    }
    return this.instance;
  }

  joinGame(id) {
    socket.emit("joinGame", {
      gameId: id,
    })
  }

  leavingGame(id) {
    socket.emit("leavingGame", {
      gameId: id
    })
  }

  updateGame(id, gameData) {
    socket.emit("gameUpdate", {
      gameId: id,
      gameData: gameData
    })
  }

  createMove(id, moveData) {
    socket.emit("createMove", {
      gameId: id,
      moveData: moveData
    })
  }
}
export default SocketClass