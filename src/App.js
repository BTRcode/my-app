import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from  './components/message'
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
      <Counter />
      <Message/> 
      <Greet name ="Bruce" heroName="Batman">
       <p>This is an example of children</p>
      </Greet>
      <Greet name ="clarke" heroName="Ice Man"/>
      <button>Action</button>
      <Greet name ="Daiana" heroName="wonder woman"/>
      <Welcome />
    </div>
  );
}

export default App;
