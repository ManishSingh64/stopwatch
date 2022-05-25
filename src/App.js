// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
     <Counter startTime={1} lastTime={5} />
    </div>
  );
}

export default App;
