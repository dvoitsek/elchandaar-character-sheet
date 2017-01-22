'use strict';

import React from 'react';

import Actions from './Actions';

class SheetControls extends React.Component {
  constructor(props) {
    super(props);

    this.containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    };

    this.newCharStyle = {
      display: 'none'
    };

    this._listChanged = () => {
      const update = () => this.setState({characters: this.props.charstore.getList()});
      return update.apply(this);
    };

    this.state = {
      characters: this.props.charstore.getList(),
      newCharName: ''
    };
  }

  selectCharacter(name) {
    window.setTimeout(Actions.selectCharacter.bind(null, name), 10);
  }

  displayNewChar() {
    this.newCharStyle = JSON.parse(JSON.stringify(this.newCharStyle));
    this.newCharStyle.display = '';
    this.setState({});
  }

  createNewChar() {
    if(!this.state.newCharName) {
      alert("You must enter a name for your character");
      return;
    }
    window.setTimeout(Actions.createCharacter.bind(null, this.state.newCharName), 10);

    this.newCharStyle = JSON.parse(JSON.stringify(this.newCharStyle));
    this.newCharStyle.display = 'none';
    this.setState({newCharName: ''});
  }

  updateName(e) {
    this.setState({newCharName: e.target.value});
  }

  componentDidMount() {
    this.props.charstore.addListChangeListener(this._listChanged);
  }

  componentWillUnmount() {
    this.props.charstore.removeListChangeListener(this._listChanged);
  }

  render() {
    let self = this;
    return(
      <div style={this.containerStyle} className='ui container'>
        <div className='ui button' onClick={this.displayNewChar.bind(this)}>New Character</div>
        <div className='ui segment' style={this.newCharStyle}>
          <div className="ui input">
            <input type="text" placeholder="New character name..." value={this.state.newCharName} onChange={this.updateName.bind(this)}/>
            </div>
            <div className='ui button' onClick={this.createNewChar.bind(this)}>Create character</div>
        </div>
        <div className='ui segment'>
          <h5 className='ui centered header'>
            <div className='content'>
              Existing Characters
              </div>
            </h5>
          {
          this.state.characters.map(function(c, idx) {
            let color = '';
            if(self.props.charstore.getFile() === c) {
              color = 'blue disabled';
            }
            return <div key={idx} className={'ui segment ' + color} onClick={self.selectCharacter.bind(self, c)}>
              {c}
            </div>
          })
        }</div>
      </div>
    )
  }
}

export default SheetControls;
