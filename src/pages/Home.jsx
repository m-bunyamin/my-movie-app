import React, { useState } from 'react';
import SearchBar from '../search/SearchBar';
import MovieCard from '../results/MovieCard';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="mt-4">
      <div className="position-relative w-100 mb-4 text-center overflow-hidden" style={{minHeight: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center px-3" style={{background: 'rgba(0,0,0,0.35)', zIndex: 2}}>
          <h1 className="mb-2 fw-bold display-4" style={{color: '#fff', textShadow: '0 4px 16px #000, 0 0 12px #000'}}>Movie Search</h1>
          <p className="lead mb-4 fw-semibold" style={{color: '#FFD700', textShadow: '0 2px 8px #000, 0 0 8px #000'}}>Find your favorite movies and discover new ones!</p>
          <div className="w-100" style={{maxWidth: 480}}>
            <SearchBar setResults={setResults} />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <SearchBar setResults={setResults} />
      </div>
      <div className="row g-3">
        {results.map((movie) => (
          <div className="col-md-4 col-lg-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
