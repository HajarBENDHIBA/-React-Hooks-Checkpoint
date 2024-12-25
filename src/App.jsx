import { useState, useEffect } from 'react';
import MovieList from './Component/MovieList';
import Filter from './Component/Filter';
import AddMovie from './Component/AddMovie';

const App = () => {
  // Read movies from localStorage if available, or default to an empty array
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [
      {
        "title": "The Secret Garden",
        "description": "A young orphan discovers a magical garden hidden at her strict uncle's estate, changing their lives forever.",
        "posterURL": "https://i.pinimg.com/736x/2c/cf/7a/2ccf7a2c575899c210893878dcd42ac1.jpg",
        "rating": 7.4
      },
      {
        "title": "Home Alone",
        "description": "An 8-year-old boy is accidentally left home alone during Christmas and must defend his house from two clumsy burglars.",
        "posterURL": "https://i.pinimg.com/736x/4e/27/8d/4e278d8db6710b3735140c5dcf4f3f71.jpg",
        "rating": 7.7
      },
      {
        "title": "Reisen til Julestjernen",
        "description": "A brave girl sets out to find a magic Christmas star to free her kingdom from a curse.",
        "posterURL": "https://i.pinimg.com/736x/6a/db/83/6adb83ba9d8a732eedaec2fdc35cf0ad.jpg",
        "rating": 6.8
      },
      {
        "title": "Crimson Peak",
        "description": "A young author is swept away to her mysterious husband’s gothic mansion, haunted by dark secrets and ghosts of the past.",
        "posterURL": "https://i.pinimg.com/736x/c4/63/ff/c463ff4ea805db939afca7146e49080c.jpg",
        "rating": 6.6
      }
    ];
  });

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    // Save updated movies list to localStorage
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && movie.rating >= filterRating
  );

  return (
    <div className="container text-center mx-auto p-4">
      <h1 className="text-5xl font-bold m-12 text-gray-700">My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onTitleChange={setFilterTitle}
        onRatingChange={setFilterRating}
      />
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
