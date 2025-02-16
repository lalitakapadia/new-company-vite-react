import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="text-center">
                <p>© 2025 Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                    </a>
                    <a href="mailto:info@yourcompany.com">
                        <img src="/path/to/email-icon.png" alt="Email" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;