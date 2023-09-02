import GenreBox from "./GenreBox";
import Movie from "./Movie";

function Genre({ genreType, genreDescription, movie1, movie2 }) {
  return (
    <GenreBox>
      <h2>Type: {genreType}</h2>
      <h2>Description: {genreDescription}</h2>
      <Movie title={movie1.movieTitle} year={movie1.movieYear} />
      <Movie title={movie2.movieTitle} year={movie2.movieYear} />
    </GenreBox>
  );
}

export default Genre;

// function Genre({ genreDetails }) {
//   return (
//     <GenreBox>
//       <h2>Type: {genreDetails.genreType}</h2>
//       <h2>Description: {genreDetails.genreDescription}</h2>
//       <h3>Movie Title: {genreDetails.movie1}</h3>
//       <h3>Movie Title: {genreDetails.movie2}</h3>
//     </GenreBox>
//   );
// }
