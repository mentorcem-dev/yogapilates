import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const instructors = [
    {
        name: 'Elif Yılmaz',
        role: 'Kurucu & Baş Eğitmen',
        specialty: 'Reformer Pilates, Klinik Pilates',
        bio: '10 yıllık deneyimiyle postür bozuklukları ve rehabilitasyon odaklı çalışmaktadır. Polestar Pilates mezunudur.',
        img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        pos: 'center'
    },
    {
        name: 'Ekin Yılmaz',
        role: 'Yoga Eğitmeni',
        specialty: 'Vinyasa, Hatha, Meditasyon',
        bio: 'Hindistan\'da aldığı eğitimlerle, geleneksel yoga öğretilerini modern hayatla birleştiriyor.',
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        pos: 'center 30%' // Center primarily on face/upper body
    },
    {
        name: 'Seda Kaya',
        role: 'Pilates Eğitmeni',
        specialty: 'Mat Pilates, Hamile Pilatesi',
        bio: 'Kadın sağlığı ve hamilelik süreci egzersizleri konusunda uzmanlaşmış, enerjik bir eğitmen.',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        pos: 'center'
    }
];



const InstructorsSection = () => {
    return (
        <div className="section-container">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">EKİBİMİZ</h4>
                    <h2>Eğitmenlerimizle Tanışın</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {instructors.map((inst, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="instructor-card"
                            style={{
                                background: 'white',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow)'
                            }}
                        >
                            <div className="img-wrapper" style={{ height: '350px', overflow: 'hidden' }}>
                                <img src={inst.img} alt={inst.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: inst.pos || 'center', transition: 'transform 0.5s' }} className="hover:scale-105" />
                            </div>
                            <div className="p-6 text-center">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{inst.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>{inst.role}</p>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>{inst.bio}</p>
                                <div className="flex justify-center gap-4">
                                    <span style={{ background: '#f0f0f0', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', color: '#555' }}>{inst.specialty}</span>
                                </div>
                                <div className="flex justify-center gap-4 mt-4" style={{ marginTop: '1.5rem' }}>
                                    <FaInstagram className="text-gray-400 hover:text-primary cursor-pointer transition-colors" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstructorsSection;
