import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Router>
       
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact/>
        </Routes>
     
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
