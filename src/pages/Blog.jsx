import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBook, FaHeart, FaDumbbell } from 'react-icons/fa';

const blogArticles = [
    {
        id: 1,
        title: "Pilates'in Sağlığa Faydaları ve Temel Teknikler",
        icon: FaDumbbell,
        excerpt: "Pilates, sadece fiziksel bir egzersiz sistemi değil, aynı zamanda zihin-beden bağlantısını güçlendiren kapsamlı bir yaşam felsefesidir.",
        content: `
Pilates, 20. yüzyılın başlarında Joseph Pilates tarafından geliştirilen ve bugün dünya çapında milyonlarca insan tarafından uygulanan etkili bir egzersiz metodudur. Bu sistem, sadece fiziksel gücü artırmakla kalmaz, aynı zamanda esneklik, denge ve zihinsel odaklanmayı da geliştirir.

### Pilates'in Temel Prensipleri

Pilates metodunun altı temel prensibi vardır: Merkezleme (Centering), Konsantrasyon, Kontrol, Hassasiyet (Precision), Nefes (Breathing) ve Akış (Flow). Bu prensipler, her hareketi bilinçli ve etkili bir şekilde gerçekleştirmenizi sağlar.

**Merkezleme**, Pilates'in kalbini oluşturur. "Powerhouse" olarak adlandırılan çekirdek bölgeniz - karın kasları, sırt kasları, kalçalar ve pelvik taban kasları - tüm hareketlerin kaynağıdır. Güçlü bir merkez, sadece daha iyi performans değil, aynı zamanda günlük yaşamda daha sağlıklı bir duruş ve azalmış yaralanma riski anlamına gelir.

### Reformer Pilates vs. Mat Pilates

Pilates iki ana formda uygulanır: Reformer (aletli) ve Mat (minderde). Her ikisinin de kendine özgü avantajları vardır.

**Reformer Pilates**, özel olarak tasarlanmış yaylı bir makine üzerinde gerçekleştirilir. Bu makine, vücudunuza kontrollü direnç sağlayarak kaslarınızı hem güçlendirir hem de uzatır. Reformer, özellikle rehabilitasyon amaçlı egzersizler için mükemmeldir çünkü direnci ihtiyacınıza göre ayarlayabilirsiniz. Başlangıç seviyesi için daha düşük direnç, ileri seviye için daha yüksek direnç kullanılabilir.

**Mat Pilates** ise yer minderi üzerinde, çoğunlukla vücut ağırlığınızla yapılan egzersizlerdir. Küçük ekipmanlar (top, çember, resistance band) eklenerek çeşitlendirilebilir. Mat Pilates, her yerde yapılabilmesi ve ekipmana ihtiyaç duymaması nedeniyle son derece pratiktir.

### Pilates'in Sağlık Faydaları

**Duruş Düzeltme**: Modern yaşamın getirdiği uzun saatler boyunca oturma, telefon kullanımı ve yanlış duruş alışkanlıkları, kifoz (kamburlaşma), lordoz ve boyun ağrıları gibi ciddi problemlere yol açar. Pilates, sırt ve karın kaslarınızı dengeli bir şekilde çalıştırarak omurganızı doğal hizasına getirir.

**Çekirdek Gücü**: Güçlü bir çekirdek, sadece estetik açıdan değil, işlevsel açıdan da hayati önem taşır. Günlük aktivitelerinizde - ağır bir çanta kaldırmaktan, merdiven çıkmaya kadar - güçlü bir merkez size destek olur ve yaralanma riskini azaltır.

**Esneklik ve Mobilite**: Pilates hareketleri, kaslarınızı uzatırken güçlendirir. Bu, sadece daha esnek olmanız değil, aynı zamanda eklemlerinizin daha geniş bir hareket aralığına sahip olması anlamına gelir.

**Stres Azaltma**: Pilates'teki kontrollü nefes teknikleri ve zihinsel odaklanma, stresi azaltmaya ve zihinsel berraklığı artırmaya yardımcı olur. Her seans, aynı zamanda bir meditasyon pratiği gibi işlev görür.

### Başlangıç Yapanlar İçin İpuçları

Pilates'e yeni başlıyorsanız, birkaç önemli noktaya dikkat etmeniz gerekir:

1. **Profesyonel Rehberlik**: Yanlış teknik, yaralanmalara yol açabilir. Sertifikalı bir eğitmenle başlamak, doğru form ve tekniği öğrenmenizi sağlar.

2. **Düzenlilik**: Haftada 2-3 seans ideal bir başlangıçtır. Düzenli pratik, sonuçları görmek için esastır.

3. **Nefes Koordinasyonu**: Her hareket, belirli bir nefes modeliyle koordine edilmelidir. Efor sırasında nefes vermek, kaslarınızın daha etkili çalışmasını sağlar.

4. **Kişisel Sınırlarınızı Tanıyın**: Pilates, bir yarış değildir. Kendi bedeninizi dinleyin ve zorlanmadan, kontrollü bir şekilde ilerleyin.

Pilates, yaşamınıza eklemeniz gereken en değerli sağlık yatırımlarından biridir. Düzenli pratikle, sadece fiziksel değil, zihinsel ve duygusal olarak da daha güçlü hissedeceksiniz.
        `
    },
    {
        id: 2,
        title: "Yoga ile Stres Yönetimi ve Zihinsel Dinginlik",
        icon: FaHeart,
        excerpt: "Modern yaşamın stresini azaltmak ve iç huzuru bulmak için yoga, binlerce yıllık bilgeliği günümüze taşıyan etkili bir araçtır.",
        content: `
Yoga, sadece fiziksel esneklik ve güç kazandıran bir egzersiz sistemi değildir; aynı zamanda zihinsel sağlığınızı, duygusal dengenizi ve genel yaşam kalitenizi iyileştiren kapsamlı bir yaşam pratiğidir. Modern bilimin de desteklediği antik bir geleneğin bilgeliğini içerir.

### Yoga ve Stres: Bilimsel Bağlantı

Kronik stres, modern toplumun en büyük sağlık sorunlarından biridir. Sürekli stres hali, kortizol seviyelerini artırır, bağışıklık sistemini zayıflatır ve kalp hastalıkları, depresyon ve uyku bozuklukları gibi ciddi sağlık problemlerine yol açabilir.

Yoga, sinir sisteminizi sakinleştirerek bu döngüyü kırar. Araştırmalar, düzenli yoga pratiğinin parasempatik sinir sistemini (dinlenme ve iyileşme sistemi) aktive ederek kortizol seviyelerini düşürdüğünü göstermektedir. Bu da daha sakin, daha odaklı ve daha mutlu hissetmeniz anlamına gelir.

### Pranayama: Nefes ile İçsel Dönüşüm

Yoga'nın en güçlü araçlarından biri pranayama - nefes kontrolüdür. Nefes, beden ve zihin arasındaki köprüdür. Nefesinizi kontrol ederek, zihinsel durumunuzu da kontrol edebilirsiniz.

**Derin Karın Nefesi (Diaphragmatic Breathing)**: Bu teknik, vagus sinirini uyararak vücudunuzu sakinleştirir. Ellerinizi karnınızın üzerine koyun, nefes alırken karnınızın şiştiğini, verirken indiğini hissedin. 5 saniye boyunca burnunuzdan nefes alın, 5 saniye tutun ve 7 saniye boyunca ağzınızdan yavaşça verin.

**Nadi Shodhana (Alternatif Burun Nefesi)**: Zihinsel netliği artıran ve stres seviyelerini düşüren bu teknik, beyninizin iki hemisferini dengeler. Sağ başparmağınızla sağ burun deliğinizi kapatın, sol burun deliğinizden nefes alın. Sonra sol burun deliğinizi kapatıp sağdan nefes verin. Bu döngüyü 5-10 dakika tekrarlayın.

### Farklı Yoga Stilleri ve Faydaları

**Vinyasa Yoga**: Dinamik ve akışkan bir stildir. Nefes ile koordine edilen hareketler, kardiyovasküler sisteminizi güçlendirir ve zihinsel odaklanmayı artırır. Stresli bir günün ardından enerji seviyenizi yükseltmek istiyorsanız ideal bir seçimdir.

**Hatha Yoga**: Daha yavaş tempolu ve temel duruşlara odaklanan bu stil, başlangıç seviyesi için mükemmeldir. Her pozisyon daha uzun süre tutulur, bu da derin gerilme ve farkındalık sağlar.

**Yin Yoga**: Pasif ve meditatif bir pratiktir. Pozisyonlar 3-5 dakika boyunca tutulur, bu da derin bağ dokuları esnetir ve zihinsel sükûnet getirir. Özellikle uyku öncesi praktik için harikadır.

**Restorative Yoga**: Tamamen dinlenmeye odaklanan bu stil, yastıklar, battaniyeler ve bloklar kullanarak vücudunuzu destekler. Sinir sisteminizi sıfırlayıp derin bir rahatlama hali yaratır.

### Meditasyon: Zihni Sakinleştirme Pratiği

Yoga pratiğinin ayrılmaz bir parçası olan meditasyon, zihinsel kontrolü ve iç huzuru geliştirmenin en etkili yoludur. Başlangıçta sadece 5 dakika bile yeterlidir.

Rahat bir pozisyonda oturun (lotus pozisyonu veya sandalyede), omurganızı dik tutun. Gözlerinizi kapatın ve nefesinize odaklanın. Düşünceler geldiğinde onları yargılamadan, sadece fark edin ve tekrar nefesinize dönün. Bu basit pratik, zamanla zihinsel netliğinizi önemli ölçüde artıracaktır.

### Sabah ve Akşam Yoga Rutinleri

**Sabah Rutini** (15-20 dakika): Güne enerjik başlamak için Surya Namaskar (Güneş Selamı) serisi mükemmeldir. Bu akış, tüm vücudunuzu uyandırır, kan dolaşımını hızlandırır ve zihinsel netlik sağlar.

**Akşam Rutini** (15-20 dakika): Günün stresini atmak için yavaş, restoratif pozisyonlar tercih edin. Paschimottanasana (öne doğru eğilme), Balasana (çocuk pozu) ve Savasana (ölü pozu) ile rahatlatıcı bir seans oluşturun.

### Günlük Yaşamda Yoga Felsefesi

Yoga, sadece minderde yapılan bir aktivite değildir; bir yaşam felsefesidir. Yama ve Niyama olarak bilinen ahlaki prensipler, günlük yaşamınızda sakinlik ve tatmin bulmanıza yardımcı olur. Ahimsa (zarar vermeme), Satya (dürüstlük) ve Santosha (memnuniyet) gibi prensipler, hem kendinize hem de başkalarına karşı daha şefkatli olmanızı sağlar.

Yoga, modern yaşamın kaosunda bir sığınak, zihinsel ve fiziksel sağlığınız için paha biçilmez bir hediyedir. Düzenli pratikle, hayatınızın her alanında daha dengeli, huzurlu ve güçlü hissedeceksiniz.
        `
    },
    {
        id: 3,
        title: "Duruş Bozuklukları: Nedenleri ve Egzersiz Çözümleri",
        icon: FaBook,
        excerpt: "Modern yaşamın getirdiği oturma alışkanlıkları duruş problemlerine yol açıyor. Peki çözüm nedir?",
        content: `
Duruş bozuklukları, günümüzde giderek yaygınlaşan ve hayat kalitesini ciddi şekilde etkileyen sağlık problemleridir. Uzun saatler bilgisayar başında geçirmek, yanlış oturuş pozisyonları ve hareketsiz yaşam tarzı, omurganızın doğal eğrilerini bozar ve ciddi ağrılara yol açar.

### Yaygın Duruş Problemleri

**Kifoz (Kamburlaşma)**: Üst sırt bölgesinde aşırı eğrilik, öne doğru yuvarlanan omuzlar ve ileri uzanan boyun ile karakterizedir. Masabaşı çalışanların, öğrencilerin ve sürekli telefon kullananların en sık karşılaştığı problemdir.

**Lordoz**: Bel bölgesinde aşırı iç bükey eğrilik, genellikle zayıf karın kasları ve sıkı kalça fleksörleri nedeniyle oluşur. Hamilelik, obezite veya yanlış egzersiz teknikleri lordoza yol açabilir.

**Skolyoz**: Omurganın yana doğru S veya C şeklinde eğrilmesi durumudur. Hafif skolyoz çoğu kişide semptomsuz olsa da, ilerlemiş vakalarda ağrı ve hareket kısıtlılığı yaratabilir.

**Forward Head Posture (İleri Baş Duruşu)**: Başınızın vücudunuzun önünde olması durumu. Her 2.5 cm öne kayma, boynunuza ek 5 kg yük bindirir. Bu da boyun ağrıları, baş ağrıları ve omuz gerginliğine neden olur.

### Duruş Bozukluklarının Nedenleri

**Oturma Alışkanlıkları**: Günde 8-10 saat oturmak, kalça fleksörlerinizi kısaltır ve sırt kaslarınızı zayıflatır. Özellikle yanlış sandalye ve masa yüksekliği, problemi katlar.

**Teknoloji Kullanımı**: "Text neck" olarak bilinen durum, telefonlara bakarken boyun bölgesinde oluşan aşırı eğiliktir. Günde saatlerce bu pozisyonda kalmak, kalıcı hasarlara yol açabilir.

**Kas Dengesizlikleri**: Bazı kaslar aşırı güçlü ve sıkı olurken, karşıt kaslar zayıf kalır. Örneğin, sıkı göğüs kasları ve zayıf sırt kasları kifoza yol açar.

**Hareketsizlik**: Egzersiz yapmamak, kaslarınızın zayıflamasına ve eklemlerinizin sertleşmesine neden olur.

### Pilates ile Duruş Düzeltme

Pilates, duruş düzeltme için en etkili egzersiz sistemlerinden biridir çünkü çekirdek gücüne odaklanır ve vücudun doğal hizalanmasını sağlar.

**Pelvic Tilt**: Sırt üstü yatın, dizlerinizi bükün. Bel bölgenizi yere bastırarak pelvisinizi hafifçe yukarı kaldırın. 5 saniye tutup bırakın. 10-15 tekrar.

**Cat-Cow (Kedi-İnek)**: Dört ayak üzerinde, elleri omuzlar hizasında. Nefes alırken sırtınızı arka ve başınızı yukarı kaldırın, nefes verirken sırtınızı yuvarlayın ve başınızı aşağı indirin. 10-15 tekrar.

**Spine Stretch**: Mindere oturun, bacakları önde, kollar öne uzatılmış. Nefes vererek omurganızı yuvarlar gibi öne doğru eğilin. Nefes alarak dönün. 8-10 tekrar.

**Shoulder Bridge**: Sırt üstü yatın, dizler bükülü. Kalçanızı kaldırarak omuzlardan dizlere kadar düz bir çizgi oluşturun. 10 saniye tutun. 8-10 tekrar.

### Günlük Alışkanlıklar

**Ergonomik Çalışma Ortamı**: Monitörünüz göz hizasında, kollarınız masada 90 derece açıda olmalı. Ayaklar yere tam basmalı.

**Her Saat Hareket**: 50 dakika çalışıp 10 dakika hareket edin. Ayağa kalkın, gerilin, yürüyün.

**Yastık Seçimi**: Uygun yastık, boynunuzun doğal eğrisini desteklemelidir. Çok yüksek veya çok alçak yastıklar boyun problemlerine yol açar.

**Bilinçli Duruş**: Gün boyunca duruşunuzu kontrol edin. Omuzlarınız geriye ve aşağı, göğüs açık, başınız dik.

Duruş problemleri göz ardı edilmemelidir. Erken müdahale ve düzenli egzersiz, ciddi komplikasyonları önler. Profesyonel bir Pilates veya yoga eğitmeni ile çalışmak, kişiselleştirilmiş bir program oluşturmanızı sağlar.
        `
    }
];

