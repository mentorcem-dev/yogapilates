import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import MobileStickyBar from './components/common/MobileStickyBar';

import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
