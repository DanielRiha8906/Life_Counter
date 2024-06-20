import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('match_history.db');

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Match_History (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player1 INTEGER NOT NULL,
      player2 INTEGER NOT NULL,
      player3 INTEGER,
      player4 INTEGER,
      winner INTEGER CHECK (winner >= 0 AND winner <= 3)
    );
  `;

  try {
    await db.execAsync(query);
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};
const reset_database = async () => {
  const query = `
    DROP TABLE IF EXISTS Match_History;
  `;
  try {
    await db.execAsync(query);
    console.log('Table deleted successfully.');
  } catch (error) {
    console.error('Error deleting table:', error);
  }
}
const addMatch = async (players: any, winner: number) => {
  const query = `
    INSERT INTO Match_History (player1, player2, player3, player4, winner)
    VALUES (?, ?, ?, ?, ?);
  `;
  const params = [players.player1, players.player2, players.player3 || 0, players.player4 || 0, winner];

  try {
    const result = await db.runAsync(query, params);
    let winnerMessage = '';
    switch (winner) {
      case 0:
        winnerMessage = 'Player 1 won';
        break;
      case 1:
        winnerMessage = 'Player 2 won';
        break;
      case 2:
        winnerMessage = 'Player 3 won';
        break;
      case 3:
        winnerMessage = 'Player 4 won';
        break;
      default:
        winnerMessage = 'Unknown winner';
        break;
    }

    Alert.alert(
      'Match Added',
      `Players HP: ${players.player1}, ${players.player2 || '-'}, ${players.player3 || '-'}, ${players.player4 || '-'}\n${winnerMessage}`
    );
  } catch (error) {
    console.error('Error inserting match:', error);
  }
};

const getMatches = async () => {
  const query = `
    SELECT * FROM Match_History;
  `;

  try {
    const allRows = await db.getAllAsync(query);
    console.log('Matches:', allRows);
    return allRows;
  } catch (error) {
    console.error('Error getting matches:', error);
    throw error;
  }
};

export { createTable, addMatch, getMatches, reset_database };
