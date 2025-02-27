import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Features from './components/features/Features';
import Countup from './components/countup/Countup';
import Clients from './components/clients/Clients';
import Pricing from './components/pricing/Pricing';
import Start from './components/started/Start';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  
  return (
  
  <div>
    <BrowserRouter>
      <Home />
      <Services />
      <Features />
      <Countup />
      <Clients />
      <Pricing />
      <Start />
      <Contact />
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
