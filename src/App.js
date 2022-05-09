import './App.css';
import './bootstrap.css'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
