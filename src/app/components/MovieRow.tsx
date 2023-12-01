import Image from 'next/image';
import { Movie, Movies } from '../types/movie';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies
};

const MovieCard = ({ movie }: { movie: Movie }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]'>
    <Image
      alt={movie.title}
      src={movie.bannerFileURL}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />

    <div className='invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible'>
      <Image
        src={movie.bannerFileURL}
        alt={movie.title}
        width={600}
        height={400}
        className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
      />
    </div>
  </div>
);

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4 pl-2'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
