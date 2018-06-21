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
        <h1>Sqwaaaaagz</h1>
        <a classlist="button">Make Sqwag</a>
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

