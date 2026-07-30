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

  //get game by id
  async getGame(id, guestId) {
    const request = await this.apiClient.get(`/games/${id}`, {
      params: {
        guestId: guestId
      }
    });
    return request.data;
  }

  //update game by id
  async updateGame(id, gameInfo) {
    const request = await this.apiClient.post(`/games/${id}`, gameInfo);
    return request.data;
  }

  //delete game
  async deleteGame(id) {
    const request = await this.apiClient.delete(`/games/${id}`);
    return request.data;
  }

  //create Player
  async createPlayer(gameId) {
    const request = await this.apiClient.post(`/games/${gameId}/player`);
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
}

export default ApiChess;
