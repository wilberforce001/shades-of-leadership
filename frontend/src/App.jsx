import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Episodes from './pages/Episodes'
import About from './pages/About';
import Guests from './pages/Guests';
import GuestApplication from './pages/GuestApplication';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/guests' element={<Guests />}/>
        <Route path='/apply' element={<GuestApplication />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;