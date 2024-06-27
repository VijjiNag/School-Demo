import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Programs from './components/Programs'
import './App.css'

const App = () => (
  <Router>
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/programs" element={<Programs />} />
      </Routes>
    </>
  </Router>
)

export default App
