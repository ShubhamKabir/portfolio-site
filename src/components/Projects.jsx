export default function Projects() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Projects</h2>

      <div>
       <h3>Task Manager + User Dashboard</h3>

<p>
  A React application that allows users to manage tasks with local storage
  and integrates an external API to display and search user data.
</p>

<ul>
  <li>Add, delete, and complete tasks</li>
  <li>Persist data using localStorage</li>
  <li>Fetch users from API</li>
  <li>Search and filter users</li>
</ul>

<a href="https://github.com/ShubhamKabir/react-task-manager" target="_blank">
  View Code
</a>

<br />

<a href="https://react-task-manager-beta-taupe.vercel.app" target="_blank">
  Live Demo
</a>
      </div>
    </section>
  );
}
