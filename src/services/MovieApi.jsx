const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query, genre = '', year = '') => {
  try {
    let url = '';
    const hasGenre = genre && genre !== '';
    const hasYear = year && year !== '';
    const hasQuery = query && query.trim() !== '';

    if (hasGenre || hasYear) {
      // Use discover endpoint for filtering
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
      if (hasQuery) {
        url += `&query=${encodeURIComponent(query)}`;
        url += `&with_keywords=${encodeURIComponent(query)}`; // Not perfect, but TMDb discover doesn't support title search directly
      }
      if (hasGenre) {
        url += `&with_genres=${encodeURIComponent(genre)}`;
      }
      if (hasYear) {
        url += `&year=${encodeURIComponent(year)}`;
      }
    } else if (hasQuery) {
      // Use search endpoint for title-only search
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    } else {
      // Default: discover popular movies
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
    }

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return [];
  }
};
