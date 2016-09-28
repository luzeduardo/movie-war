import React from 'react'

class MovieSearch extends React.Component {
  render() {
    return (
      <div>
        <p className="control has-addons">
          <input className="input" type="text" placeholder="Find a movie" />
          <a className="button is-info" onClick={this.props.actions.incrementMovie.bind(null,1)}>Search</a>
        </p>
      </div>
    )
  }
}

export default MovieSearch;
