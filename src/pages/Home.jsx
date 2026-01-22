import Hero from '../components/Hero';
import AboutPage from './About';
import ClassesPage from './Classes';
import PricingPage from './Pricing';
import InstructorsPage from './Instructors';
import EventsPage from './Events';
import BlogPage from './Blog';
import ContactPage from './Contact';
import PageTransition from '../components/common/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <AboutPage />
            </section>

            <section id="classes">
                <ClassesPage />
            </section>

            <section id="pricing">
                <PricingPage />
            </section>

            <section id="instructors">
                <InstructorsPage />
            </section>

            <section id="events">
                <EventsPage />
            </section>

            <section id="blog">
                <BlogPage />
            </section>

            {/* Testimonials Section */}
            <section className="section bg-light">
                <div className="container text-center">
                    <h4 className="subtitle">YORUMLAR</h4>
                    <h2 className="mb-12">Üyelerimiz Neler Diyor?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Melis Ş.", comment: "3 aydır reformer pilatese geliyorum, duruşum tamamen değişti. Eğitmenler çok ilgili.", role: "Pilates Üyesi" },
                            { name: "Can K.", comment: "Yoga dersleri ile stresim azaldı, esnekliğim arttı. Stüdyonun enerjisi harika.", role: "Yoga Üyesi" },
                            { name: "Zeynep S.", comment: "Temiz, ferah ve profesyonel bir ortam. Herkese tavsiye ederim.", role: "Pilates Üyesi" }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="italic text-gray-600 mb-6">"{testimonial.comment}"</p>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <span className="text-sm text-primary">{testimonial.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact">
                <ContactPage />
            </section>
        </PageTransition>
    );
};

export default Home;
