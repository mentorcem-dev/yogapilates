import { FaWhatsapp, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';
import './MobileStickyBar.css';

const MobileStickyBar = () => {
    return (
        <div className="mobile-sticky-bar">
            <a href="https://wa.me/905300000000" target="_blank" rel="noreferrer" className="sticky-item whatsapp">
                <FaWhatsapp className="sticky-icon" />
                <span>WhatsApp</span>
            </a>
            <a href="https://wa.me/905302312947" target="_blank" rel="noreferrer" className="sticky-item booking">
                <FaWhatsapp className="sticky-icon" />
                <span>Mesaj</span>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="sticky-item location">
                <FaMapMarkerAlt className="sticky-icon" />
                <span>Konum</span>
            </a>
        </div>
    );
};

export default MobileStickyBar;
