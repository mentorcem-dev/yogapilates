const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
            <div className="container">
                <div className="section-title">
                    <h4 className="subtitle text-center">İLETİŞİM</h4>
                    <h2>Bize Ulaşın</h2>
                </div>
                <div className="grid grid-cols-2 gap-8" style={{ background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}>
                    <div>
                        <h3>Adres Bilgileri</h3>
                        <p>İzmir, Türkiye</p>
                        <p>info@yogapilates.site</p>
                        <p>+90 555 123 45 67</p>
                    </div>
                    <div>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Adınız Soyadınız" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }} />
                            <input type="email" placeholder="E-posta Adresiniz" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }} />
                            <textarea rsows="4" placeholder="Mesajınız" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}></textarea>
                            <button className="btn btn-primary">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
