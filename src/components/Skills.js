'use strict';

import React from 'react';

import GeneralSkills from './GeneralSkills';
import SpecialistSkills from './SpecialistSkills';
import CombatStyleSkills from './CombatStyleSkills';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.skillsStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    };
  }

  render() {
    return(
      <div style={this.skillsStyle} className='ui stackable grid segment'>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Skills
          </h4>
        </div>
        <div className='five wide column'>
          <GeneralSkills data={this.props.data.general} />
        </div>
        <div className='five wide column'>
          <SpecialistSkills data={this.props.data.specialist} />
        </div>
        <div className='five wide column'>
          <CombatStyleSkills data={this.props.data.combat} />
        </div>
      </div>
    );
  }
}

export default Skills;
