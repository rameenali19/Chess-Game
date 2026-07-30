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
    return request;
  }


  //get all games
  async getAllGames(page, limit) {
    const request = await this.url("/games", {
      params: {
        page: page,
        limit: limit
      }
    }
    );
    return request;
  }

  //get game by id
  async getGame(id) {
    const request = await fetch(`${this.url}/games/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await request.json();
    return data;
  }

  //update game by id
  async updateGame(id, gameInfo) {
    const request = await fetch(`${this.url}/games/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameInfo)
    });
    const data = await request.json();
    return data;
  }

  //delete game
  async deleteGame(id) {
    const request = await fetch(`${this.url}/games/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await request.json();
    return data;
  }

}

export default ApiChess;
