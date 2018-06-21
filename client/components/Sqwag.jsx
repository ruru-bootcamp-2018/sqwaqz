import React from 'react'



class Squag extends React.Component {
    constructor(props) {
      super (props)
  
      this.state = {
        sqwagz: []
      }
  
  
    }
  
  
    render() {
      return (
        <React.Fragment>
          <h1>Sqwaaaaagz</h1>
          <svg>
            {this.state.sqwagz.map((sqwag) => {
              return <Squag />
            })}
          </svg>
        </React.Fragment>
      )
    }
  }

  export default Squag