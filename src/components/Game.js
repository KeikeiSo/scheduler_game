import React, { useState } from 'react';
import './Game.scss'
import normal from '../assets/cat_normal.png'
import holdfood from '../assets/cat_hold_food.png'
import love from '../assets/heart.png'

export default function Game() {
  const [submit, setSubmit] = useState(false);
  const [finish, setFinish] = useState(false);

  const changeImg = () => {
    document.getElementById('p_name').style.visibility = "visible";
    setTimeout(setInvisible, 5000);
  }

  const attemptSubmit = () => {
    setSubmit(true);
    const tasks = document.getElementById('tasks');
    localStorage.setItem('task1', tasks['task1'].value);
    localStorage.setItem('task2', tasks['task2'].value);
    localStorage.setItem('task3', tasks['task3'].value);
  }

  const checked = () => {
    setFinish(true);
    setTimeout(() => {setFinish(false)}, 5000);
  }

  return (
   <section className='game'>
    <div className='game__imgs'>
      <label className='game__pet_name' id='p_name'>{localStorage.getItem('petName')}</label>;
      {!finish && <img className='game__catimg' src={normal} alt='cat' onClick={changeImg}/>}
      {finish && <img className='game__catimg' src={holdfood} alt='cat' />}
      {finish && <img className='game__loveimg' src={love} alt='heart' />}
    </div>
    <div className='game__panel'>
      {!submit && <h1 className='game__question'>What do u want to feed me today?</h1>}
      {!submit &&
        <form className='form' id='tasks' onSubmit={attemptSubmit}>
          <input className='form__input' name='task1' id='task1' placeholder='Task1' type='text' autoComplete='off' required/>
          <input className='form__input' name='task2' id='task2' placeholder='Task2' type='text' autoComplete='off' required/>
          <input className='form__input' name='task3' id='task3' placeholder='Task3' type='text' autoComplete='off' required/>
          <button className='form__button'>Confirm</button>
        </form>
      }
      {submit && <h1 className='game__question'>Come back when u r done!</h1>}
      {submit && 
        <div className='game__checklist'>
          <label className='game__checkbox'> <input type='checkbox' onClick={checked}></input>{localStorage.getItem('task1')}</label>
          <label className='game__checkbox'> <input type='checkbox' onClick={checked}></input>{localStorage.getItem('task2')}</label>
          <label className='game__checkbox'> <input type='checkbox' onClick={checked}></input>{localStorage.getItem('task3')}</label>
        </div>
      }
    </div>
  </section>
  );
}

function setInvisible() {
  document.getElementById('p_name').style.visibility = "hidden";
}
