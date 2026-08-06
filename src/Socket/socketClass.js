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
    console.log("joinGame", id);
    socket.emit("joinGame", {
      gameId: id,
    })
  }

  leavingGame(id) {
    console.log("leavingGame", id);

    socket.emit("leavingGame", {
      gameId: id
    })
  }

  updateGame(id, gameData) {
    console.log("updateGame", id);
    socket.emit("gameUpdate", {
      gameId: id,
      gameData: gameData
    })
  }
}
export default SocketClass