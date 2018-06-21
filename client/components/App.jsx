import React from 'react'
import Squag from './Sqwag'



class App extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      sqwagz: [1]
    }

  }


  render() {
    return (
      <React.Fragment>
        <section className="hero is-link">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-centered">
                Hero title
              </h1>
            </div>
          </div>
        </section>

        <button className="button">Make Sqwag</button>
        <br />
        <br />

        <svg width="1000" height="1000">
          {this.state.sqwagz.map((sqwag) => {
            return <Squag />
          })}
        </svg>
      </React.Fragment>
    )
  }
}

export default App

