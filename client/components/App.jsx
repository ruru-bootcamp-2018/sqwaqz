import React from 'react'
import Squag from './Sqwag'
import Door from './Door'
import Score from './Score'


const doorLeft = 860;
const doorWidth = 90;
const doorHeight = 90;




class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sqwagz: [],
      score: 0
    }

    this.birthSqwags = this.birthSqwags.bind(this)
    this.saved = this.saved.bind(this)

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

  saved() {
    console.log("calling saved")
    let newScore = this.state.score += 1
    this.setState({
      score: newScore
    })

  }

  render() {
    return (
      <React.Fragment>

        <div className="columns">
          <div className="column has-text-centered">
            <button className="button" onClick={this.birthSqwags}>Make Sqwag</button>
          </div>
        </div>

        <Score score={this.state.score}/>

        <svg width="1000" height="700">
        <Door doorLeft={doorLeft} doorWidth={doorWidth} doorHeight={doorHeight}/>
          {this.state.sqwagz.map((sqwag) => {
            return <Squag saved={this.saved} doorLeft={doorLeft} doorRight={doorLeft+doorWidth} doorTop={700-doorHeight}/>
          })}



        </svg>
      </React.Fragment>
    )
  }
}

export default App

