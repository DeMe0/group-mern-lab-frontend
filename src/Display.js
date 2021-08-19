import React from "react";

const Display = (props) => {
    const { songs } = props;

 const loaded = () => (
      <div className="playlist">
      {songs.map((song) => (
         <article>
          <p id="title">{song.title}</p>
          <p id="artist">{song.artist}</p>
           <p id="time">{song.time}</p>
          <button onClick={() => {
            props.deleteSong(song)
          }}>Delete</button> 
          <button onClick={() => {
             console.log('cheese')
             props.addToFavorites(song)
          }}>Favorite</button>

        </article>
     ))}
        </div>
    )
       
const loading = <h1>Loading...</h1>

return songs.length > 0 ? loaded() : loading;
 };

export default Display; 
