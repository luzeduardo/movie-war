import React from 'react'

class MovieSearch extends React.Component {
  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="button is-primary">
            Search
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    )
  }
}

export default MovieSearch;
