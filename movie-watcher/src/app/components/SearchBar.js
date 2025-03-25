"use client";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{ marginBottom: "20px", textAlign: "", verticalAlign: "baseline" }}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch} // Updates the state
        style={{
          verticalAlign: "middle",
          padding: "10px",
          fontSize: "lg:18px",
          width: "100%",
          color: "black",
          border: "2px solid #ddd",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

export default SearchBar;
