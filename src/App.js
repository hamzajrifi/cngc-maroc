import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Nav/Navigation';
import Nospack from './Components/NosPack/Nospack';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className='top-body'></div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nospack" exact element={<Nospack />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
