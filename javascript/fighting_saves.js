const fs = require('fs');
const _ = require('lodash');

const path = './arena.json';

try {
    if (fs.existsSync(path)){
        console.log('arena.json is found');
    } else {
        throw 'File arena.json is not found, creating new file...'
    }
} catch (err) {
    console.log(err);
    fs.writeFileSync('arena.json', "{}")
}

// var readUser = fs.readFileSync('arena.json');
// var userObject = JSON.parse(readUser);

var add_info = (name, player_health, player_dps, enemy_health, enemy_dps) => {
    var player_info = {
            "player_name": name,
            "player_health": player_health,
            "player_dps": player_dps,
            "enemy_health": enemy_health,
            "enemy_dps": enemy_dps
    };
    var result_battle = JSON.stringify(player_info, undefined, 2);
    fs.writeFileSync('arena.json', result_battle)
};

var get_info = () => {
    var get_arena_stats = fs.readFileSync('arena.json');
    return JSON.parse(get_arena_stats);
};

module.exports = {
    add_info: add_info,
    get_info: get_info
};