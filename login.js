// src/components/Login.jsx
import { useState } from 'react';
import { loginArtist } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginArtist(email, password)
      .then(() => alert('Logged in successfully!'))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h2>Artist Login</h2>
      <input
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
  );
}
