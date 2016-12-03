'use strict';

import React from 'react';

class Biography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className='ui segment'>
        <h4 className='ui centered header'>
          Biography
        </h4>
      {this.props.data.map(function(bio, index) {
        return(
          <div className='ui message' key={index}>
            {bio}
          </div>
        );
      })}
    </div>
  );
  }
}

export default Biography;
