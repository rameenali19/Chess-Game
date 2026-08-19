import axios from "axios";
import { api } from "./axios";

class ApiChess {

  constructor() {
    this.apiClient = api
    this.instance = null;
  }

  // Singleton Design Pattern
  static getAPI() {
    if (!this.instance) {
      this.instance = new ApiChess;
    }
    return this.instance;
  }

  //Creating a new game
  async createGame(gameInfo) {
    const request = await this.apiClient.post("/games", gameInfo)
    return request.data;
  }

  //Creating a new guest
  async createGuest(guestId) {
    const request = await this.apiClient.post("/guests", guestId)
    return request.data;
  }

  //Get all games
  async getAllGames(page, limit, guestId, status) {
    const request = await this.apiClient.get("/games", {
      params: {
        page: page,
        limit: limit,
        guestId: guestId,
        status: status
      }
    }
    );
    return request.data;
  }

  //Get game by id and player
  async getGameAndPlayer(id, guestId) {
    console.log("API getGameAndPlayer", { id, guestId });
    const request = await this.apiClient.get(`/games/${id}/player/${guestId}`);
    return request.data;
  }

  //Join game by id 
  async joinGame(id, guestId) {
    const request = await this.apiClient.post(`/games/${id}/join`, {
      guestId
    });
    return request.data;
  }

  //Update game by id
  async updateGame(id, gameInfo) {
    const request = await this.apiClient.post(`/games/${id}`, gameInfo);
    return request.data;
  }

  //Delete game
  async deleteGame(id, guestId) {
    const request = await this.apiClient.delete(`/games/${id}`);
    return request.data;
  }


  //Get player by id
  async getPlayer(gameId, guestId) {
    const request = await this.apiClient.get(`/games/${gameId}/player`, {
      params: {
        guestId: guestId
      }
    });
    return request.data;
  }

  //Create moves by id
  async createMove(gameId, moveInfo) {
    const request = await this.apiClient.post(`/games/${gameId}/moves`, moveInfo);
    return request.data;
  }

  //Get all moves
  async getMoves(gameId) {
    const request = await this.apiClient.get(`/games/${gameId}/moves`);
    return request.data;
  }
}

export default ApiChess;
