import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import { Component } from 'react';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message'
import Counter from './components/Counter'
import Functionclick from './components/FunctionClick';
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';
import Lifecycle from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
// import Purecomp from './Purecomp';
import Parentcomp from './components/Parentcomp';
import hello22 from './components/hello22';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <hello22 /> */}
        {/* <Parentcomp />  */}
        {/* <Purecomp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleC /> */}
        {/* <Lifecycle /> */}        
        <Form />
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Functionclick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Welcome name="Bruce" playername="Batsman" /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" playername="Batsman" />
        <p>This is children</p>
        <Greet name="krish" playername="Baller" />
        <Greet name="Diana" playername="Wicketkeeper" />


        
        <Welcome name="krish" playername="Baller" />
        <Welcome name="Diana" playername="Wicketkeeper" /> */}
         {/* <Hello /> */}
      </div>
    )
  }
}

export default App;


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