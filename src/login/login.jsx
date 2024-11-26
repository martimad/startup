import React from 'react';
import './login.css';


export function Login(){
    return(
    <div id="login-widget">
        <h1>Login</h1>
        <div id="login-form">
        <form method="get" action="portfolio.html">
            <div className="user-info">
                <span>Username</span>
                <input type="text" placeholder="your@email.com" />
            </div>
            <div className="user-info">
                <span>Password</span>
                <input type="password" placeholder="Password" />
            </div>
            <div id="submit-buttons">
            <button type="submit" class="submitButton">Login</button>
            <button type="submit" class="submitButton">Create</button>
            </div>
            </form>
        </div>
    </div>)
}