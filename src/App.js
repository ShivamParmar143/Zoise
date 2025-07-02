// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Home from './components/home/Home';
// import Services from './components/services/Services';
// import Features from './components/features/Features';
// import Countup from './components/countup/Countup';
// import Clients from './components/clients/Clients';
// import Pricing from './components/pricing/Pricing';
// import Start from './components/started/Start';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import Register from './components/register/Register';
// import MyContextProvider from './components/context/MyContextProvider';
// import Setmsg from './components/setmsg/SetMsg';

// function App() {
  
//   return (
  
//   <div>
//     <BrowserRouter>

//     <MyContextProvider>
      
//       <Home />
//       <Services />
//       <Features />
//       <Countup />
//       <Clients />
//       <Pricing />
//       <Start />
//       <Contact />
//       <Footer />
//       <Setmsg />
//       </MyContextProvider>
//       </BrowserRouter>
//   </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Features from './components/features/Features';
import Countup from './components/countup/Countup';
import Clients from './components/clients/Clients';
import Pricing from './components/pricing/Pricing';
import Start from './components/started/Start';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MyContextProvider from './components/context/MyContextProvider';
import Setmsg from './components/setmsg/SetMsg';
import Home from './components/home/Home';
import Services from './components/services/Services';

import './App.css'; // 👈 Ensure global styles here

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyContextProvider>
          <div className="page-content">
            <Home />
            <Services />
            <Features />
            <Countup />
            <Clients />
            <Pricing />
            <Start />
            <Contact />
          </div>
          <Footer />
          <Setmsg />
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}



export default App;


