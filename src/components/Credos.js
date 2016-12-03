'use strict';

import React from 'react';

class Credos extends React.Component {
  constructor(props) {
    super(props);

    this.credosStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
  }

  render(){
    return(
      <div className='ui segment container' style={this.credosStyle}>
        {this.props.data.map(function(credo, idx) {
          return (
            <div className='ui segment' key={idx}>
              <div>{credo.name}</div>
              <div>{credo.rank}</div>
              <div>{credo.points}</div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Credos;
