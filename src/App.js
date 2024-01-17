import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Manga from './Pages/Manga.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/manga' element={<Manga/>}/>        

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
