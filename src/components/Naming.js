import React from 'react';
import './Naming.scss'

//var name = document.getElementsById("setUsername").getAttribute("main__input");

export default function Naming({ next }) {
  return (
    <section className='pet_name'>
      <div>
        <h1 className='pet_name__greeting'>Hello, XXX</h1>
        <h1 className='pet_name__text'>Enter A Name For Your Pet</h1>
        <input className='pet_name__input' name='setPetname' id='setPetname' placeholder='Meow' autoComplete='off' />
        <button className="pet_name__submit_button" onClick={next}>Submit</button>
      </div>
    </section>
    );
}
