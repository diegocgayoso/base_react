// import { useState } from 'react';
import './App.css';
// import SayName from './components/State-Lift/SayName';
// import YourName from './components/State-Lift/YourName';

import Home from './components/Router/pages/Home';
import Empresa from './components/Router/pages/Empresa';
import Contato from './components/Router/pages/Contato';

import { BrowserRouter as  Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
// 

export default function App() {
  // const [nome, setNome] = useState();


  return (
    <div className="App">
      
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
        
          <Route path="/empresa" >
            <Empresa />
          </Route>
       
          <Route path="/contato" >
            <Contato />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* State Lift */}
      {/* <h2>State Lift</h2>
      <YourName setNome={setNome} />
      {nome == '' ?(
        <></>
      ):(
        <p>{nome}</p>
      )}
      <SayName nome={nome}/> */}

      {/* React Router */}

    </div>
  );
}


