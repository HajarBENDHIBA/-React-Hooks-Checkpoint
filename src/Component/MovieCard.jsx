const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {/* Increase the height and width for a larger image */}
      <img 
        src={movie.posterURL} 
        alt={movie.title} 
        className="w-full h-80 object-cover rounded-md"  // Adjusted height to 80
      />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.description}</p>
      <p className="text-yellow-500 font-semibold">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
