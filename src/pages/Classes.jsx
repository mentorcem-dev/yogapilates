import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaSpa, FaChild, FaFemale } from 'react-icons/fa';

const ClassesSection = () => {
    const [activeTab, setActiveTab] = useState('reformer');

    const renderContent = () => {
        switch (activeTab) {
            case 'reformer':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="class-detail"
                    >
                        <img src="/class-reformer.png" alt="Pilates Reformer" className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} />
                        <h3 className="flex items-center-mobile justify-center-mobile gap-3 text-center-mobile">
                            <FaRunning className="text-primary" /> Aletli Pilates (Reformer)
                        </h3>
                        <p className="mb-4 text-lg text-center-mobile">Özel tasarlanmış yaylı sistemler üzerinde yapılan, kasları uzatarak güçlendiren bir antrenman sistemidir.</p>
                        <h4 className="mt-4 font-bold text-primary">Faydaları:</h4>
                        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ marginLeft: '1.5rem' }}>
                            <li>Duruş bozukluklarını düzeltir (Kifoz, Lordoz vb.)</li>
                            <li>Çekirdek (Core) bölgesini güçlendirir</li>
                            <li>Esnekliği artırır ve kasları şekillendirir</li>
                            <li>Bel ve boyun ağrılarını azaltır</li>
                        </ul>
                        <div className="class-info p-6 bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center-mobile" style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '12px' }}>
                            <div><strong>Süre:</strong> 50 Dakika</div>
                            <div><strong>Seviye:</strong> Başlangıç / Orta / İleri</div>
                            <div><strong>Kapasite:</strong> Max 4 Kişi</div>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#events" className="btn btn-primary">Etkinlikleri Gör</a>
                        </div>
                    </motion.div>
                );
            case 'yoga':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="class-detail"
                    >
                        <img src="/yoga-new.png" alt="Yoga" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} className="mb-6 shadow-md" />
                        <h3 className="flex items-center-mobile justify-center-mobile gap-3 text-center-mobile">
                            <FaSpa className="text-primary" /> Vinyasa & Yin Yoga
                        </h3>
                        <p className="mb-4 text-lg text-center-mobile">Nefes ve hareketin akışkan uyumuyla zihninizi sakinleştirin, bedeninizi güçlendirin.</p>
                        <h4 className="mt-4 font-bold text-primary">Ders Türleri:</h4>
                        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ marginLeft: '1.5rem' }}>
                            <li><strong>Vinyasa:</strong> Akışkan ve dinamik seriler.</li>
                            <li><strong>Hatha:</strong> Temel duruşlar ve hizalanma odaklı.</li>
                            <li><strong>Yin Yoga:</strong> Bağ dokuları esneten, meditatif ve yavaş tempo.</li>
                        </ul>
                        <div className="class-info p-6 bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center-mobile" style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '12px' }}>
                            <div><strong>Süre:</strong> 60 Dakika</div>
                            <div><strong>Seviye:</strong> Her Seviye</div>
                            <div><strong>Kapasite:</strong> Max 8 Kişi</div>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#events" className="btn btn-primary">Etkinlikleri Gör</a>
                        </div>
                    </motion.div>
                );
            case 'mat':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="class-detail"
                    >
                        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mat Pilates" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} className="mb-6 shadow-md" />
                        <h3 className="flex items-center-mobile justify-center-mobile gap-3 text-center-mobile">
                            <FaChild className="text-primary" /> Mat Pilates
                        </h3>
                        <p className="mb-4 text-lg text-center-mobile">Kendi vücut ağırlığınızla veya küçük ekipmanlarla (top, çember, lastik) yapılan grup dersleridir.</p>
                        <h4 className="mt-4 font-bold text-primary">Faydaları:</h4>
                        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ marginLeft: '1.5rem' }}>
                            <li>Karın ve sırt kaslarını güçlendirir</li>
                            <li>Denge ve koordinasyonu artırır</li>
                            <li>Sıkılaşma sağlar</li>
                        </ul>
                        <div className="class-info p-6 bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center-mobile" style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '12px' }}>
                            <div><strong>Süre:</strong> 50 Dakika</div>
                            <div><strong>Seviye:</strong> Orta / İleri</div>
                            <div><strong>Kapasite:</strong> Max 10 Kişi</div>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#events" className="btn btn-primary">Etkinlikleri Gör</a>
                        </div>
                    </motion.div>
                );
            case 'pregnant':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="class-detail"
                    >
                        <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Hamile Pilatesi" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} className="mb-6 shadow-md" />
                        <h3 className="flex items-center-mobile justify-center-mobile gap-3 text-center-mobile">
                            <FaFemale className="text-primary" /> Hamile Pilatesi
                        </h3>
                        <p className="mb-4 text-lg text-center-mobile">Gebelik sürecini daha rahat geçirmeniz ve doğuma hazırlanmanız için güvenli egzersizler.</p>
                        <h4 className="mt-4 font-bold text-primary">Faydaları:</h4>
                        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ marginLeft: '1.5rem' }}>
                            <li>Bel ve sırt ağrılarını hafifletir</li>
                            <li>Pelvik taban kaslarını güçlendirir</li>
                            <li>Ödemi azaltır ve uyku kalitesini artırır</li>
                        </ul>
                        <div className="class-info p-6 bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center-mobile" style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '12px' }}>
                            <div><strong>Süre:</strong> 45 Dakika</div>
                            <div><strong>Gereklilik:</strong> Doktor onayı şarttır</div>
                            <div><strong>Tip:</strong> Birebir (Özel Ders)</div>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#contact" className="btn btn-primary">Bilgi ve Randevu Al</a>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="section-container">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">DERSLERİMİZ</h4>
                    <h2>Hakkında Detaylı Bilgi Al</h2>
                </div>

                <div className="classes-tabs-container mb-8" style={{ marginBottom: '3rem' }}>
                    <div className="classes-tabs flex justify-start md:justify-center gap-4 flex-nowrap overflow-x-auto pb-4 px-2" style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}>
                        <button
                            onClick={() => setActiveTab('reformer')}
                            className={`btn flex-shrink-0 ${activeTab === 'reformer' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ flexShrink: 0 }}
                        >
                            <FaRunning className="inline mr-2" /> Reformer
                        </button>
                        <button
                            onClick={() => setActiveTab('yoga')}
                            className={`btn flex-shrink-0 ${activeTab === 'yoga' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ flexShrink: 0 }}
                        >
                            <FaSpa className="inline mr-2" /> Yoga
                        </button>
                        <button
                            onClick={() => setActiveTab('mat')}
                            className={`btn flex-shrink-0 ${activeTab === 'mat' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ flexShrink: 0 }}
                        >
                            <FaChild className="inline mr-2" /> Mat Pilates
                        </button>
                        <button
                            onClick={() => setActiveTab('pregnant')}
                            className={`btn flex-shrink-0 ${activeTab === 'pregnant' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ flexShrink: 0 }}
                        >
                            <FaFemale className="inline mr-2" /> Hamile
                        </button>
                    </div>
                </div>

                <div className="class-content-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default ClassesSection;
