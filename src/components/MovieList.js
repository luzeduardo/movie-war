import React from 'react'
import Movie from './Movie'
import _ from 'lodash';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    //@TODO correct this
    if (typeof(this.props.movies.list) === "undefined") {
      this.props.movies.list = [];
    } else {
      this.props.movies.list = _.mapValues(this.props.movies.list);
    }
  }

  render(){
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
