import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer';
import loading from './assets/loading.jpg';
import Header from './components/Navbar/Header';




function App() {
  return (
    <>
    <Header />
    <Hero />
    <img src={loading} alt="Loading" />
    <Footer />
    </>
  );
}

export default App;
