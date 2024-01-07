import React from "react";
import { FaLinkedin, FaUser, FaGithub } from "react-icons/fa";
import "./socialButtons.css";
function SocialButtons() {
  return (
    <div className="social-buttons-container">
      <a
        href="https://www.linkedin.com/in/jonathan-kim-bk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FaLinkedin />
        </button>
      </a>
      <a
        href="https://jonathan-kim-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FaUser />
        </button>
      </a>
      <a
        href="https://github.com/JONNYKIMBK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FaGithub />
        </button>
      </a>
    </div>
  );
}

export default SocialButtons;
