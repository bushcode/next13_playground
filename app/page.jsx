import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Movie from './movie';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
  const data = await fetch(url);
  const res = await data.json();

  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-wrap gap-8 justify-center  align-center">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
