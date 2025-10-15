import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import WPCOutdoorDecking from './pages/WPCOutdoorDecking';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wpc-outdoor-decking" element={<WPCOutdoorDecking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
