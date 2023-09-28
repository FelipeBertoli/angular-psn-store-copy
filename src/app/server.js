const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': '5ccfbf9c6fmshd96959f1ab221c0p153e22jsn3992dadbafd6',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};
async function getAllGames() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


