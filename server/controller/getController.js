const getinsult = (req, res) => {
    const db = req.app.get('db')
    const params = req.session.user.username
    console.log(req.body)
    db.getinsult(params).then(insult => {
        res.status(200).json(insult)
    })
}
const getcompliment = (req, res) => {
    const db = req.app.get('db')
    const params = req.session.user.username
    console.log(req.body)
    db.getcompliment(params).then(compliment => {
        //console.log(compliment)
        res.status(200).json(compliment)
    })
}
const getjoininsult = (req, res) => {
    const db = req.app.get('db')
    console.log(req.body)
    db.insultjoin().then(insult => {
        res.status(200).json(insult)
    })
}
const getjoincompliment = (req, res) => {
    const db = req.app.get('db')
    console.log(req.body)
    db.compjoin().then(compliment => {
        //console.log(compliment)
        res.status(200).json(compliment)
    })
}
module.exports = {
    getinsult, getcompliment,getjoincompliment,getjoininsult
}