import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import NotFoundPage from './Pages/Shared/NotFoundPage/NotFoundPage';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SingleItem from './Pages/Home/Dishes/SingleItem/SingleItem';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <div className="App" style={{ minHeight: '97vh' }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/items/:itemId' element={<SingleItem />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
