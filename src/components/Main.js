import React from 'react';
import './Main.scss'

export default function Main({next}) {

  return (
  <section className='main'>
    <div>
      <h1 className='main__text'>Enter Your Name</h1>
      <input className='main__input' name='setUsername' id='setUsername' placeholder='UserName' autoComplete='off' onblur="getVal()" required/>
      <button className="main__start-button" onClick={next}>Start</button>
    </div>
  </section>
  );
}


