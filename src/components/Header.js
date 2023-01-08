export default function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          FACTLY <span style={{ fontSize: "24px" }}>v1.0</span>
        </h1>
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
