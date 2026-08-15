import axios from "axios";
import { api } from "./Axios";

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

  //creating a new game
  async createGame(gameInfo) {
    const request = await this.apiClient.post("/games", gameInfo)
    return request.data;
  }

  //creating a new guest
  async createGuest(guestId) {
    const request = await this.apiClient.post("/guests", guestId)
    return request.data;
  }

  //get all games
  async getAllGames(page, limit, guestId) {
    const request = await this.apiClient.get("/games", {
      params: {
        page: page,
        limit: limit,
        guestId: guestId
      }
    }

    );
    return request.data;
  }

  //get game by id and player
  async getGameAndPlayer(id, guestId) {
    console.log("API getGameAndPlayer", { id, guestId });
    const request = await this.apiClient.get(`/games/${id}/player/${guestId}`);
    return request.data;
  }

  //join game by id 
  async joinGame(id, guestId) {
    const request = await this.apiClient.post(`/games/${id}/join`, {
      guestId
    });
    return request.data;
  }

  //update game by id
  async updateGame(id, gameInfo) {
    const request = await this.apiClient.post(`/games/${id}`, gameInfo);
    return request.data;
  }

  //delete game
  async deleteGame(id, guestId) {
    const request = await this.apiClient.delete(`/games/${id}`);
    return request.data;
  }


  //get player by id
  async getPlayer(gameId, guestId) {
    const request = await this.apiClient.get(`/games/${gameId}/player`, {
      params: {
        guestId: guestId
      }
    });
    return request.data;
  }

  //create moves by id
  async createMove(gameId, moveInfo) {
    const request = await this.apiClient.post(`/games/${gameId}/moves`, moveInfo);
    return request.data;
  }
}

export default ApiChess;
