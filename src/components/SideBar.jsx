import {
  Home,
  Building2,
  Settings,
  Calendar,
  User,
  AppWindow,
} from 'lucide-react';

import Logo from '../assets/logo.png';
function SideBar() {
  return (
    <div className="flex p-5 md:p-10   border-r border-gray-200/10  flex-col items-center">
      <img
        src={Logo}
        height="50px"
        width="170px"
        className=" m-2"
        alt="react logo"
      />
      <ul className="text-gray-300 flex flex-col gap-2">
        <li className=" ">
          <a
            className="flex gap-3 py-2 hover:text-blue-600 pl-2 pr-20  bg-gray-800 rounded-sm ]"
            href=""
          >
            <span className="text-blue-600">
              <Home />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li className=" ">
          <a
            className="flex gap-3 py-2 hover:text-blue-600 hover:bg-gray-800 pl-2 pr-20  ]"
            href=""
          >
            <span className="text-blue-600">
              <Calendar />
            </span>
            <span>Bookings</span>
          </a>
        </li>{' '}
        <li className=" ">
          <a
            className="flex gap-3 py-2 hover:text-blackblue-600 hover:bg-gray-800 pl-2 pr-20  ]"
            href=""
          >
            <span className="text-blue-600">
              <Building2 />
            </span>
            <span>Cabins</span>
          </a>
        </li>
        <li className=" ">
          <a
            className="flex gap-3 py-2 hover:text-blackblue-600 hover:bg-gray-800 pl-2 pr-20  ]"
            href=""
          >
            <span className="text-blue-600">
              <User />
            </span>
            <span>Users</span>
          </a>
        </li>
        <li className=" ">
          <a
            className="flex gap-3 py-2 hover:text-blackblue-600 hover:bg-gray-800 pl-2 pr-20  ]"
            href=""
          >
            <span className="text-blue-600">
              <Settings />
            </span>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
