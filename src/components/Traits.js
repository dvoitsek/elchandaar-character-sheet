'use strict';

import React from 'react';

class Traits extends React.Component {
  constructor(props) {
    super(props);

    this.componentStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    };
  }

  render() {
    return(
      <div
        style={this.componentStyle}
        className='ui grid segment'>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Traits
          </h4>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Stamina
              <div className='right floated'>
                {this.props.data.stamina}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Dexterity
              <div className='right floated'>
                {this.props.data.dexterity}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Perception
              <div className='right floated'>
                {this.props.data.perception}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Strength
              <div className='right floated'> {this.props.data.strength}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Willpower
              <div className='right floated'>
                {this.props.data.willpower}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Appearance
              <div className='right floated'>
                {this.props.data.appearance}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Empathy
              <div className='right floated'>
                {this.props.data.empathy}
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Wits
              <div className='right floated'>
                {this.props.data.wits}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Traits;
