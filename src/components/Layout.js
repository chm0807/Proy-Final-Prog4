// src/components/Layout.js
import React from 'react';
import { FaTwitter, FaPinterest, FaReddit, FaTumblr, FaEnvelope } from 'react-icons/fa';
import '../styles/Layout.css'; // Asegúrate de importar tu archivo CSS de estilos aquí

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <head>
                <title>Proyecto Final</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                {children}
                <footer className="footer">
                    <div className="social-icons">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="icon" style={{ color: '#1DA1F2' }} />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <FaPinterest className="icon" style={{ color: '#BD081C' }} />
                        </a>
                        <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
                            <FaReddit className="icon" style={{ color: '#FF5700' }} />
                        </a>
                        <a href="https://www.tumblr.com/" target="_blank" rel="noopener noreferrer">
                            <FaTumblr className="icon" style={{ color: '#36465D' }} />
                        </a>
                        <a href="mailto:example@example.com">
                            <FaEnvelope className="icon" style={{ color: '#FF0000' }} />
                        </a>
                    </div>
                </footer>
            </body>
        </div>
    );
};

export default Layout;
