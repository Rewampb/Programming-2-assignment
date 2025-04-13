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
        renderAllGames();
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

const container = document.createElement('div');
document.body.appendChild(container);

function renderGame(game) {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '30px';

    const title = document.createElement('h2');
    title.textContent = game.title;
    wrapper.appendChild(title);

    const meta = document.createElement('p');
    meta.innerHTML = `Year: ${game.year} &nbsp;&nbsp; Players:${game.players} &nbsp;&nbsp; Time:${game.time} &nbsp;&nbsp; Difficulty: ${game.difficulty}`;
    wrapper.appendChild(meta);

    const details = document.createElement('div');
    details.style.marginLeft = '20px';
    details.innerHTML = `
        Designer: ${game.designer}<br>
        Artist: ${game.artist}<br>
        Publisher: ${game.publisher}<br>
        BGG Listing:<a href="${game.url}" target="_blank">${game.url}</a>
    `;
    wrapper.appendChild(details);

    const playCount = document.createElement('p');
    playCount.innerHTML = `Playcount: ${game.playCount} <button>+</button>`;
    wrapper.appendChild(playCount);

    const ratingWrapper = document.createElement('p');
    ratingWrapper.textContent = 'Rating: ';

    const ratingInput = document.createElement('input');
    ratingInput.type = 'range';
    ratingInput.min = 0;
    ratingInput.max = 10;
    ratingInput.value = game.personalRating;

    const ratingValue = document.createElement('span');
    ratingValue.textContent = game.personalRating;

    ratingWrapper.appendChild(ratingInput);
    ratingWrapper.appendChild(ratingValue);
    wrapper.appendChild(ratingWrapper);

    container.appendChild(wrapper);
}

function renderAllGames() {
    container.innerHTML = '';
    games.forEach(renderGame);
}

refreshGamesArray();
console.log('Loaded games:', games);
renderAllGames();