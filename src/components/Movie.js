import React from 'react'

class Movie extends React.Component {

  propTypes: {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
  }

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

export default Movie;
