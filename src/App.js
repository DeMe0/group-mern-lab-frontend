import './App.css';
import { Route, Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Display from './Display'
import Form from './Form'

function App() {
  const url = "https://group-mern-lab-628.herokuapp.com";
  const [songs,setSongs] =useState([])
  const getSongs = ()=>{ 
    fetch(url + "/songs")
    .then((response) => response.json())
    .then((data) => setSongs(data))
  }

  useEffect(() => getSongs(), []);
  
  
  return (
    <div className="App">
        <img className ="logo" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629386427/Navy_Minimalist_Music_Logo_3_t74eqs.png"></img>
     <hr></hr>
     <main>
     <h1>PLAYLIST 1</h1>  
     <Route exact path="/"
            render={(rp) => <Display {...rp} songs={songs} 
            />}
    />
     <Form/>
     </main>
    </div>
  );
}

export default App;
