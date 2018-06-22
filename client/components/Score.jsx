import React from 'react'

class Score extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
   
      }
    }

    render() {
      return (
        <React.Fragment>
            <h3 className="score has-text-centered">Score: {this.props.score}</h3>
        </React.Fragment>
      )
    }
  }

  export default Score
