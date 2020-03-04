const deleteinsult = (req, res) => {
    const db = req.app.get('db')
    const {insult_id} = req.params;
    console.log(req.params)
    db.deleteinsult(insult_id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(409).json("not working ")
        })
    }
const deletecompliment = (req, res) => {
    const db = req.app.get('db')
    const {compliment_id} = req.params;
    console.log(compliment_id)
    db.deletecompliment(compliment_id)
        .then(()=> {
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