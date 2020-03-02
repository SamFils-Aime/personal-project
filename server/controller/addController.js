const addinsult = (req, res) => {
    const db = req.app.get('db')
    const {username, insult} = req.body;
    console.log(username,insult)
    db.addinsult([username, insult])
        .then(() => { 
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("Wasn't able to add insult")
        })
}
const addcompliment = (req, res) => {
    const db = req.app.get('db')
    const {username, compliment} = req.body;
    db.addcompliment([username, compliment])
        .then(() => {
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