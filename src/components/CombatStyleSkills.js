  'use strict';

  import React from 'react';

  import Actions from '../Actions';

  class CombatStyleSkills extends React.Component {
    constructor(props) {
      super(props);

      this.styles = {
        editStyle : {
          display: 'none'
        },
        combatStylesStyle: {
          display: 'flex',
          flexDirection: 'column'
        }
      }

      this.state = {
        edit: false,
        name: '',
        main: '',
        off: '',
        armor: '',
        rank: 0
      }
    }

    toggleEdit(edit, name, main, off, armor, rank) {
      let styles = JSON.parse(JSON.stringify(this.styles));
      styles.editStyle.display = edit?'':'none';
      this.styles = styles;

      this.setState({
        edit: edit,
        name: name,
        main: main,
        off: off,
        armor: armor,
        rank: rank
      });
    }

    updateInput(key, event) {
      let state = JSON.parse(JSON.stringify(this.state));
      state[key] = event.target.value;
      this.setState(state);
    }

    saveNewCombatStyle() {
      window.setTimeout(Actions.addCombatSkill.bind(null, this.state.name, this.state.main, this.state.off, this.state.armor, this.state.rank), 10);

      this.toggleEdit(false, '', '', '', '', 0);
    }

    render() {
      var self = this;
      return(
        <div
          style={this.styles.combatStylesStyle}
          className='ui list'>
          <h5 className='ui centered header'>
            <div className='content'>
              Combat Styles
              <i className="ui small edit link grey icon"
                style={this.styles.readStyle}
                onClick={this.toggleEdit.bind(this, !this.state.edit, '', '', '', '', 0)}/>
              </div>
            </h5>
            {this.props.data.map(function(skill, idx) {
              return <div key={idx} className='item'>
                <div>
                  {skill.name}
                  <div className='right floated content'>
                    <i className='ui minus icon'
                      onClick={Actions.setCombatSkillRank.bind(null, idx, skill.rank-1)}
                      style={self.styles.editStyle}/>
                      {skill.rank}
                      <i className='ui plus icon'
                        onClick={Actions.setCombatSkillRank.bind(null, idx, skill.rank+1)} style={self.styles.editStyle}/>
                      </div>
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
                <div className='ui item' style={this.styles.editStyle}>
                  <div className='ui field'>
                    <label>Name</label>
                    <input type='text'
                      value={this.state.name}
                      onChange={this.updateInput.bind(this, 'name')}></input>
                    </div>
                    <div className='ui field'>
                      <label>Main Hand</label>
                      <input type='text'
                        value={this.state.main}
                        onChange={this.updateInput.bind(this, 'main')}/>
                      </div>
                      <div className='ui field'>
                        <label>Off Hand</label>
                        <input type='text'
                          value={this.state.off}
                          onChange={this.updateInput.bind(this, 'off')} />
                        </div>
                        <div className='ui field'>
                          <label>Armor</label>
                          <input type='text'
                            value={this.state.armor}
                            onChange={this.updateInput.bind(this, 'armor')}/>
                          </div>
                          <div className='ui field'>
                            <label>Rank</label>
                            <input type='number'
                              value={this.state.rank}
                              onChange={this.updateInput.bind(this, 'rank')}/>
                            </div>
                            <i className="ui red minus link icon"
                              onClick={this.toggleEdit.bind(this, false, '', '', '', '', 0)}/>
                              <i className="ui check link green icon"
                                onClick={this.saveNewCombatStyle.bind(this)}/>
                              </div>
                            </div>
                          );
                        }
                      }

                      export default CombatStyleSkills;
