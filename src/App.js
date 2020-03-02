import React from "react";
import "./App.css";
import ImageDisplay from "./ImageDisplay";
import Message from "./Message";
import Authentication from './Authentication'
import UserProfile from './UserProfile'
import Insults from './components/Insults'
import Compliment from './components/Compliment'

function App() {
  return (
    <div className="App">
      <Insults/>
      <Compliment/>
      <ImageDisplay></ImageDisplay>
      <Message></Message>
      <UserProfile/>
      <div>
      <Authentication/>
      </div>
    </div>
  );
}

export default App;
