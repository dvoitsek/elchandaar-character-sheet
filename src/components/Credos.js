'use strict';

import React from 'react';

import Credo from './Credo';

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
        <div className='ui three column grid'>
        {this.props.data.map(function(credo, idx) {
          return (
            <Credo data={credo} key={idx} />

          )
        })}
      </div>
      </div>
    );
  }
}

export default Credos;
