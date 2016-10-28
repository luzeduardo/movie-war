import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
            <p>{this.props.movie.name} - {this.props.movie.type} </p>
        </div>
      </div>
    )
  }
}

export default Movie;
