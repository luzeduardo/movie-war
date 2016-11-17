import React from 'react';

class Movie extends React.Component {

  render() {
    const movie = this.props.movie;
    return (
      <div>
        <div className="box">
          <article className="media">
              <div className="media-left">
                {movie.Poster !== "N/A" &&
                  <figure className="image is-32x32">
                    <img src={movie.Poster} alt={movie.Title} />
                  </figure>
                }
              </div>
              <div className="media-content">
                <div className="content">
                  <strong>{movie.Title}</strong> <small>{movie.Year}</small> <small>{movie.Metascore}</small>
                </div>
              </div>
          </article>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
}

export default Movie;
