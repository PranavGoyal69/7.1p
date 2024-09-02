import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'; // Ensure this path is correct

const Signup = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Add user details to Firestore
      await setDoc(doc(db, 'users', email), {
        name,
        lastName,
        email
      });

      // Redirect to login page
      navigate('/login');
    } catch (err) {
      console.error('Error creating account:', err); // Log error details for debugging
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <h2>Sign Up to create your Dev@DeakinAccount</h2>
        <form onSubmit={handleSignup}>
          <div className={styles.inputField}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className={styles.inputField}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Sign Up</button>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
        <div className={styles.switchLink}>
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
