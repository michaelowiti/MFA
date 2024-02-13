import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Services from './Services';
import Contacts from './Contacts';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
