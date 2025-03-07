import { Outlet } from 'react-router';
import Header from './Header';

function Main() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
