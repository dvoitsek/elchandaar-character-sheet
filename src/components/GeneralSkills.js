'use strict';

import React from 'react';

import Actions from '../Actions';

class GeneralSkills extends React.Component {
  constructor(props) {
    super(props);

    this.generalSkillsStyle = {
      display: 'flex',
      flexDirection: 'column'
    };

    this.editStyle = {
      display: 'none'
    };

    this.state = {
      edit: false,
    };
  }

  toggleEdit(edit) {
    let style = JSON.parse(JSON.stringify(this.editStyle));
    style.display = edit?'':'none';
    this.editStyle = style;

    this.setState({
      edit: edit
    });
  }

  render() {
    return(
      <div
        style={this.generalSkillsStyle}
        className='ui list'>
        <h5 className='ui centered header'>
          <div className='content'>
            General Skills
            <i className="ui small edit link grey icon"
              onClick={this.toggleEdit.bind(this, !this.state.edit)}/>
            </div>
          </h5>
        <div className='item'>
          Alertness
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'alertness', this.props.data.alertness-1)}
              style={this.editStyle}/>
            {this.props.data.alertness}
            <i className='ui plus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'alertness', this.props.data.alertness+1)}
            style={this.editStyle}/>
          </div>
        </div>
        <div className='item'>
          Animal Riding
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'animalRiding', this.props.data.animalRiding-1)}
              style={this.editStyle}/>
            {this.props.data.animalRiding}
            <i className='ui plus icon'
              style={this.editStyle}
              onClick={Actions.setGeneralSkillRank.bind(null, 'animalRiding', this.props.data.animalRiding+1)}/>
          </div>
        </div>
        <div className='item'>
          Animal Handling
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'animalHandling', this.props.data.animalHandling-1)}
              style={this.editStyle}/>
              {this.props.data.animalHandling}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'animalHandling', this.props.data.animalHandling+1)}/>
            </div>
        </div>
        <div className='item'>
          Athletics
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'athletics', this.props.data.athletics-1)}
              style={this.editStyle}/>
              {this.props.data.athletics}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'athletics', this.props.data.athletics+1)}/>
            </div>
        </div>
        <div className='item'>
          Deceit
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'deceit', this.props.data.deceit-1)}
              style={this.editStyle}/>
              {this.props.data.deceit}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'deceit', this.props.data.deceit+1)}/>
            </div>
        </div>
        <div className='item'>
          Divination
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'divination', this.props.data.divination-1)}
              style={this.editStyle}/>
              {this.props.data.divination}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'divination', this.props.data.divination+1)}/>
            </div>
        </div>
        <div className='item'>
          Etiquette
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'etiquette', this.props.data.etiquette-1)}
              style={this.editStyle}/>
              {this.props.data.etiquette}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'etiquette', this.props.data.etiquette+1)}/>
            </div>
        </div>
        <div className='item'>
          Forgery
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'forgery', this.props.data.forgery-1)}
              style={this.editStyle}/>
              {this.props.data.forgery}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'forgery', this.props.data.forgery+1)}/>
            </div>
        </div>
        <div className='item'>
          Hunting
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'hunting', this.props.data.hunting-1)}
              style={this.editStyle}/>
              {this.props.data.hunting}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'hunting', this.props.data.hunting+1)}/>
            </div>
        </div>
        <div className='item'>
          Instruction
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'instruction', this.props.data.instruction-1)}
              style={this.editStyle}/>
              {this.props.data.instruction}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'instruction', this.props.data.instruction+1)}/>
            </div>
        </div>
        <div className='item'>
          Interaction
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'interaction', this.props.data.interaction-1)}
              style={this.editStyle}/>
              {this.props.data.interaction}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'interaction', this.props.data.interaction+1)}/>
            </div>
        </div>
        <div className='item'>
          Investigate
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'investigate', this.props.data.investigate-1)}
              style={this.editStyle}/>
              {this.props.data.investigate}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'investigate', this.props.data.investigate+1)}/>
            </div>
        </div>
        <div className='item'>
          Medicine
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'medicine', this.props.data.medicine-1)}
              style={this.editStyle}/>
              {this.props.data.medicine}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'medicine', this.props.data.medicine+1)}/>
            </div>
        </div>
        <div className='item'>
          Meditation
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'meditation', this.props.data.meditation-1)}
              style={this.editStyle}/>
              {this.props.data.meditation}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'meditation', this.props.data.meditation+1)}/>
            </div>
        </div>
        <div className='item'>
          Prestidigitation
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'prestidigitation', this.props.data.prestidigitation-1)}
              style={this.editStyle}/>
              {this.props.data.prestidigitation}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'prestidigitation', this.props.data.prestidigitation+1)}/>
            </div>
        </div>
        <div className='item'>
          Stealth
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'stealth', this.props.data.stealth-1)}
              style={this.editStyle}/>
              {this.props.data.stealth}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'stealth', this.props.data.stealth+1)}/>
            </div>
        </div>
        <div className='item'>
          Symbolism
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'symbolism', this.props.data.symbolism-1)}
              style={this.editStyle}/>
              {this.props.data.symbolism}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'symbolism', this.props.data.symbolism+1)}/>
            </div>
        </div>
        <div className='item'>
          Tactics
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'tactics', this.props.data.tactics-1)}
              style={this.editStyle}/>
              {this.props.data.tactics}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'tactics', this.props.data.tactics+1)}/>
            </div>
        </div>
        <div className='item'>
          Universalism
          <div className='right floated content'>
            <i className='ui minus icon'
              onClick={Actions.setGeneralSkillRank.bind(null, 'universalism', this.props.data.universalism-1)}
              style={this.editStyle}/>
              {this.props.data.universalism}
              <i className='ui plus icon'
                style={this.editStyle}
                onClick={Actions.setGeneralSkillRank.bind(null, 'universalism', this.props.data.universalism+1)}/>
            </div>
        </div>
      </div>
    );
  }
}

export default GeneralSkills;
