import React from "react";
import { useSelector } from "react-redux"


function Users() {

  const users = useSelector(state => state.users)
  

  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li key={user.username}>{user.username}</li>)}
        <div>{users.length}</div>
      </ul>
    </div>
  );
}

export default Users;