const BlogSection = () => {
    const [expandedArticle, setExpandedArticle] = useState(null);

    const toggleArticle = (id) => {
        setExpandedArticle(expandedArticle === id ? null : id);
    };

    return (
        <div className="section-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="subtitle">BLOG</h4>
                    <h2>Sağlık ve Fitness Rehberi</h2>
                    <p className="mt-4 text-gray-600">Pilates ve yoga hakkında faydalı bilgiler, ipuçları ve uzman tavsiyeleri</p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {blogArticles.map((article, index) => {
                        const IconComponent = article.icon;
                        const isExpanded = expandedArticle === article.id;

                        return (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md overflow-hidden"
                                style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    boxShadow: 'var(--shadow)',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="bg-primary/10 p-4 rounded-full"
                                            style={{
                                                background: 'rgba(139, 157, 131, 0.1)',
                                                padding: '1rem',
                                                borderRadius: '50%',
                                                flexShrink: 0
                                            }}
                                        >
                                            <IconComponent
                                                size={24}
                                                style={{ color: 'var(--primary)' }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className="text-2xl font-bold mb-2"
                                                style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}
                                            >
                                                {article.title}
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                style={{ color: '#666', fontSize: '1rem' }}
                                            >
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="blog-content mt-6"
                                            style={{
                                                marginTop: '1.5rem',
                                                lineHeight: '1.8',
                                                color: '#444'
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: article.content
                                                    .replace(/### (.*)/g, '<h3 style="font-size: 1.3rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 1rem; color: var(--dark);">$1</h3>')
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 600; color: var(--dark);">$1</strong>')
                                                    .replace(/\n\n/g, '</p><p style="margin-bottom: 1rem;">')
                                                    .replace(/^(.+)$/gm, '<p style="margin-bottom: 1rem;">$1</p>')
                                                    .replace(/<p style="margin-bottom: 1rem;"><h3/g, '<h3')
                                                    .replace(/<\/h3><\/p>/g, '</h3>')
                                                    .replace(/^\d+\.\s\*\*(.*?)\*\*:/gm, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;"><strong>$1:</strong>')
                                            }}
                                        />
                                    )}

                                    <button
                                        onClick={() => toggleArticle(article.id)}
                                        className="mt-6 btn btn-outline"
                                        style={{ marginTop: '1.5rem' }}
                                    >
                                        {isExpanded ? 'Daha Az Göster' : 'Devamını Oku'}
                                    </button>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
