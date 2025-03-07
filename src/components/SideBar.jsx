

import Logo from '../assets/logo.png';
import Navigation from './Navigation';
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
      <Navigation />
    </div>
  );
}

export default SideBar;
