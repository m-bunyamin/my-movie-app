const MovieCard = ({ movie }) => {
    const imgUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : 'https://via.placeholder.com/200x300?text=No+Image';
  
    return (
      <div>
        <img src={imgUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.overview.slice(0, 100)}...</p>
      </div>
    );
  };
  
  export default MovieCard;
  