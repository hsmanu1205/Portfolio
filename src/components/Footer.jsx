import { Heart, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Made with <Heart size={16} className="heart" /> and <Code size={16} className="code-icon" /> by 
              <span className="name"> Harshit Singh</span>
            </p>
            <p className="copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <span className="whatsapp">
            <p>Connect with me on</p>
              <a href="https://wa.me/918887453760" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
          </span>

          <div className="footer-quote">
            <p className="quote-text">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="quote-author">- Cory House</p>
          </div>
        </div>
        
        <div className="footer-decoration">
          <div className="decoration-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;