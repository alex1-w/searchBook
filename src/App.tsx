import './assets/index.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import BookPage from './pages/BookPage/BookPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<HomePage />} />

        <Route path='/:id' element={<BookPage />} />

      </Route>
    </Routes>

  );
}

export default App;
