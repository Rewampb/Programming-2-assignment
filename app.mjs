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

function deleteGameFromStorage(game) {
    localStorage.removeItem(game.title);
    const index = games.findIndex(g => g.title === games.title);
    if (index !== -1) {
        games.splice(index, 1);
    }
    renderAllGames();
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
    const playCountSpan = document.createElement('span');
    playCountSpan.textContent = game.playCount;

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
        game.playCount += 1;
        playCountSpan.textContent = game.playCount;
        saveGamesToStorage(game);
    });

    playCount.innerHTML = 'Playcount: ';
    playCount.appendChild(playCountSpan);
    playCount.appendChild(addButton);
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

    ratingInput.addEventListener('input', () => {
        game.personalRating = parseInt(ratingInput.value);
        ratingValue.textContent = game.personalRating;
        saveGamesToStorage(game);
    });

    ratingWrapper.appendChild(ratingInput);
    ratingWrapper.appendChild(ratingValue);
    wrapper.appendChild(ratingWrapper);

    container.appendChild(wrapper);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete "${game.title}"?`)) {
            deleteGameFromStorage(game);
        }
    });

    wrapper.appendChild(deleteButton);
}

function renderAllGames() {
    container.innerHTML = '';
    games.forEach(renderGame);
}

document.getElementById('addGameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newGameData = {
        title: formData.get('title'),
        designer: formData.get('designer'),
        artist: formData.get('artist'),
        publisher: formData.get('publisher'),
        year: parseInt(formData.get('year')) || 0,
        players: formData.get('players'),
        time: formData.get('time'),
        difficulty: formData.get('difficulty'),
        url: formData.get('url'),
        playCount: parseInt(formData.get('playCount')) || 0,
        personalRating: parseInt(formData.get('personalRating')) || 0
    };

    const newGame = new Game(newGameData);
    games.push(newGame);
    saveGamesToStorage(newGame);
    renderGame(newGame);
    form.reset();
});

refreshGamesArray();
console.log('Loaded games:', games);
renderAllGames();