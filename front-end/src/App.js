import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';

function App() {
  return (
    <div class='App-body'>
      <Router>
        <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;