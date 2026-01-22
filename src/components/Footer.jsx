import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '3rem 0' }}>
            <div className="container flex flex-col items-center justify-center">
                <div className="flex gap-4" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>
                    <FaInstagram style={{ cursor: 'pointer', transition: 'opacity 0.3s' }} className="hover:opacity-70" />
                    <FaFacebook style={{ cursor: 'pointer', transition: 'opacity 0.3s' }} className="hover:opacity-70" />
                    <FaTwitter style={{ cursor: 'pointer', transition: 'opacity 0.3s' }} className="hover:opacity-70" />
                </div>
                <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>Örnek Stüdyo Websitesi by <a href="https://reklamatic.ai" target="_blank" rel="noreferrer" style={{ color: 'white', fontWeight: '600', textDecoration: 'underline' }}>reklamatic.ai</a></p>
            </div>
        </footer>
    );
};

export default Footer;
