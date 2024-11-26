import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Services } from './services/services';
import { Portfolio } from './portfolio/portfolio';
import { Home } from './home/home';
import { Book } from './book/book';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
    <header>
      <img src="/Mani-Logo.ico" className="logo"/>
        <h1>Madelynn Mani's</h1>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to=''>
                Home
              </NavLink>
            </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='portfolio'>
                  Portfolio
                </NavLink>
              </li>
            
              <li className='nav-item'>
                <NavLink className='nav-link' to='services'>
                  Services
                </NavLink>
              </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='book'>
                Book
              </NavLink>
            </li>
          </menu>
    <div className="login-img"><a href="login.html" id="login-img"/><img src="pngegg.png"/></div>
      </header>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/login'
                element={
                <Login
                />
                }
                exact
            />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/book' element={<Book />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
       
        <footer>
        <h3 className="Company name">Madelynn Mani's</h3>
        <span className="Student Name">Run by Madelynn Martin</span>
        <a href="https://github.com/martimad/startup/tree/main">GitHub</a>
        </footer>
        </BrowserRouter>
    
    </>
)
}


function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

App;
