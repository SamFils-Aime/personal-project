const deleteinsult = (req, res) => {
    const db = req.app.get('db')
    const insult = req.params.id;
    db.reviews.deleteinsult(insult)
        .then(deleted => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(409).json("not working ")
        })
    }
const deletecompliment = (req, res) => {
    const db = req.app.get('db')
    const compliment = req.params.id;
    db.reviews.deletecompliment(compliment)
        .then(deleted => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(409).json("not working")
        })
    }

    
module.exports = {
    deleteinsult, deletecompliment
}