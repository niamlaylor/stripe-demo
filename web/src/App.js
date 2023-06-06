import './App.css';
import logo from './resources/logo512.png';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Welcome</h1>
      {showItem ? <StripeContainer/> 
      : 
      <>
        <h3>
          $29.99
        </h3>
        <img src={logo}/>
        <button onClick={() => setShowItem(true)}>Buy now</button>
      </>
      }
    </div>
  );
}

export default App;
