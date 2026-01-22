import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const packages = [
    {
        name: 'Tanışma Paketi',
        price: '750₺',
        desc: 'İlk kez gelenler için özel deneme fırsatı.',
        features: [
            '2 Adet Reformer Ders',
            'Vücut Analizi',
            '1 Hafta Geçerli',
            'Eğitmen Tanışması'
        ],
        highlight: false
    },
    {
        name: 'Standart Paket',
        price: '3.500₺',
        desc: 'Düzenli pratik yapmak isteyenler için.',
        features: [
            '8 Adet Reformer Ders',
            'Ayda 2 Telafi Hakkı',
            '45 Gün Geçerli',
            'Online Rezervasyon'
        ],
        highlight: true
    },
    {
        name: 'Grup Yoga Üyelik',
        price: '2.000₺',
        desc: 'Sınırsız yoga üyeliği ile ruhunu dinlendir.',
        features: [
            'Sınırsız Yoga Dersi',
            'Tüm Mat Dersleri Dahil',
            '1 Ay Geçerli',
            'Workshop İndirimi'
        ],
        highlight: false
    }
];

const PricingSection = () => {
    return (
        <div className="section-container">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">FİYATLAR</h4>
                    <h2>Üyelik Paketleri</h2>
                    <p className="mt-4 text-gray-600">Size en uygun paketi seçin, sağlıklı yaşama adım atın.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`pricing-card p-8 rounded-2xl relative ${pkg.highlight ? 'border-2 border-primary shadow-xl' : 'border border-gray-200 shadow-sm'}`}
                            style={{
                                background: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {pkg.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.5rem',
                                    fontWeight: 'bold',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase'
                                }}>En Popüler</div>
                            )}

                            <h3 className="text-2xl font-bold mb-2 mt-4">{pkg.name}</h3>
                            <div className="text-4xl font-bold text-primary mb-2" style={{ color: 'var(--primary)' }}>{pkg.price}</div>
                            <p className="text-gray-500 mb-6" style={{ color: '#666', fontSize: '0.9rem' }}>{pkg.desc}</p>

                            <ul className="mb-8 w-full space-y-3" style={{ textAlign: 'left', width: '100%', marginBottom: '2rem' }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                                        <FaCheck style={{ color: 'var(--primary)', fontSize: '0.8rem' }} />
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn w-full ${pkg.highlight ? 'btn-primary' : 'btn-outline'}`}
                                style={{ width: '100%' }}
                            >
                                Satın Al
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 p-6 bg-light rounded-xl" style={{ marginTop: '3rem', background: 'var(--light)', padding: '2rem', borderRadius: '15px' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Özel Ders (PT) mi Arıyorsunuz?</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Kişisel hedeflerinize yönelik birebir programlar için bizimle iletişime geçin.</p>
                    <a href="#contact" className="btn btn-outline" style={{ borderColor: 'var(--dark)' }}>Bize Ulaşın</a>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
