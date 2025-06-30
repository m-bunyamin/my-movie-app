import React, { useState } from 'react';
import { searchMovies } from '../services/MovieApi';

const genres = [
  { id: '', name: 'All Genres' },
  { id: '28', name: 'Action' },
  { id: '35', name: 'Comedy' },
  { id: '18', name: 'Drama' },
  { id: '27', name: 'Horror' },
  { id: '10749', name: 'Romance' },
  // Add more genres as needed
];

const SearchBar = ({ setResults }) => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const movies = await searchMovies(query, genre, year);
    setResults(movies);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min="1900"
        max={new Date().getFullYear()}
        style={{ width: '80px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
