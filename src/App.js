import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <h1>Building Amazon Clone</h1>
          <Routes>

            <Route exact path="/checkout"
            element = {<h1>Checkout</h1>}>
            </Route>

            <Route exact path="/login"
            element = {<h1>Login</h1>}>
            </Route>

            <Route exact path="/"
            element = {<h1>Home</h1>}>
            </Route>

          </Routes>
      </div>
    
    </Router>
  );
}

export default App;
