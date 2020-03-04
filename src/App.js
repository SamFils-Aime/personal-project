import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Authentication from './Authentication'
import UserProfile from './UserProfile'
import UserCompliment from './components/UserCompliment'
import UserInsult from './components/UserInsult'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route path="/" component={Authentication} exact/>
      <Route path="/user" component={UserProfile} />
      <Route path="/Usercompliment" component={UserCompliment}/>
      <Route path="/userinsult" component={UserInsult}/>
      <Route/>
    </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
