import React from "react";

const Form = (props) => {
    //STATE FOR THE FORM
    const [formData, setFormData] = React.useState(props.song);
  
    //FUNCTIONS
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
      props.handleSubmit(formData); // Submit to Parents desired function
      
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    return (
      <form className ="form" onSubmit={handleSubmit}>
        
        
        <h2>ADD A NEW SONG</h2>
        <label for="title">TITLE</label><br></br>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        /><br></br>
        <label for="artist">ARTIST</label><br></br>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        /><br></br>
          <label for="time">TIME</label><br></br>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
        /><br></br>
       <button value={props.label}>ADD NEW SONG</button>
      </form>
    );
  };
  
  export default Form;
  

