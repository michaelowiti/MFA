import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Services from './Services';
import Contacts from './Contacts';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
