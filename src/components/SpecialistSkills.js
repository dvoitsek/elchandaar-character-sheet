'use strict';

import React from 'react';

class SpecialistSkills extends React.Component {
  constructor(props) {
    super(props);

    this.specialistSkillsStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
  }

  render(){
    return(
      <div
        style={this.specialistSkillsStyle}
        className='ui list'>
        {this.props.data.map(function(skill, idx) {
          return <div key={idx} className='item'>
            {skill.name}
            <div className='right floated content'>{skill.rank}</div>
          </div>
        })}
      </div>
    );
  }
}

export default SpecialistSkills;
