import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Episodes from './pages/Episodes'
import About from './pages/About';
import Guests from './pages/Guests';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/guests' element={<Guests />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;