import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="hero-bg-overlay"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>İzmir'de <span className="hero-accent">Yenilen</span>, Güçlen ve Esne</h1>
                    <p>Reformer Pilates ve Yoga ile duruş bozukluklarını düzelt, sıkılaş ve stresten arın. Başlangıç seviyesinden ileri seviyeye kadar herkes için.</p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Ücretsiz Deneme Dersi Al</a>
                        <a href="#events" className="btn btn-outline-light">Etkinlikleri Gör</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
