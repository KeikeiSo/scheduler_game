import React from 'react';
import './Main.scss'

export default function Main({next}) {
  return (
  <div className='user-name'>
    <h1>Enter Your Name</h1>
    <input className='user-name__input' name='setUsername' id='setUsername' placeholder='UserName' autoComplete='off'/>
    <button className="user-name__start-button" onClick={next}>Start</button>
  </div>
  );
}
