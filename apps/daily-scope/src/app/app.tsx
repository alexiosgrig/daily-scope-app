import { Dashboard, ErrorPage } from '@daily-scope/ui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
