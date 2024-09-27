import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
