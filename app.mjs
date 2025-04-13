import Game from './models/game';

const games = [];

function saveGamesToStorage(game) {
    localStorage.setItem(game.title, JSON.stringify(game));
}

function retrieveAllGamesFromStorage() {
    const allGames = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        try {
            const parsed = JSON.parse(item);
            if (parsed && parsed.title && parsed.designer) {
                allGames.push(new Game(parsed));
            }
        } catch (error) {
            console.warn(`Skipping non-game item in localStorage: ${key}`);
        }
    }
    return allGames;
}

function outputGamesAsJSON() {
    return JSON.stringify(games);
}

function saveGamesFromJSON(json) {
    try {
        const parsed = JSON.parse(json);
        parsed.forEach(gameData => {
            const game = new Game(gameData);
            saveGamesToStorage(game);
        });
        refreshGamesArray();
        console.log('Games imported successfully');
    } catch (error) {
        console.error('Invalid JSON:', error);
    }
}

function refreshGamesArray() {
    games.length = 0;
    games.push(...retrieveAllGamesFromStorage());
}

document.getElementById('importSource').addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const jsonText = e.target.result;
        saveGamesFromJSON(jsonText);
    };
    reader.readAsText(file);
});

refreshGamesArray();
console.log('Loaded games:', games);