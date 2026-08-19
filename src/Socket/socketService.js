import socket from "./socket";

class SocketService {

  constructor(socket) {
    this.socket = socket;
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

  onOpponentDisconnected(callback) {
    this.socket.on("opponentDisconnected", callback);
  }

  offOpponentDisconnected(callback) {
    this.socket.off("opponentDisconnected", callback);
  }

  onOpponentReconnected(callback) {
    this.socket.on("opponentReconnected", callback);
  }

  offOpponentReconnected(callback) {
    this.socket.off("opponentReconnected", callback);
  }

  onMoveCreated(callback) {
    this.socket.on("moveCreated", callback);
  }

  offMoveCreated(callback) {
    this.socket.off("moveCreated", callback);
  }
}
export default new SocketService(socket);