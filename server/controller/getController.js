const getinsult = (req, res) => {
    const db = req.app.get('db')
    db.getinsult().then(reviews => {
        res.status(200).json(reviews)
    })
}
const getcompliment = (req, res) => {
    const db = req.app.get('db')
    db.getcompliment().then(reviews => {
        res.status(200).json(reviews)
    })
}
module.exports = {
    getinsult, getcompliment
}