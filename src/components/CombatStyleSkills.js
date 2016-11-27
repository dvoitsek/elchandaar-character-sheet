'use strict';

import React from 'react';

class CombatStyleSkills extends React.Component {
  constructor(props) {
    super(props);

    this.combatStylesStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
  }

  render() {
    return(
      <div
        style={this.combatStylesStyle}
        className='ui list'>
        {this.props.data.map(function(skill, idx) {
          return <div key={idx} className='item'>
            <div>{skill.name}<div className='right floated content'>{skill.rank}</div>
          </div>
          <div className='ui tiny labels'>
            <div className='ui label'>
              <i className="hand paper icon"></i>
              {skill.mainHand}
            </div>
            <div className='ui label'>
              <i className="horizontally flipped hand paper icon"></i>
              {skill.offHand}
            </div>
            <div className='ui label'>
              <i className="user icon"></i>
              {skill.armor}
            </div>
          </div>
        </div>
      })}
      </div>
    );
  }
}

export default CombatStyleSkills;
