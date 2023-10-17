import { useState } from "react";

const Seacrh = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setVariant] = useState("all");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchMovies(search, type);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchMovies(search, type);
  };

  const handleChangeType = (event) => {
    const newType = event.target.dataset.type;
    setVariant(newType);
    searchMovies(search, newType);
  };

  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="input-field">
            <input
              placeholder="Search..."
              type="search"
              className="validate"
              value={search}
              onChange={handleChange}
              onKeyDown={handleKey}
            />
            <button
              onClick={handleSearch}
              className="btn search-btn #ffca28 amber lighten-1"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="radio">
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleChangeType}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleChangeType}
              checked={type === "movie"}
            />
            <span>Movie</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleChangeType}
              checked={type === "series"}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    </>
  );
};

export { Seacrh };
