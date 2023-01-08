export default function Header({ showForm, setShowForm }) {
  const appTitle = "Factly";

  return (
    <header className="header">
      <div className="logo">
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
