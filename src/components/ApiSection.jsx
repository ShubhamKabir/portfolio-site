import { useEffect, useState } from "react";

export default function ApiSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <section style={{ padding: "20px" }}>
      <h2>Live API Data</h2>

      {users.map(user => (
  <div key={user.id} style={{ margin: "6px 0" }}>
    {user.name}
  </div>
))}
    </section>
  );
}