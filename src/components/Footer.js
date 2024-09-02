// Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Deakin University</p>
      <p>Contact us: <a href="mailto:info@deakin.edu.au">info@deakin.edu.au</a></p>
    </footer>
  );
};

export default Footer;
