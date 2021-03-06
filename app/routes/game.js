import Game from '../models/game';

const getGames = (req, res) => {
    Game.find(null, null, { sort: { postDate: 1 } }, (err, games) => {
        if (err) return res.send(err);
        res.json(games);
    });
};

const getGame = (req, res) => {
    const { id } = req.params;
    Game.findById(id, (err, game) => {
        if (err) return res.send(err);
        res.json(game);
    });
};

const postGame = (req, res) => {
    let game = Object.assign(new Game(), req.body);
    game.save(err => {
        if (err) return res.send(err);
        res.json({ message: 'game created' });
    });
};

const deleteGame = (req, res) => {
    Game.remove({ _id: req.params.id }, err => {
        if (err) return res.send(err);
        res.json({ message: 'successfully deleted' });
    });
};

export { getGames, getGame, postGame, deleteGame };