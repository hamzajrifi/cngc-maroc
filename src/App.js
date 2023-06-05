import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Nav/Navigation';
import Nospack from './Components/NosPack/Nospack';

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
      </div>
    </BrowserRouter>
  );
}

export default App;
