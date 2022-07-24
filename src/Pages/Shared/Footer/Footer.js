import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-dark text-light">
            <div className="container py-5">
                <h5 className="text-center py-3">Copyright &copy; Your Doctor {year}. All rights reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;