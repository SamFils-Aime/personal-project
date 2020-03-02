const addinsult = (req, res) => {
    const db = req.app.get('db')
    const {username, insult} = req.body;
    db.addinsult([username, insult])
        .then(insult => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("Wasn't able to add compliment")
        })
}
const addcompliment = (req, res) => {
    const db = req.app.get('db')
    const {username, compliment} = req.body;
    db.addcompliment([username, compliment])
        .then(compliment => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("Wasn't able to add compliment")
        })
}

module.exports = {
    addinsult, addcompliment
}