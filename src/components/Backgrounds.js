'use strict';

import React from 'react';

class Backgrounds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='ui container segment'>
        {this.props.data.map(function(bak, idx) {
          return <div key={idx}>
            <div>{bak.name}</div>
            <div>{bak.description}</div>
          </div>
        })}
      </div>
    );
  }
}

export default Backgrounds;
