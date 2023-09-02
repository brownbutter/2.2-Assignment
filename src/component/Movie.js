// Movie.js

function Movie({ title, year }) {
  return (
    <div>
      <h3> == Movie == </h3>
      <p>
        {title} {year}
      </p>
      <hr />
    </div>
  );
}
export default Movie;
