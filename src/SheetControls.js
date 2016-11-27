'use strict';

import React from 'react';

class SheetControls extends React.Component {
  constructor(props) {
    super(props);

    this.containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
  }

  render() {
    return(
      <div style={this.containerStyle} className='ui container'>
        <div className='ui button'>New Character</div>
        <div className='ui button'>Load Character</div>
        <div className='ui button'>Upload Character</div>
        <div className='ui button'>Suffer Wounds</div>
        <div className='ui button'>Regenerate</div>
      </div>
    )
  }
}

export default SheetControls;
