import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/about.png" alt="Pilates Reformer" className="about-img" />
                    <div className="experience-badge">
                        <span className="years">10+</span>
                        <span className="text">Yıllık<br />Tecrübe</span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="subtitle">HAKKIMIZDA</h4>
                    <h2>Denge, Güç ve Esneklik</h2>
                    <p>
                        Stüdyomuzda, bedeninizi güçlendirmek ve zihninizi sakinleştirmek için tasarlanmış kapsamlı bir yaklaşım sunuyoruz.
                        Uzman eğitmenlerimiz eşliğinde, her seviyeye uygun Yoga ve Pilates Reformer derslerimizle hedeflerinize ulaşmanızı sağlıyoruz.
                    </p>
                    <p>
                        Kişiye özel programlarımız ve modern ekipmanlarımızla, kendinizin en iyi versiyonunu keşfetmeniz için buradayız.
                    </p>
                    <ul className="about-features">
                        <li>✓ Sertifikalı Eğitmenler</li>
                        <li>✓ Modern Ekipmanlar</li>
                        <li>✓ Küçük Grup Dersleri</li>
                        <li>✓ Birebir Özel Dersler</li>
                    </ul>
                    <Link to="/about" className="btn btn-primary">Hikayemizi Oku</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
