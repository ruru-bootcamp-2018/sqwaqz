import React from 'react'
import Squag from './Sqwag'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sqwagz: [1]
    }

  }


  render() {
    return (
      <React.Fragment>
        <section className="hero is-primary has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-centered">
                Hero title
              </h1>
            </div>
          </div>
        </section>


        <div class="columns">
          <div class="column has-text-centered">
            <button className="button">Make Sqwag</button>
          </div>
        </div>

        <svg width="1000" height="700">
          {this.state.sqwagz.map((sqwag) => {
            return <Squag />
          })}
        </svg>
      </React.Fragment>
    )
  }
}

export default App

