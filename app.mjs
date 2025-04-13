import Game from './models/game';

function saveGamesToStorage(game) {
    localStorage.setItem(game.title, JSON.stringify(game));
}

function retrieveAllGames() {
    const games = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const gameData = JSON.parse(localStorage.getItem(key));
        games.push(new Game(gameData));
    }
    return games;
}

function outputGamesAsJSON() {
    const games = getAllGames();
    return JSON.stringify(games);
}

function saveGamesFromJSON(json) {
    const parsed = JSON.parse(json);
    parsed.forEach(gameData => {
        const game = new Game(gameData);
        saveGame(game);
    });
}