    'use strict';

    import React from 'react';

    import Actions from '../Actions';

    class SpecialistSkills extends React.Component {
      constructor(props) {
        super(props);

        this.specialistSkillsStyle = {
          display: 'flex',
          flexDirection: 'column'
        };

        this.editStyle = {
          display: 'none'
        };

        this.state = {
          edit: false,
          newSkillName: ''
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

      updateInput(e) {
        this.setState({newSkillName: e.target.value});
      }

      addSkill() {
        if(this.state.newSkillName === '') {
          alert('Name is mandatory');
          return;
        }

        window.setTimeout(Actions.addSpecialistSkill.bind(null, this.state.newSkillName), 10);
      }

      render(){
        let self = this;
        return(
          <div
            style={this.specialistSkillsStyle}
            className='ui list'>
            <h5 className='ui centered header'>
              <div className='content'>
                Specialist Skills
                <i className="ui small edit link grey icon"
                  onClick={this.toggleEdit.bind(this, !this.state.edit)}/>
                </div>
              </h5>
            {this.props.data.map(function(skill, idx) {
              return <div key={idx} className='item'>
                {skill.name}
                <div className='right floated content'>
                  <i className='ui minus icon'
                    onClick={Actions.setSpecialistSkillRank.bind(null, idx, skill.rank-1)}
                    style={self.editStyle}/>
                  {skill.rank}
                  <i className='ui plus icon'
                    onClick={Actions.setSpecialistSkillRank.bind(null, idx, skill.rank+1)}
                  style={self.editStyle}/>
                </div>
              </div>
            })}
            <div className='ui item' style={this.editStyle}>
              <div className='ui field'>
                <label>Name</label>
                <input type='text'
                  value={this.state.newSkillName}
                  onChange={this.updateInput.bind(this)}></input>
                </div>
                <i className="ui red minus link icon"
                  onClick={this.toggleEdit.bind(this, false)}/>
                <i className="ui check link green icon"
                  onClick={this.addSkill.bind(this)}/>
                          </div>
          </div>
        );
      }
    }

    export default SpecialistSkills;
