import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Nav/Navigation';
import Nospack from './Components/NosPack/Nospack';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css'
import Aboutus from './Components/Aboutus/Aboutus';
import Formcontact from './Components/Formcontact/Formcontact';
import RendezVous from './Components/Rendez-vous/Rendez-vous';
import PageService from './Components/pageService/PageService';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className='top-body'></div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nospack" exact element={<Nospack />} />
          <Route path="/aboutus" exact element={<Aboutus />} />
          <Route path="/contactus" exact element={<Formcontact />} />
          <Route path="/rendezvous" exact element={<RendezVous />} />
          <Route path="/Servicepage" exact element={<PageService />} />
        </Routes>
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
