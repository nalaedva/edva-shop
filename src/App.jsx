import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer';
import computer from './assets/computer.jpeg'

function App() {
  return (
    <>
    <Hero />
    <img src={computer} alt="Computer" />
    <Footer />
    </>
  );
}

export default App;
