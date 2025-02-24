import { Outlet } from 'react-router';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="flex">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
