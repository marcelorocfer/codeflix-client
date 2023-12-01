import Image from 'next/image';
import { Movies } from '../types/movie';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black 
      transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110'>
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='MAID'
      className='rounded' 
    />
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
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {movies.map((movie) => (
          <h1 key={movie.id}>{movie.title}</h1>
        ))}
      </div>
    </div>
  );
}
