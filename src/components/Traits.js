'use strict';

import React from 'react';

import Actions from '../Actions';

class Traits extends React.Component {
  constructor(props) {
    super(props);

    this.componentStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    };

    this.editStyle = {
      display: 'none'
    };

    this.state = {
      edit: false
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
        style={this.componentStyle}
        className='ui grid segment'>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Traits
            <i className="ui small edit link grey icon"
              onClick={this.toggleEdit.bind(this, !this.state.edit)}/>
          </h4>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Stamina
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'stamina', this.props.data.stamina-1)}
                  style={this.editStyle}/>
                {this.props.data.stamina}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'stamina', this.props.data.stamina+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Dexterity
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'dexterity', this.props.data.dexterity-1)}
                  style={this.editStyle}/>
                {this.props.data.dexterity}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'dexterity', this.props.data.dexterity+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Perception
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'perception', this.props.data.perception-1)}
                  style={this.editStyle}/>
                {this.props.data.perception}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'perception', this.props.data.perception+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Strength
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'strength', this.props.data.strength-1)}
                  style={this.editStyle}/>
                {this.props.data.strength}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'strength', this.props.data.strength+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Willpower
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'willpower', this.props.data.willpower-1)}
                  style={this.editStyle}/>
                {this.props.data.willpower}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'willpower', this.props.data.willpower+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Appearance
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'appearance', this.props.data.appearance-1)}
                  style={this.editStyle}/>
                {this.props.data.appearance}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'appearance', this.props.data.appearance+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Empathy
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'empathy', this.props.data.empathy-1)}
                  style={this.editStyle}/>
                {this.props.data.empathy}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'empathy', this.props.data.empathy+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui list'>
            <div className='ui item'>
              Wits
              <div className='right floated'>
                <i className='ui minus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'wits', this.props.data.wits-1)}
                  style={this.editStyle}/>
                {this.props.data.wits}
                <i className='ui plus icon'
                  onClick={Actions.setSimpleData.bind(null, 'traits', 'wits', this.props.data.wits+1)}
                style={this.editStyle}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Traits;
