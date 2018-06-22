import React from 'react'
import Squag from './Sqwag'
import Door from './Door'
import Score from './Score'


const doorLeft = 900;
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
    let audio = new Audio('game.mp3');
    audio.play();
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

  // componentDidMount() {
  //   let audio = new Audio('game.mp3');
  //   audio.play();
  // }

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
            <button className="button" onClick={this.birthSqwags}>Deploy Sqwagz!</button>
          </div>
        </div>

        <Score score={this.state.score}/>
          <div className="pad has-text-centered">
          <svg width="1200" height="600">
            <g>
              <image x='0' y='0' height='600' width='1200' xlinkHref="https://78.media.tumblr.com/8f75349b53791509c4dca46926c8946d/tumblr_mmxhrjIcvF1srot8so1_400.gif" />
            </g>
            <Door doorLeft={doorLeft} doorWidth={doorWidth} doorHeight={doorHeight}/>
            {this.state.sqwagz.map((sqwag) => {
              return <Squag saved={this.saved} doorLeft={doorLeft} doorRight={doorLeft+doorWidth} doorTop={600-doorHeight}/>
            })}
          </svg>
        </div>
      </React.Fragment>
    ) 
  }
}

export default App

