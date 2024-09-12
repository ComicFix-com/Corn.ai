import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      
      
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<HomePage />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
