import { NavLink } from 'react-router';

function Navigation() {
  return (
    <div>
      <ul className="w-[200px] flex flex-col gap-5 p-2 border  px-10 ">
        <li className="">
          <NavLink className="hover:bg-blue-800 hover:text-white rounded p-2" to="/">Home</NavLink>
        </li>
        <li className="">
          <NavLink className="hover:bg-blue-800 p-2 hover:text-white rounded" to="bookings">Bookings</NavLink>
        </li>
        <li className="">
          <NavLink className="hover:bg-blue-800 p-2 hover:text-white rounded" to="/cabins">Cabins</NavLink>
        </li>
        <li className="">
          <NavLink className="hover:bg-blue-800 p-2 hover:text-white rounded" to="users">Users</NavLink>
        </li>
        <li className="">
          <NavLink className="hover:bg-blue-800 p-2 hover:text-white rounded" to="settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
