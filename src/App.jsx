import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Products from './components/Products/Products';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/login/LoginForm'
import Register from'./components/auth/register/Register'
import Footer from './Footer/Footer';
import Contact from './ContactUs/Contact';
import ProductsDetails from './components/Products/ProductDetails'
import Aboutme from './components/aboutme/Aboutme';
import UserSettings from './components/UserSetting/UserSetting';

function App() {
  return  (
  <Router> 
    <div className="App">
  <Navbar />
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/data" element={<Products />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path='/ContactUs' element={<Contact/>}/>
    <Route path='/details/:id' element={<ProductsDetails/>}/>
    <Route path="/About" element={<Aboutme/>}/>
    <Route path='/UserSetting' element={<UserSettings/>}/>
  </Routes>

  <Footer/>
  </div>
</Router>
  );
}

export default App;
