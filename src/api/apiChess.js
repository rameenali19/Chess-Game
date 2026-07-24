class ApiChess {

  constructor() {
    this.url = "http://localhost:3000";
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
    const request = await fetch(`${this.url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameInfo)
    });
    const data = await request.json();
    return data;
  }


  //get all games
  async getAllGames() {

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
  async updateGame() {

  }

}

export default ApiChess;
