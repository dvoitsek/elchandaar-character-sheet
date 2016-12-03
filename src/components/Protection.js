'use strict';

import React from 'react';

class Protection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ui segment'>
          <h4 className='ui centered header'>
            Armor & Protection
          </h4>
          {this.props.data.map(function(line, index) {
            return(
            <div className='ui message' key={index}>
              {line}
            </div>
          );
          })}
      </div>
    );
  }
}

export default Protection;
