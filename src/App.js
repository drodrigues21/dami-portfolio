import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Lookbook from './components/Lookbook';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Lookbook />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
