import socket from "./socket";

class SocketService {

  constructor(socket) {
    this.socket = socket;
  }

  // Singleton Design Pattern
  static getObject() {
    if (!this.instance) {
      this.instance = new SocketService;
    }
    return this.instance;
  }

  joinGame(id) {
    this.socket.emit("joinGame", {
      gameId: id,
    })
  }

  leavingGame(id) {
    this.socket.emit("leavingGame", {
      gameId: id
    })
  }

  updateGame(id, gameData) {
    this.socket.emit("gameUpdate", {
      gameId: id,
      gameData: gameData
    })
  }

  createMove(id, moveData) {
    this.socket.emit("createMove", {
      gameId: id,
      moveData: moveData
    })
  }

  onPlayerJoined(callback) {
    this.socket.on("playerJoined", callback);
  }

  offPlayerJoined(callback) {
    this.socket.off("playerJoined", callback);
  }

  onWaitingScreen(callback) {
    this.socket.on("waitingScreen", callback);
  }

  offWaitingScreen(callback) {
    this.socket.off("waitingScreen", callback);
  }

}
export default new SocketService(socket);