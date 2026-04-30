export default function Projects() {
  return (
    <section id="projects" style={{ padding: "40px" }}>
      <h2>Projects</h2>

      {/* AI Project */}
      <div style={{ marginBottom: "30px" }}>
        <h3>AI Gaming Growth Assistant</h3>
        <p>
          AI-powered system that generates video ideas, optimizes titles, and improves content performance using structured prompt engineering.
        </p>

        <a
          href="https://github.com/ShubhamKabir/ai-gaming-growth-assistant"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>

      {/* SQL Project */}
      <div style={{ marginBottom: "30px" }}>
        <h3>SQL + Python Data Analysis</h3>
        <p>
          Data analysis project using SQL and pandas to extract, clean, and generate meaningful insights from datasets.
        </p>

        <a
          href="https://github.com/ShubhamKabir/sql-python-data-analysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>

      {/* React Project */}
      <div style={{ marginBottom: "30px" }}>
        <h3>React Task Manager + User Search</h3>
        <p>
          Task management application with API integration, user search, and LocalStorage-based persistence.
        </p>

        <a
          href="https://github.com/ShubhamKabir/react-task-manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>

        <br />

        <a
          href="https://react-task-manager-beta-taupe.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </section>
  );
}
