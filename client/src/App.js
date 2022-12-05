import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">

        <Router>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/navbar' element={<NavBar/>} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
