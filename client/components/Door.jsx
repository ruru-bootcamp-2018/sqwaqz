import React from 'react'

class Door extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
      }
    }




    render() {
      return (
        <React.Fragment>
            <g>
                <image x={this.props.doorLeft} y="610" height={this.props.doorHeight} width={this.props.doorWidth} xlinkHref="https://image.flaticon.com/icons/svg/822/822258.svg" />
            </g>
        </React.Fragment>
      )
    }
  }

  export default Door

