import React from "react";
import "./App.scss";
import "./css/reset.scss"
import { Route, Switch } from 'react-router-dom';
import Authentication from './Authentication'
import UserProfile from './UserProfile'
import UserCompliment from './components/UserCompliment'
import UserInsult from './components/UserInsult'
import Insult from './components/Insults'
import Compliment from './components/Compliment' 
import Updateuser from "./Updateuser"
import Home from "./Home"
import { BrowserRouter } from 'react-router-dom';
import Register from "./Register";
const Router= process.env.NODE_ENV === "development"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route  path="/" exact component={Authentication} />
      <Route path="/user" component={UserProfile} />
      <Route path="/Usercompliment" component={UserCompliment}/>
      <Route path="/Userinsult" component={UserInsult}/>
      <Route path="/Compliment" component={Compliment}/>
      <Route path="/Insult" component={Insult}/>
      <Route path="/update" component={Updateuser}/>
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
    </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
