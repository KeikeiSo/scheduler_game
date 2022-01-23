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

  const changeImg = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  return (
  <section className='game'>
    <div>
      <img className='game__catimg' src={imgs[toggle]} alt='cat' onClick={changeImg}/>
    </div>
  </section>
  );
}
