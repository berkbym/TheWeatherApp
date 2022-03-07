import './App.css';
import ForecastGroup from './components/ForecastGroup';
import HeroContent from './components/HeroContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      {/* Hero Content component shows today's weather.*/}
      <HeroContent />
      {/* 
        ForecastGroup component shows the next 3 days from the Weather API.
        With the current free payment method only 3 days can be shown.
       */}
      <ForecastGroup />
    </div>
  );
}

export default App;
