const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg shadow p-4 flex flex-col items-center"
        >
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="w-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-bold mt-2 text-center">{movie.title}</h2>
          <p className="text-sm text-gray-600 mt-1 text-center">{movie.description}</p>
          <p className="text-yellow-500 font-bold mt-2">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
