import { Outlet } from 'react-router';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="grid grid-cols-2">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
