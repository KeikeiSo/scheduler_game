import React, {useState} from 'react';
import './Game.scss'
import normal from '../assets/cat_normal.png'
import standing from '../assets/cat_standing.png'

const imgs = {
  true: normal,
  false: standing
}

export default function Game() {
  const [toggle, setToggle] = useState(true);
  const [submit, setSubmit] = useState(false);

  var t1, t2, t3;

  const changeImg = () => {
    toggle ? setToggle(false) : setToggle(true)
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
      <img className='game__catimg' src={imgs[toggle]} alt='cat' onClick={changeImg}/>
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
