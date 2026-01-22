import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scroll ? 'active' : ''}`}>
            <div className="container navbar-container">
                <a href="#hero" className="navbar-logo" onClick={closeMobileMenu}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                        <div>YOGA<span className="font-light">PILATES</span></div>
                        <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 500, letterSpacing: '0.5px' }}>by reklamatic.ai</span>
                    </div>
                </a>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMobileMenu}>Hakkımızda</a>
                    </li>
                    <li className="nav-item">
                        <a href="#classes" className="nav-links" onClick={closeMobileMenu}>Dersler</a>
                    </li>
                    <li className="nav-item">
                        <a href="#instructors" className="nav-links" onClick={closeMobileMenu}>Eğitmenler</a>
                    </li>
                    <li className="nav-item">
                        <a href="#events" className="nav-links" onClick={closeMobileMenu}>Etkinlikler</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pricing" className="nav-links" onClick={closeMobileMenu}>Paketler</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-links" onClick={closeMobileMenu}>Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links btn-nav" onClick={closeMobileMenu}>İletişim</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
