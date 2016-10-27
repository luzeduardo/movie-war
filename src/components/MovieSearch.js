import React from 'react'

class MovieSearch extends React.Component {
  getMovies = (e) => {
    e.preventDefault();
    const search = this.refs.movie.value.trim();
    this.props.actions.getRemoteMovies(search);
  };

  render() {
    return (
      <div>
          <form onSubmit={e => this.getMovies(e)} ref="movieSearch">
            <div className="control is-grouped">
              <div className="control">
                <input className="input" type="text" placeholder="Find a movie" ref="movie" autoFocus />
              </div>
              <div className="control">
                <button type="submit" className={this.props.movies.is_searching ? "button is-info is-loading" : " button is-info" }>Search</button>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

export default MovieSearch;
