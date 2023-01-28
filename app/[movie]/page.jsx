import Image from 'next/image';
import React from 'react';

export async function generateStaticParams() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
  const data = await fetch(url);
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id)
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = `https://image.tmdb.org/t/p/original/`;
  const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
  const data = await fetch(url);
  const res = await data.json();

  return (
    <div>
      <h1 className="text-3xl">{res.title}</h1>
      <h2 className="text-3xl">{res.release_date}</h2>
      <h3>Runtime: {res.runtime}</h3>
      <span className="bg-green-500 inline-block my-2 py-2 px-4 rounded ">{res.status}</span>
      <Image
        src={imagePath + res.backdrop_path}
        className="my-12 w-full"
        width={1000}
        height={1000}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
