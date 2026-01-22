import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

const events = [
    {
        id: 1,
        title: 'Zumba Gecesi',
        day: 'Her Çarşamba',
        time: '19:00 - 20:00',
        instructor: 'Elif Yılmaz',
        capacity: '15 kişi',
        description: 'Enerjik müzikler eşliğinde eğlenceli bir saat! Tüm seviyelere uygun.',
        color: '#FF6B6B'
    },
    {
        id: 2,
        title: 'Meditasyon Workshop',
        day: 'Her Cumartesi',
        time: '10:00 - 11:30',
        instructor: 'Can Demir',
        capacity: '20 kişi',
        description: 'Zihinsel dinginlik ve farkındalık pratiği. Başlangıç seviyesi için ideal.',
        color: '#4ECDC4'
    },
    {
        id: 3,
        title: 'Hamile Pilatesi',
        day: 'Her Salı & Perşembe',
        time: '14:00 - 15:00',
        instructor: 'Seda Kaya',
        capacity: '10 kişi',
        description: 'Hamilelik sürecinde güvenli ve etkili egzersizler. Uzman eşliğinde.',
        color: '#95E1D3'
    },
    {
        id: 4,
        title: 'Yoga & Kahvaltı',
        day: 'Her Pazar',
        time: '09:00 - 11:00',
        instructor: 'Can Demir',
        capacity: '12 kişi',
        description: 'Sabah yoga seansı sonrası sağlıklı kahvaltı. Hafta sonuna mükemmel başlangıç!',
        color: '#F38181'
    }
];

const EventsSection = () => {
    return (
        <div className="section-container" style={{ background: 'var(--light)' }}>
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">ETKİNLİKLER</h4>
                    <h2>Haftalık Workshop & Özel Dersler</h2>
                    <p className="mt-4 text-gray-600">Düzenli etkinliklerimize katılın, topluluğumuzun bir parçası olun!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="event-card"
                            style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '1.5rem',
                                boxShadow: 'var(--shadow)',
                                borderLeft: `4px solid ${event.color}`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: event.color,
                                opacity: 0.1,
                                borderRadius: '0 0 0 100%'
                            }}></div>

                            <h3 className="text-center-mobile" style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                color: event.color
                            }}>
                                {event.title}
                            </h3>

                            <div className="items-center-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaCalendarAlt style={{ color: event.color, fontSize: '1rem' }} />
                                    <span style={{ fontWeight: '600' }}>{event.day}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaClock style={{ color: event.color, fontSize: '1rem' }} />
                                    <span>{event.time}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaUsers style={{ color: event.color, fontSize: '1rem' }} />
                                    <span>Kapasite: {event.capacity}</span>
                                </div>
                            </div>

                            <p className="text-center-mobile" style={{
                                color: '#666',
                                fontSize: '0.95rem',
                                marginBottom: '1rem',
                                lineHeight: '1.6'
                            }}>
                                {event.description}
                            </p>

                            <div className="text-center-mobile" style={{
                                fontSize: '0.85rem',
                                color: '#888',
                                marginBottom: '1rem'
                            }}>
                                Eğitmen: <strong>{event.instructor}</strong>
                            </div>

                            <a
                                href="#contact"
                                className="btn btn-outline"
                                style={{
                                    width: '100%',
                                    borderColor: event.color,
                                    color: event.color
                                }}
                            >
                                Kayıt Ol
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
                        Etkinliklere katılmak için aşağıdaki formu doldurun
                    </p>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Kayıt Formu
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventsSection;
