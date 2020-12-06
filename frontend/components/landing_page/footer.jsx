import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/miguel-fung-5084691b5/">
                        <i className="devicon-linkedin-plain"></i>LinkedIn
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/mjfung1">
                        <i className="devicon-git-plain"></i>GitHub
                    </a>    
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://mjfung1.github.io/">
                        <i className="fas fa-portrait"></i>Portfolio
                    </a>
            
                </li>
            </ul>
        
        </footer>
    )
}   

export default Footer;