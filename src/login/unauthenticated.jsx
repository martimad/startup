import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    try{
        const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });
        if (response.ok) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
        }else {
            const text = await response.text(); // Read raw response text
            let body;
            try {
              body = JSON.parse(text); // Try parsing as JSON
            } catch (e) {
              body = { msg: "Unknown error occurred" }; // Default fallback
            }
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }catch (error) {
        //console.error('error', code);
        setDisplayError(`⚠ Network error: ${error.message}`);
    }
}

  return (
    <div>
       <h2>Login</h2>
        <div id="login-form">
        <div className="user-info username">
            <span>Username</span>
            <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className="user-info password">
            <span>Password</span>
            <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div> 
        <div id="submit-buttons">
            <Button type="submit" className="submitButton"onClick={() => loginUser()} disabled={!userName || !password}>Login</Button>
            <Button type="submit" className="submitButton" onClick={() => createUser()} disabled={!userName || !password}>Create</Button>
        </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </div>
    </div>
  );
}
