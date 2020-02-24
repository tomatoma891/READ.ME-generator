const axios = require("axios");


const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}/events/public`).catch(error => {
    });

  }
};

module.exports = api;
