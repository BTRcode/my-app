import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from  './components/message'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name ="Bruce" heroName="Batman">
       <p>This is an example of children</p>
      </Greet>
      <Greet name ="clarke" heroName="Ice Man"/>
      <button>Acton</button>
      <Greet name ="Daiana" heroName="wonder woman"/>
      <Welcome /> */}
    </div>
  );
}

export default App;
