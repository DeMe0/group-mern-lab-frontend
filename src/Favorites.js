import React from "react";

const Favorite = (props) => {
    
  const {favorite} = props
    
  
    return (
        <div className='Stephanie'>
        {favorite.map((song) =>    <div className="songLine">
           
              <p id="title">{song.title}</p>
              <p id="artist">{song.artist}</p>
               <p id="time">{song.time}</p>
           
         </div>
        )}
   </div>
    )};
  
  export default Favorite;