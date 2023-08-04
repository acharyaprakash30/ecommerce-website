import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import TopNavbar from './components/TopNavbar/TopNavbar';

function App() {
  return (
    <>
    <TopNavbar />
    <Navbar />
    <Hero/>
    <Product />
    </>
  );
}

export default App;
