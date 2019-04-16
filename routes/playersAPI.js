var express = require("express");
var router = express.Router();
const Player = require("../player");
const Team = require("../team");

router.route('/').get(function(req, res) {
    Player.find(function(err, players) {
        if (err) {
            console.log(err);
        } else {
            res.json(players);
        }
    });
});
router.route('/').delete(function(req, res) {
    Player.remove(function(err, players) {
        if (err) {
            console.log(err);
        } else {
            res.json(players);
        }
    });
});
router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Player.findById(id, function(err, players) {
        res.json(players);
    });
});
router.route('/add').post(function(req, res) {
    let player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'player added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new player failed');
        });
});
router.route('/:id').put(function(req, res) {
    Player.findById(req.params.id, function(err, player) {
        if (!player)
            res.status(404).send("data is not found");
        else
            player.id = req.body.id;
            player.name = req.body.name;

            player.save().then(player => {
                res.json('Player updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
router.route('/:id').delete(function(req, res) {
    Player.findById(req.params.id, function(err, player) {
        player.remove(err => {
          if(err) {
            res.status(500).send(err)
          } else {
            res.status(204).send('removed')
          }
        })
    });
});
router.route('/teams').post(function(req, res) {
    let team = new Team(req.body);
    team.save()
        .then(team => {
            res.status(200).json({'team': 'team added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new team failed');
        });
});
module.exports = router;