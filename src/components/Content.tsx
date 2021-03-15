import { MovieCard } from './MovieCard';
import '../styles/content.scss';

export interface MovieProps {
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

export function Content(props: ContentProps) {
  return (
    <div className="movies-list">
      {props.movies.map(movie => (
        <MovieCard 
          key={movie.Title}
          title={movie.Title} 
          poster={movie.Poster} 
          runtime={movie.Runtime} 
          rating={movie.Ratings[0].Value} 
        />
      ))}
    </div>
  )
}