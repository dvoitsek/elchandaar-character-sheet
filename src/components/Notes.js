'use strict';

import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className='ui segment'>
        <h4 className='ui centered header'>
          Notes
        </h4>
      {this.props.data.map(function(note, index) {
        return(
          <div className='ui message' key={index}>
            {note}
          </div>
        );
      })}
    </div>
  );
  }
}

export default Notes;
