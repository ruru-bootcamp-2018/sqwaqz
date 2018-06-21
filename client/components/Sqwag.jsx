import React from 'react'

const speedX = 2;
const speedY = 5;


class Squag extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
        cx: 200,
        cy: 0,
        r: 15,
        fill: 'orange',
        move: this.moveSquag.bind(this)()
      }


      
  
    }

    moveSquag () {
      setInterval(() => {
        const {cx, cy} = this.state
        // moveX(cx)
        this.moveY(cy)
      }, 1000/30)

    }

    moveY(cy) {
      let newY = cy+speedY
      this.setState({
        cy: newY
      }) 
    }

  
  
    render() {
      return (
        <React.Fragment>
          <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} fill={this.state.fill} />
        </React.Fragment>
      )
    }
  }

  export default Squag