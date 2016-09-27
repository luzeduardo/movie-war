import React from 'react'

class MovieSearch extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p className="control has-addons">
          <input className="input" type="text" placeholder="Find a movie" />
          <a className="button is-info">Search</a>
        </p>
      </div>
    )
  }
}

export default MovieSearch;
