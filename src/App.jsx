import AppLayout from './components/AppLayout';
import Logo from './assets/react.svg';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from './page/Home';
import Bookings from './page/Bookings';
import Cabins from './page/Cabins';
import Users from './page/Users';
import Settings from './page/Settings';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="bookings" element={<Bookings />}></Route>
          <Route path="cabins" element={<Cabins />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
