import axios from "axios";

class ApiChess {

  constructor() {
    this.url = axios.create({
      baseURL: "http://localhost:3000"
    });
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
    const request = await this.url.post("/games", gameInfo)
    return request.data;
  }


  //get all games
  async getAllGames(page, limit) {
    const request = await this.url.get("/games", {
      params: {
        page: page,
        limit: limit
      }
    }
    );
    return request.data;
  }

  //get game by id
  async getGame(id) {
    const request = await this.url.get(`/games/${id}`);
    return request.data;
  }

  //update game by id
  async updateGame(id, gameInfo) {
    const request = await this.url.post(`/games/${id}`, gameInfo);
    return request.data;
  }

  //delete game
  async deleteGame(id) {
    const request = await this.url.delete(`/games/${id}`);
    return request.data;
  }

}

export default ApiChess;
