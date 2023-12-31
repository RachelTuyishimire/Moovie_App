// import { useEffect, useState } from "react";
// import { getGenres, getMovies } from "../utilities/utils";
// import { IMAGE_BASE_URL } from "../config";
// import Link from "next/link";

// interface Genre {
//   id: number;
//   name: string;
// }

// interface Movie {
//   id: number;
//   title: string;
//   genre_ids: number[];
//   poster_path: string;
// }

// export default function GenreList() {
//   const [genres, setGenres] = useState<Genre[] | null>(null);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//   const [movies, setMovies] = useState<Movie[]>([]);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const genreData = await getGenres();
//         setGenres(genreData.genres);
//       } catch (error) {
//         console.error("Error fetching genres:", error);
//       }
//     };

//     const fetchMovies = async () => {
//       try {
//         const movieData = await getMovies();
//         setMovies(movieData.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchGenres();
//     fetchMovies();
//   }, []);

//   const handleGenreClick = (genreId: number) => {
//     setSelectedGenre(genreId);
//   };

//   const filteredMovies = selectedGenre
//     ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
//     : movies;

//   return (
//     <div className="p-4">
//       <h2 className="text-3xl text-center font-semibold mb-4">Genres</h2>
//       <div className="flex flex-wrap gap-2">
//         {genres &&
//           genres.map((genre) => (
//             <div
//               key={genre.id}
//               className={`bg-yellow-400 text-white px-5 py-6 cursor-pointer rounded-full ${
//                 selectedGenre === genre.id ? "bg-yellow-600" : ""
//               }`}
//               onClick={() => handleGenreClick(genre.id)}
//             >
//               {genre.name}
//             </div>
//           ))}
//       </div>

//       {genres && genres.length > 0 ? (
//         <div className="grid grid-cols-4 gap-5 mt-10">
//           {filteredMovies.map((movie) => (
//             <Link href={`/movie/${movie.id}`} key={movie.id}>
//               <div className="">
//                 <img
//                   src={`${IMAGE_BASE_URL}${movie.poster_path}`}
//                   alt={movie.title}
//                   className="w-full h-auto rounded-3xl mt-16 hover:transform hover:scale-110 transition duration-400ms" style={{width:"90%", height:"60vh"}}

//                 />
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <p>No genres found.</p>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { fetchCategories, fetchMovies } from "../utilities/utils";
import { IMAGE_BASE_URL } from "../config";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
}

export default function GenreList() {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await fetchCategories();
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchMoviesData = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchGenres();
    fetchMoviesData();
  }, []);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-semibold mb-4">Genres</h2>
      <div className="flex flex-wrap gap-2">
        {genres &&
          genres.map((genre) => (
            <div
              key={genre.id}
              className={`bg-yellow-400 px-4 py-2 rounded-full cursor-pointer ${
                selectedGenre === genre.id ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </div>
          ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.title}>
              <div key={movie.id} className="">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-black mt-10">No movies available for the selected genre.</p>
        )}
      </div>
    </div>
  );
}