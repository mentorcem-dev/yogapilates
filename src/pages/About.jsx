import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <div className="section-container">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img src="/about.png" alt="Yoga Studio" className="w-full rounded-2xl shadow-xl" style={{ borderRadius: '20px', width: '100%', objectFit: 'cover', height: '500px' }} />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
                            <span className="block text-4xl font-bold text-primary" style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 'bold' }}>10+</span>
                            <span className="text-gray-600">Yıllık Tecrübe</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-primary font-bold tracking-wider mb-2" style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>HAKKIMIZDA</h4>
                        <h2 className="text-4xl font-bold mb-6" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Denge, Güç ve Esneklik</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
                            Stüdyomuz, 2016 yılından bu yana İzmir'de sağlıklı yaşam tutkunlarına hizmet vermektedir.
                            Amacımız sadece fiziksel bir değişim değil, zihinsel ve ruhsal bir arınma sağlamaktır.
                        </p>
                        <p className="text-gray-600 mb-8" style={{ color: '#555', marginBottom: '2rem' }}>
                            Modern reformer ekipmanları, geniş ve ferah yoga stüdyomuz ve uzman eğitmen kadromuzla
                            her seviyeden katılımcıya uygun, kişiselleştirilmiş programlar sunuyoruz.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {['Uzman Eğitmenler', 'Hijyenik Ortam', 'Kişiye Özel Program', 'Merkezi Lokasyon'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <FaCheck className="text-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="bg-light p-12 rounded-3xl text-center" style={{ background: 'var(--light)', borderRadius: '20px', padding: '3rem' }}>
                    <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        "Her bireyin kendi potansiyelini keşfetmesine aracılık etmek, bedensel farkındalığı artırarak
                        daha sağlıklı ve mutlu bir toplum oluşmasına katkıda bulunmak."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
