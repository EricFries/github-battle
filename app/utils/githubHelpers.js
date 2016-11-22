var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR SECRET ID';
// var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
    // axios.get() returns a promise;
    return axios.get('https://api.github.com/users/' + username);
};

var helpers = {
    getPlayersInfo: function (players) {
        // axios.all accepts an array of promises;
        // when each promise in the array is resolved (when the requests are done)
        // .then is run
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function(info){
            return info.map(function (user) {
                return user.data;
            })
        }).catch(function (error) {
            console.warn('Error in getPlayersInfo', error)
        })
    },
};

module.exports = helpers
