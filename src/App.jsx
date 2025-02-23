import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Layout from './ui/Layout';
import Shohan from './ui/Shohan';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />}>
            <Route>
              <Route path=":id" element={<Shohan />} />
            </Route>
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
