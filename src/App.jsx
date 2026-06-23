import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/index.jsx'
import Footer from './components/Footer/index.jsx'
import Home from './pages/Home/index.jsx'
import Catalogos from './pages/Catalogos/index.jsx'
import Produtos from './pages/Produtos/index.jsx'
import Sobre from './pages/Sobre/index.jsx'
import Contato from './pages/Contato/index.jsx'
import Login from './pages/Login/index.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
