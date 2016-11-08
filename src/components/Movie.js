import React from 'react'

class Movie extends React.Component {

  render() {
    return (
      <div>
        <div className="card">
            <p>
              <span>{this.props.Title}</span>
              <span>{this.props.Type}</span>
            </p>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Type: React.PropTypes.string.isRequired
}

export default Movie;
