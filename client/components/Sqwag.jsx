import React from 'react'

class Squag extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
        cx: 200,
        cy: 0,
        r: 15,
        speedY: 5,
        speedX: 3,
        fill: 'orange',
        move: this.moveSquag.bind(this)(),
        grounded: false
      }

      this. moveSquag = this.moveSquag.bind(this)
      this.checkCollision = this.checkCollision.bind(this)
      this.moveAll = this.moveAll.bind(this)
      this.moveX = this.moveX.bind(this)
      this.moveY = this.moveY.bind(this)

    }


    moveSquag () {
      setInterval(() => {
        this.moveAll()
      }, 1000/30)
    }

    moveAll() {
      const {cx, cy, r, speedY, speedX} = this.state
      if (this.state.grounded) {
        this.moveX(cx, speedX)
      }
      this.moveY(cy, speedY)
      this.checkCollision(cx, cy, r)
    }

    moveY(cy, speedY) {
      let newY = cy+speedY
      this.setState({
        cy: newY
      }) 
    }

    moveX (cx, speedX) {
      console.log({cx},{speedX})
      let newX = cx+speedX
      this.setState({
        cx: newX
      }) 
    }

    checkCollision(cx, cy, r) {
      // check collision with floor
      if (cy >= 690 - r) {
        this.setState({
          speedY: 0,
          grounded: true
        }) 
      } 
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