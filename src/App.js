import Start from "./components/Start";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./components/Login";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path='/' element={< Start />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
