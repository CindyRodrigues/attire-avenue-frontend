import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;