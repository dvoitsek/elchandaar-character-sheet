'use strict';

import React from 'react';

class Wounds extends React.Component {
  constructor(props) {
    super(props);

    var wounds = [];
    for(var i = 0; i < 100; ++i) {
      if(i < props.data.current) {
        wounds.push(1);
      }
      else {
        wounds.push(0);
      }
    }

    this.state = {
      wounds: wounds
    };
  }

  buildBox(wound) {
    return wound === 1? <i className='ui square icon'/> : <i className='ui circle icon'/>;
  }

  render() {
    return(
      <div className='ui segment container'>
        <div>
          <div className='ui header'>
            Wounds
          </div>
          {this.state.wounds.map(this.buildBox(wound))}
        </div>
        <div>
          <div className='ui header'>Injuries</div>
          <div>Head</div>
          <div>Torso</div>
          <div>Left Arm</div>
          <div>Right Arm</div>
          <div>Left Leg</div>
          <div>Right Leg</div>
        </div>
      </div>
    );
  }
}

export default Wounds;
