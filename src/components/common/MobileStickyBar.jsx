import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './MobileStickyBar.css';

const MobileStickyBar = () => {
    return (
        <div className="mobile-sticky-bar">
            <a href="https://wa.me/905302312947" target="_blank" rel="noreferrer" className="sticky-item whatsapp">
                <FaWhatsapp className="sticky-icon" />
                <span>WhatsApp</span>
            </a>
            <a href="mailto:info@yogapilates.site" className="sticky-item mail">
                <FaEnvelope className="sticky-icon" />
                <span>Mail</span>
            </a>
            <a href="https://maps.google.com/maps?q=Fahrettin%20Altay%2C%20Mithatpa%C5%9Fa%20Cd.%2C%2035140%20Karaba%C4%9Flar%2F%C4%B0zmir" target="_blank" rel="noreferrer" className="sticky-item location">
                <FaMapMarkerAlt className="sticky-icon" />
                <span>Konum</span>
            </a>
        </div>
    );
};

export default MobileStickyBar;
