import logo from './logo.svg';
import './App.css';
import Parent from './components/parent';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      <Parent/>
      <Counter/>
    </div>
  );
}

export default App;
