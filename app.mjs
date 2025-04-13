import Game from './models/game';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./models/example.json', 'utf-8'));
const games = data.map(gameData => new Game(gameData));
