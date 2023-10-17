import { CardMovie } from "../CardMovie";

const ListOfMovies = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies?.map(({ Poster, Title, Year, imdbID }) => (
          <CardMovie key={imdbID} poster={Poster} title={Title} year={Year} />
        ))
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export { ListOfMovies };
