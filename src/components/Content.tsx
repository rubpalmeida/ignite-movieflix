import { MovieCard } from './MovieCard';
import { Header } from './ContentHeader';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: {
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string
  },
  movies: {
    Title: string,
    Poster: string,
    Ratings: Array<{
      Source: string,
      Value: string,
    }>;
    Runtime: string;
  }[],
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <Header
        selectedGenre={selectedGenre}
      />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
