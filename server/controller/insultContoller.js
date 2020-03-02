const axios = require("axios");

const insult = (req, res) => {
  axios("https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then(response => {
      console.log(response.data.insult);
      res.status(200).json(response.data.insult);
    })
    .catch(error => console.log(error));
};

module.exports = { insult };
