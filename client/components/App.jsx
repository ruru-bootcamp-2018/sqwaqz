import React from 'react'
import Squag from './Sqwag'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sqwagz: []
    }

    this.birthSqwags = this.birthSqwags.bind(this)

  }


  birthSqwags () {
    const sqwagSpawner = setInterval(() => {
      let newSqwagz = this.state.sqwagz;
      if (newSqwagz.length == 10) {
        clearInterval(sqwagSpawner)
      } else {
        newSqwagz.push(1)
        this.setState({
          sqwagz: newSqwagz
        })
      }
    }, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero is-info has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-centered">
                Make a squuuuuuuaq
              </h1>
            </div>
          </div>
        </section>


        <div className="columns">
          <div className="column has-text-centered">
            <button className="button" onClick={this.birthSqwags}>Make Sqwag</button>
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

