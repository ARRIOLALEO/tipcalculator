import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import TipCalculator from './components/TipCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <TipCalculator/>
      <Footer/>
    </div>
  );
}

export default App;
