import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;