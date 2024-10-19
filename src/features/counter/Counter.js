import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './userSlice';
import styles from './Counter.module.css'; // Assuming this CSS module contains relevant styles

export function UserComponent() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      dispatch(login({ email, password }));
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            className={styles.textbox}
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className={styles.textbox}
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button className={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
