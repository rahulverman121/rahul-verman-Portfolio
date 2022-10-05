
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Achivements from './components/Achivements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <span className='menuu'>
        
      <Menu />
      </span>
      <span class="maiin">
      <BrowserRouter basename="https://profound-fox-c71c66.netlify.app">
            <Routes >
            <Route path="/" element={<Home/>}/>
            <Route index element={<Home/>}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Achivements" element={<Achivements/>}/>
            <Route path="Portfolio" element={<Portfolio/>}/>
            <Route path="Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        {/*<Home />*/}
      
      </span>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
