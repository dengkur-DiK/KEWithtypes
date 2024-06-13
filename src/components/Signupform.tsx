import React, { useState, useRef, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signupform: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleLogin = () => {
    // Placeholder function to handle login
    console.log('Logging in with:', email, password);

    // Replace the placeholder function with your actual login logic
    // For example, you can use fetch to send login data to a server
    // fetch('https://yourapi.com/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle response from server
    //   // Redirect the user to the desired URI after successful login
    //   window.location.href = 'http://localhost:5173/pages/Airpods';
    // })
    // .catch(error => {
    //   // Handle error
    // });

    // For the sake of this example, simulate a successful login
    // and then redirect the user to the desired URI
    setTimeout(() => {
      // Simulate successful login after 2 seconds
      // Replace this setTimeout with your actual login logic
      // Redirect the user to the desired URI after successful login
      window.location.href = 'http://localhost:5173/pages/Airpods';
    }, 2000);
  };

  return (
    <div className="login-form">
      <div className="login-form-content">
        <input
          ref={emailInputRef}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Signupform;
