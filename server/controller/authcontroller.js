const bcrypt = require("bcryptjs");

const register = (req, res) => {
  const db = req.app.get("db");
  const { username, password, firstname, lastname } = req.body;
  bcrypt
    .hash(password, 12)
    .then(hash => {
      db.register([username, hash, firstname, lastname])
        .then(user => res.sendStatus(200))
        .catch(error => {
          console.log(error);
          res.status(500).json("not working brah");
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json("internal server error");
    });
};

const login = (req,res)=>{
    const db=req.app.get('db')
    const {username, password}=req.body
    db.login(username).then(user=>{
        console.log(user)
        if(user.length === 0){
            res.status(400).json('not user')
        } else{
            bcrypt.compare (password,user[0].password).then(areEqual =>{
                if (areEqual){
                    const {user_id,username,firstname,lastname}=user[0]
                    req.session.user ={
                        id: user_id,
                        username: username,
                        firstname: firstname,
                        lastname: lastname
                    }
                    res.status(200).json(req.session.user)
                }else{
                    res.status(403).json('incorrect')
                }
            })
        }
    })
}

const getSession = async (req,res)=>{
    if(req.session.user){
        res.status(200).json(req.session.user)
    }
}
const checkSession = async (req,res)=>{
    if(getSession){
        res.status(200).json(req.session.user)
    }
    else{
       return console.log('not registered in')
    }
}

const LogOut = (req,res)=>{
    req.session.destroy();
    res.sendStatus(200)
}

module.exports = {
    register,
    login,
    LogOut,
    getSession,
    checkSession
}