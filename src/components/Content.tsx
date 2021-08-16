import { memo, useCallback } from 'react';
import { MovieCard } from './MovieCard';
import '../styles/content.scss';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface ContentProps {
  movies: MovieProps[]
}

const ContentComponent = ({ movies }: ContentProps) => {   
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.imdbID}
          title={movie.Title} 
          poster={movie.Poster} 
          runtime={movie.Runtime} 
          rating={movie.Ratings[0].Value} 
        />
      ))}
    </div>
  )
}

export const Content = memo(ContentComponent);