import React from 'react';
import ImageCard from './ImageCard';

class Movie extends React.Component {

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
              <div className="media-left">
                {this.props.Poster != "N/A" &&
                  <figure className="image is-64x64">
                    <img src={this.props.Poster} alt="Image" />
                  </figure>
                }
              </div>
              <div className="media-content">
                <div className="content">
                  <strong>{this.props.Title}</strong> <small>{this.props.Year}</small>
                </div>
              </div>
          </article>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Year: React.PropTypes.string.isRequired,
  Poster: React.PropTypes.string.isRequired
}

export default Movie;
