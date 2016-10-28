import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
            <p>{this.props.movie.name} - {this.props.movie.type} </p>
            {/* <div className="card-image">
              <figure className="image is-4by3">
                <img src="" alt="" />
              </figure>
            </div> */}
        </div>
      </div>
    )
  }
}

export default Movie;
