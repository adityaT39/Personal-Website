import React from 'react';
import './footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-container">
        <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
        <span className="copyright">© 2024 Aditya Tripathi</span>
      </div>
    </footer>
  );
}

export default Footer;