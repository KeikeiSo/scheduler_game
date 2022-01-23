import React, { useState } from 'react';
import './Game.scss'
import normal from '../assets/cat_normal.png'

export default function Game() {
  const pet_name = document.getElementById('setPetname').value;
  const [submit, setSubmit] = useState(false);

  var t1, t2, t3;

  const changeImg = () => {
    document.getElementById('p_name').style.visibility = "visible";
    setTimeout(setInvisible, 5000);
  }


  const attemptSubmit = () => {
    setSubmit(true);
    t1 = document.getElementById("task1").textContent;
    t2 = document.getElementById("task2").textContent;
    t3 = document.getElementById("task3").textContent;
  }
  return (
   <section className='game'>
    <div className='game__imgs'>
        <h1 className='game__pet_name' id='p_name'>{pet_name}</h1>;
        <img className='game__catimg' src={normal} alt='cat' onClick={changeImg} />
    </div>
    <div className='game__panel'>
      {!submit && <h1 className='game__question'>What do u want to feed me today?</h1>}
      {!submit &&
        <form className='form' onSubmit={attemptSubmit}>
          <input className='form__input' name='task1' id='task1' placeholder='Task1' type='text' required/>
          <input className='form__input' name='task2' id='task2' placeholder='Task2' type='text' required/>
          <input className='form__input' name='task3' id='task3' placeholder='Task3' type='text' required/>
          <button className='form__button'>Confirm</button>
        </form>
      }
      {submit && <h1 className='game__question'>Come back when u r done!</h1>}
      {submit && <label className='game__checkbox'> <input type='checkbox'></input>{t1}</label>}
    </div>
  </section>
  );
}

function setInvisible() {
  document.getElementById('p_name').style.visibility = "hidden";
}
