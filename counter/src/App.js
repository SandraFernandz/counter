import logo from './logo.svg';
import './App.css';
import './CounterPage.js';
import { CounterPage } from './CounterPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterPage initialCount={10} />
      </header>
    </div>
  );
}

export default App;
