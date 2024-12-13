import { Route, Routes } from 'react-router-dom'
import './App.css'
import Projects from './pages/Projects';
import Home from './pages/Home';
import Auth from './pages/Auth';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = { < Home />} />
        <Route path = '/projects' element = { < Projects />} />
        <Route path = '/login' element = { < Auth />} />
        <Route path = '/register' element = { < Auth register = {true} />} />
        <Route path = '*' element = { < PageNotFound />} />
        <Route path = '/dashboard' element = { < Dashboard />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
