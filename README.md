# Movie Recommendation App

A React + Vite movie discovery application with an Express backend supporting authentication and a watchlist.

## Features

- Search movies using the TMDb API with optional genre and year filters.
- User login via backend authentication and JWT token storage in `localStorage`.
- Navigation with Home, Login, Register, and Profile pages.
- Backend endpoints for auth and watchlist management.

## Project structure

- `src/` — React app source files
- `src/pages/` — main page components: `Home`, `Login`, `Register`, `Profile`
- `src/search/` — search UI and movie card components
- `src/services/` — API helpers for TMDb movie search
- `Server/` — backend Express API and database models

## Prerequisites

- Node.js 18+ and npm
- MongoDB access for the server backend
- TMDb API key for the frontend search

## Environment setup

### Frontend

The frontend uses `VITE_MOVIE_API_KEY` in `Client/my-movie-app/.env`.

Example:

```env
VITE_MOVIE_API_KEY=your_tmdb_api_key_here
```

### Backend

The backend runs from `Server/` and requires a `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Run the app

### Start backend

1. Open a terminal in `movie-app/Server`
2. Install dependencies if needed:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

The backend listens on `http://localhost:5000`.

### Start frontend

1. Open a terminal in `movie-app/Client/my-movie-app`
2. Install dependencies if needed:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

The frontend should be available at `http://localhost:5173`.

## Notes

- The login page calls the backend auth route.
- The register page currently displays a frontend success flow and can be wired to the backend register route.
- The backend exposes `/api/auth` and `/api/watchlist` endpoints for auth and watchlist operations.
