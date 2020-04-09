import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './styles.css';

import logoImg from './assets/images/logo.svg';
import heroImg from './assets/images/illustration-mockups.svg';

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <img src={logoImg} id="logo" alt="Logo" />
          <img src={heroImg} id="hero" alt="Mockups" />
        </header>

        <main>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
  Create connections with your users as you engage in genuine discussion. </p>
          <button>Register</button>
        </main>
      </div>

      <footer>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank"><FaFacebookF className="icon" /></a></li>
          <li><a href="https://twitter.com/home" target="_blank"><FaTwitter className="icon" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><FaInstagram className="icon" /></a></li>
        </ul>
      </footer>
    </div>
  );
}
