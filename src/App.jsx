import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import { Hero } from './components/hero';

function App() {
  

  return (
    <div className='container w-full md:w-1/2'>
     <Router>
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
