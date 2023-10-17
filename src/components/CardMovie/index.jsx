const CardMovie = (props) => {
  const { title, poster, year } = props;

  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x450?text=${title}`}
            alt="poster"
          />
        ) : (
          <img className="activator" src={poster} alt="poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
      </div>
    </div>
  );
};

export { CardMovie };
