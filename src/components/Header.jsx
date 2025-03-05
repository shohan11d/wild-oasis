import { User, Sun, LogOut } from 'lucide-react';

function Header() {
  return (
    <div className="flex border-b-[1px] border-gray-200/10 shadow-sm   justify-end gap-10 pr-10  py-5">
      <div className="flex gap-2">
        <span>
          <div className="h-6 w-6  bg-neutral-600 border-blue-600 rounded-full"></div>
        </span>
        <span>Mohammad Shohan</span>
      </div>
      <div className="flex space-x-2">
        <span>
          <User />
        </span>
        <span>
          <Sun />
        </span>
        <span>
          <LogOut />
        </span>
      </div>
    </div>
  );
}

export default Header;
