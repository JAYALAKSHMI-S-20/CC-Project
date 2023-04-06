
import {useState} from 'react';
import React from 'react';
const   Name = () => {
  const [Name, setName] = useState('');
  const [favfruit, setfavfruit] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();
    console.log('Name ', Name);
    console.log('favfruit 👉️', favfruit)
    setMessage(`Hey ${Name} your favorite fruit is ${favfruit}`);
    setName('');
    setfavfruit('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Enter your Name and Favorite fruit</h2><br></br>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          value={Name}/><br></br><br></br>
        <select id="favfruit" onChange={event => setfavfruit(event.target.value)}>
        <option >Choose a fruit</option>
            <option >Apple</option>
            <option >Banana</option>
            <option >Cherry</option>
            <option >Durian</option>
            <option >Elderberry</option>
      </select><br></br><br></br>
        <button type="submit">Submit</button>
        <h3>{message}</h3>
      </form>
    </div>
  );
};

export default Name;

