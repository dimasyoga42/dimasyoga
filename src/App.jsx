import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import { Hero } from './components/hero';
import About from './pages/about';

function App() {
  

  return (
    <div className='container w-full md:w-1/2'>
     <Router>
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
