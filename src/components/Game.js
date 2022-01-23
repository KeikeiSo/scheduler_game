import React, { useState } from 'react';
import './Game.scss'
import normal from '../assets/cat_normal.png'

export default function Game() {

  const pet_name = document.getElementById('setPetname').value;


  const changeImg = () => {
    document.getElementById('p_name').style.visibility = "visible";
    setTimeout(setInvisible, 5000);
  }

  return (
    <section className='game'>
      <div>
        <h1 className='game__pet_name' id='p_name'>{pet_name}</h1>;
        <img className='game__catimg' src={normal} alt='cat' onClick={changeImg} />
      </div>
    </section>
  );
}

function setInvisible() {
  document.getElementById('p_name').style.visibility = "hidden";
}
