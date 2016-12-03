'use strict';

import React from 'react';

class Ideal extends React.Component {
  constructor(props) {
    super(props);

    this.rankTitles = ["Exemplar", "Core", "Apotheosis"];
  }

  buildSkillColumn(skill, index) {
    return(
      <div className='five wide column' key={index}>
        {skill.selected?<i className='ui star icon' /> : null}
        {skill.name}
      </div>
    )
  }

  buildAbility(ability, index) {
    return(
      <div className='sixteen wide column' key={index}>
        <div className={'ui segment ' + (this.props.data.rank < index+1? 'disabled' : '')}>
        {this.rankTitles[index]}: {ability}
      </div>
      </div>
    )
  }

  render() {
    return(
      <div className='ui grid segment'>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Ideal: {this.props.data.name}
          </h4>
        </div>
        {this.props.data.skills.map(this.buildSkillColumn.bind(this))}
        {this.props.data.abilities.map(this.buildAbility.bind(this))}
      </div>
    );
  }
}

export default Ideal;
