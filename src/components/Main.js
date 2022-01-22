import React from 'react';

export default function Main({next}) {
  return (
  <div className='user_name'>
    <h1>Enter Your Name</h1>
    <input className='input' name='setUsername' id='setUsername' placeholder='UserName' autoComplete='off'/>
    <button className="submit_button" onClick={next}>Submit</button>
  </div>
  );
}
