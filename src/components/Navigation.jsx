import {
  Home,
  Building2,
  Settings,
  Calendar,
  User,
  AppWindow,
} from 'lucide-react';

import { NavLink } from 'react-router';
function Navigation() {
  return (
    <div className='flex flex-col gap-2 '>
      <NavLink
        className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20  bg-gray-800 rounded-sm"
        to="/home"
      >
        <span>
          <Home />
        </span>
        <span>হোম</span>
      </NavLink>
      <NavLink
        className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20   rounded-sm"
        to="/bookings"
      >
        <span>
          <Calendar />
        </span>
        <span>বুকিং</span>
      </NavLink>{' '}
      <NavLink
        className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20   rounded-sm"
        to="/cabins"
      >
        <span>
          <Building2 />
        </span>
        <span>কেবিন</span>
      </NavLink>{' '}
      <NavLink
        className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20   rounded-sm"
        to="/users"
      >
        <span>
          <User />
        </span>
        <span>ব্যবহারকারী</span>
      </NavLink>{' '}
      <NavLink
        className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20   rounded-sm"
        to="/settings"
      >
        <span>
          <Settings />
        </span>
        <span>সেটিংস</span>
      </NavLink>
    </div>
  );
}

export default Navigation;
