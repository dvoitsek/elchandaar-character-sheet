'use strict';

import React from 'react';

class GeneralSkills extends React.Component {
  constructor(props) {
    super(props);

    this.generalSkillsStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
  }

  render() {
    return(
      <div
        style={this.generalSkillsStyle}
        className='ui list'>
        <div className='item'>
          Alertness <div className='right floated content'>{this.props.data.alertness}</div>
        </div>
        <div className='item'>
          Animal Riding <div className='right floated content'>{this.props.data.animalRiding}</div>
        </div>
        <div className='item'>
          Animal Handling <div className='right floated content'>{this.props.data.animalHandling}</div>
        </div>
        <div className='item'>
          Athletics <div className='right floated content'>{this.props.data.athletics}</div>
        </div>
        <div className='item'>
          Deceit <div className='right floated content'>{this.props.data.deceit}</div>
        </div>
        <div className='item'>
          Divination <div className='right floated content'>{this.props.data.divination}</div>
        </div>
        <div className='item'>
          Etiquette <div className='right floated content'>{this.props.data.etiquette}</div>
        </div>
        <div className='item'>
          Forgery <div className='right floated content'>{this.props.data.forgery}</div>
        </div>
        <div className='item'>
          Hunting <div className='right floated content'>{this.props.data.hunting}</div>
        </div>
        <div className='item'>
          Instruction <div className='right floated content'>{this.props.data.instruction}</div>
        </div>
        <div className='item'>
          Interaction <div className='right floated content'>{this.props.data.interaction}</div>
        </div>
        <div className='item'>
          Investigate <div className='right floated content'>{this.props.data.investigate}</div>
        </div>
        <div className='item'>
          Medicine <div className='right floated content'>{this.props.data.medicine}</div>
        </div>
        <div className='item'>
          Meditation <div className='right floated content'>{this.props.data.meditation}</div>
        </div>
        <div className='item'>
          Prestidigitation <div className='right floated content'>{this.props.data.prestidigitation}</div>
        </div>
        <div className='item'>
          Stealth <div className='right floated content'>{this.props.data.stealth}</div>
        </div>
        <div className='item'>
          Symbolism <div className='right floated content'>{this.props.data.symbolism}</div>
        </div>
        <div className='item'>
          Tactics <div className='right floated content'>{this.props.data.tactics}</div>
        </div>
        <div className='item'>
          Universalism <div className='right floated content'>{this.props.data.universalism}</div>
        </div>
      </div>
    );
  }
}

export default GeneralSkills;
