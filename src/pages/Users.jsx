import { Outlet } from 'react-router';

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
}

export default Users;
