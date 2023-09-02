// const genre1 = {
//   genreType: "Action",
//   genreDescription: "Action description",
//   // movie1: {{ movieTitle: "Movie 1", movieYear: "2000"}}
//   // movie2: {{ movieTitle: "Movie 2", movieYear: "2000"}}
// };

// const genre2 = {
//   genreType: "Romance",
//   genreDescription: "Action description",
//   movie1: "Movie 1 Title",
//   movie2: "Movie 1 Title",
// };

import Genre from "./Genre";
function Parent() {
  return (
    <>
      <h1>Parent here!</h1>
      <Genre
        genreType="Action"
        genreDescription={"Action description"}
        movie1={{ movieTitle: "Action Movie 1", movieYear: "Year 1" }}
        movie2={{ movieTitle: "Action Movie 2", movieYear: "Year 2" }}
      />
      <br></br>
      <br></br>
      <Genre
        genreType="Comedy"
        genreDescription={"Comedy description"}
        movie1={{ movieTitle: "Comedy Movie 1", movieYear: "Year 1" }}
        movie2={{ movieTitle: "Comedy Movie 2", movieYear: "Year 2" }}
      />
    </>
  );
}

export default Parent;
