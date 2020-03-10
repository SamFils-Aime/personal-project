const edit = (req, res) => {
    const db = req.app.get('db')
    const {username, firstname, lastname} = req.body;
    const {user_id} = req.params;
    console.log(req.body)
    db.updateuser([user_id,username, firstname, lastname])
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log(error)
            res.status(500).json("grahhhh, or username exist")
        })
}
module.exports = { edit };
