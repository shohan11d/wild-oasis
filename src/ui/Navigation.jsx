import { Link } from 'react-router';

function Navigation() {
  return (
    <div>
      <ul className="w-[200px] h- p-2 border  px-10 ">
        <li className="hover:bg-blue-800 hover:text-white rounded p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-blue-800 p-2 hover:text-white rounded">
          <Link to="bookings">Bookings</Link>
        </li>
        <li className="hover:bg-blue-800 p-2 hover:text-white rounded">
          <Link to="/cabins">Cabins</Link>
        </li>
        <li className="hover:bg-blue-800 p-2 hover:text-white rounded">
          <Link to="users">Users</Link>
        </li>
        <li className="hover:bg-blue-800 p-2 hover:text-white rounded" >
          <Link to="settings" >Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
