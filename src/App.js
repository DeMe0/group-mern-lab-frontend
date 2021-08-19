import './App.css';
import { Route, Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Display from './Display'
import Form from './Form'
import Favorite from './Favorites'

function App() {
  const url = "https://group-mern-lab-628.herokuapp.com";
  const [songs,setSongs] =useState([])
  const [favorite, setFavorite] = useState([])
  const getSongs = ()=>{ 
    fetch(url + "/songs")
    .then((response) => response.json())
    .then((data) => setSongs(data))
  }

  useEffect(() => getSongs(), []);

  const emptySong = {
    title: "",
    artist: "",
    time: ""
  }
  const handleCreate = (newSongs) => {
    fetch(url + '/songs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSongs)
    }).then(() => {
      getSongs()
    })
  }
const handleUpdate = (songs) => {
  fetch(url +'/songs/', + songs._id, {
    method: 'put',
    headers: {
      'Constent-Type': 'application/json'
    }
  }) 
}
  const addToFavorites = (songs) => {  
    setFavorite([...favorite, songs])
  }

  const deleteSongs = (songs) => {
    fetch(url +'/songs/' +songs._id, {
      method: 'delete'
    })
    .then(() => {
      getSongs()
    })
  }


  return (
    <div className="App">
        <img className ="logo" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629386427/Navy_Minimalist_Music_Logo_3_t74eqs.png"></img>
     <hr></hr>
     {/* <Link to="/create">
        <button className = 'add'>ADD ANOTHER TYPE</button>
        </Link> */}
     <main>
     <h1>PLAYLIST 1</h1>  
     <Route exact path="/"
            render={(rp) => <Display {...rp} songs={songs} deleteSong = {deleteSongs} addToFavorites = {addToFavorites}
            />}
    />
    <h2>Favorite Song Lists</h2>
     <Route exact path="/"
           render={(rp) =>  <Favorite   label='create' song={addToFavorites} favorite={favorite} handleSubmit={handleUpdate}/>}
    />
     <Route exact path="/"
           render={(rp) =>  <Form   label='create' song={emptySong} handleSubmit={handleCreate}/>}
    />
    
      
    
     
            
     
     </main>
    </div>
  );
}

export default App;
