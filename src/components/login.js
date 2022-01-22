import React from 'react';

export default function Game() {
  return (
    <div className='pet_name'>
      <h1>Enter Your Name</h1>
      <input className='input' name='setUsername' id='setUsername' placeholder='UserName' autoComplete='off' />
      <button className="submit_button" onClick={next}>Submit</button>
    </div>);
}
