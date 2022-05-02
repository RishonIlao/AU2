import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import HeroBanner from './components/HeroBanner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
