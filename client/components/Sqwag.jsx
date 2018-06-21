import React from 'react'



class Squag extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
        cx: 200,
        cy: 0,
        r: 15,
        fill: 'orange'
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