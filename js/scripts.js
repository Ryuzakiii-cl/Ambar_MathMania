function showGame(gameId) {
    const games = document.querySelectorAll('.game-container');
    games.forEach(game => {
        if (game.id === gameId) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
