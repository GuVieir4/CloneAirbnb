import Header from './components/Header.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Account from './pages/Account.jsx';
import { UserContextProvider } from './contexts/UserContext.jsx';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />        
          <Route path='/register' element={<Register/>} />        
          <Route path='/account/:subpage?' element={<Account/>} />        
        </Routes>
        </BrowserRouter>
      </UserContextProvider>
  );
}

export default App
