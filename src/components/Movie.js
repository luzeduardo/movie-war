import React from 'react'

class Movie extends React.Component {

  render() {
    return (
      <div>
        <div className="card">
            <p>
              <span>{this.props.name}</span>
              <span>{this.props.type}</span>
            </p>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
}

export default Movie;
