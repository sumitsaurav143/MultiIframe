import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <div>
      {console.log("USERS", users)}
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
