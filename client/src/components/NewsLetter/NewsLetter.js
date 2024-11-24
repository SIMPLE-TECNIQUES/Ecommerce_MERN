import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe and Stay Updated</p>
        <div>
            <input type='email' placeholder='Enter your email' />
             <button type='submit'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;
