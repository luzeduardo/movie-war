import React from 'react'
import Movie from './Movie'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if (typeof(this.props.movies.list) === "undefined") {
      this.props.movies.list = [];
    }
  }

  render(){
    this.props.movies.list.map((movie) =>movie );
    return(
      <div>
        {this.props.movies.list.map( (movie, index) => {
            return (
              <Movie key={index} movie={movie}/>
            )}
        )}
      </div>
    )
  }
}
