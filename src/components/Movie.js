import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="" alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img src="" alt="Movie" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5">Stallone</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a href="#">@io</a>.
                <a href="#">#gun</a> <a href="#">#war</a>
                <br />
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Movie;
