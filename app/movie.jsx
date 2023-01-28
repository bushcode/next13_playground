import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Movie({ id, title, poster_path, release_date }) {
  const imagePath = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div>
      <Link href={`/${id}`}>
        <Image src={imagePath} alt={title} width={250} height={250} />
      </Link>
      <div className="my-4 w-64">
        <h1 className="whitespace-normal">{title}</h1>
        <h2>{release_date}</h2>
      </div>
    </div>
  );
}
