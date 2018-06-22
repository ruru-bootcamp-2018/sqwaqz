import React from 'react'

class Squag extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
        cx: 200,
        cy: 0,
        r: 15,
        speedY: 8,
        speedX: 6,
        fill: 'orange',
        move: this.moveSquag.bind(this)(),
        grounded: false,
        isAlive: true,
        isMovingRight: false
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
      // console.log({cx},{speedX})
      let newX = cx+speedX
      this.setState({
        cx: newX
      }) 
    }

    checkCollision(cx, cy, r) {
      if (cy >= 540) { // check collision with floor
        this.setState({
          speedY: 0,
          grounded: true,
          isMovingRight: true
        })
      }
      if (cx >= this.props.doorLeft && cx <= this.props.doorRight) { // check collision with door
        console.log("about to call saved")
        if (this.state.isAlive) this.props.saved()
        this.setState({
          isAlive: false
        })
      }

    }

  
  



    render() {
      return (
        <React.Fragment>
         {this.state.isAlive && !this.state.grounded &&
          <g>
            <image x={this.state.cx} y={this.state.cy} width={this.state.r*3} h={this.state.r*3} fill={this.state.fill} xlinkHref="StandStillRight.png" />
          </g> 
          || this.state.isAlive && this.state.isMovingRight && 
          <g>
            <image x={this.state.cx} y={this.state.cy} width={this.state.r*3} h={this.state.r*3} fill={this.state.fill} xlinkHref="RunRight.gif" />
          </g>}
        </React.Fragment>
      )
    }
  }

  export default Squag

   {/* <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} fill={this.state.fill} /> */}