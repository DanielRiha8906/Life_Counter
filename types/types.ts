
export type players = {
    player1: number,
    player2: number,
    player3?: number,
    player4?: number,
  }
  export type Match = {
    id: number;
    player1: number;
    player2: number;
    player3?: number;
    player4?: number;
    winner: number;
  };