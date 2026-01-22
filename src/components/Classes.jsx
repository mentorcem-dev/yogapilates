import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const classesData = [
    {
        title: 'Pilates Reformer',
        desc: 'Kas gücünü artıran, esnekliği geliştiren ve duruşunuzu düzelten aletli pilates dersleri.',
        icon: '🧘‍♀️'
    },
    {
        title: 'Vinyasa Yoga',
        desc: 'Nefes ve hareketin akışkan uyumuyla zihninizi sakinleştirin, bedeninizi güçlendirin.',
        icon: '🌿'
    },
    {
        title: 'Meditasyon',
        desc: 'İçsel huzuru ve farkındalığı artırmak için rehberli meditasyon seansları.',
        icon: '✨'
    }
];

const Classes = () => {
    return (
        <section id="classes" className="section bg-light">
            <div className="container">
                <div className="section-title">
                    <h4 className="subtitle text-center">DERSLERİMİZ</h4>
                    <h2>Sizin İçin Neler Var?</h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {classesData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="class-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                boxShadow: 'var(--shadow)',
                                textAlign: 'center',
                                transition: 'var(--transition)'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p style={{ color: '#666' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/classes" className="btn btn-outline" style={{ borderColor: 'var(--dark)' }}>Tüm Dersleri İncele</Link>
                </div>
            </div>
        </section>
    );
};

export default Classes;
