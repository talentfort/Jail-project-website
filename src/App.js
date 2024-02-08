import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Login_Prisoner from "./components/Login_Prisoner";
import Login_Staff from './components/Login_Staff';
import UserSelection from "./components/UserSelection";
import Verification from './components/Verification';
import Meal from './pages/Meal';
import Foods from './pages/Foods';
import StaffReg from './components/StaffReg';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
          <Route path='/' element={<UserSelection/>} />
          <Route path='/login_staff' element={<Login_Staff/>}/>
          <Route path='/login_prisoner' element={<Login_Prisoner/>} />
          <Route path='/otp-ver' element={<Verification/>} />
          <Route path='/meal' element={<Meal/>} />
          <Route path='/foods' element={<Foods/>} />
          <Route path='/staff-reg' element={<StaffReg/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
