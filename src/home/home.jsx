import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export function Home() {
    return ( 
    <div className="hero-image">
      <img src="/KoiNails.jpg" className="KoiNails"/>
      <div className="hero-text">
        <h1>Welcome to the Nail Salon</h1>
        <p>Madelynn Mani's</p>
        <a href="https://www.fresha.com/a/madelynn-manis-pleasant-grove-952-south-main-street-sw9co9y5/all-offer?venue=true">
          <button>Book now!</button>
        </a>
      </div>
    </div>
    );
}






