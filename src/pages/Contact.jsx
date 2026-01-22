import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div className="section-container">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">İLETİŞİM</h4>
                    <h2>Bize Ulaşın</h2>
                    <p className="mt-4 text-gray-600">Sorularınız için bizimle iletişime geçin veya stüdyomuzu ziyaret edin.</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12" style={{ marginBottom: '3rem' }}>
                    <a
                        href="https://wa.me/905302312947"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary flex items-center justify-center gap-2"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            minWidth: '250px'
                        }}
                    >
                        <FaWhatsapp size={24} />
                        WhatsApp ile İletişime Geç
                    </a>
                    <a
                        href="mailto:info@yogapilates.site"
                        className="btn btn-outline flex items-center justify-center gap-2"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            minWidth: '250px'
                        }}
                    >
                        <FaEnvelope size={20} />
                        Email Gönder
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm" style={{ background: 'white', borderRadius: '15px', padding: '2rem', boxShadow: 'var(--shadow)' }}>
                        <h3 className="text-2xl font-bold mb-6" style={{ marginBottom: '1.5rem' }}>İletişim Bilgileri</h3>

                        <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary" style={{ background: '#e6fffa', padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Adres</h4>
                                    <p className="text-gray-600">Fahrettin Altay, Mithatpaşa Cd.,<br /> 35140 Karabağlar/İzmir</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary" style={{ background: '#e6fffa', padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Telefon</h4>
                                    <p className="text-gray-600">+90 530 231 29 47</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary" style={{ background: '#e6fffa', padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">WhatsApp</h4>
                                    <p className="text-gray-600">+90 530 231 29 47</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary" style={{ background: '#e6fffa', padding: '10px', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">E-posta</h4>
                                    <p className="text-gray-600">info@yogapilates.site</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Form Integration */}
                    <div className="bg-white rounded-2xl shadow-sm" style={{ background: 'white', borderRadius: '15px', padding: '1.5rem', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
                        <h3 className="text-2xl font-bold mb-6" style={{ marginBottom: '1.5rem', padding: '0.5rem 0.5rem 0' }}>Mesaj Gönder</h3>
                        <div style={{ width: '100%', height: '700px', overflow: 'hidden', position: 'relative' }}>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdgTx0ACFXuhdxQTU1PQ-liRbTItch1XZKBNIa5y5Oreg5tkw/viewform?embedded=true"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                style={{
                                    border: 'none',
                                    width: '100%',
                                    marginTop: '-110px' // Hide the "İletişim Formu" title to make it cleaner
                                }}
                            >
                                Yükleniyor…
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem' }}>
                    <iframe
                        src="https://maps.google.com/maps?q=Fahrettin%20Altay%2C%20Mithatpa%C5%9Fa%20Cd.%2C%2035140%20Karaba%C4%9Flar%2F%C4%B0zmir&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
