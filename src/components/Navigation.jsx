import Logo from '../assets/react.svg';
function Navigation() {
  return (
    <div>
      <img src={Logo} alt="react logo" />
      <ul>
        <li>
          <span>icon</span> Home
        </li>
        <li>
          <span>icon</span> Bookings
        </li>
        <li>
          <span>icon</span> Cabins
        </li>
        <li>
          <span>icon</span> Users
        </li>
        <li>
          <span>icon</span> Settings
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
