import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';

function AppLayout() {
  return (
    <div className="">
      <div className="flex h-dvh ">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
