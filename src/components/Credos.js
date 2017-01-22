'use strict';

import React from 'react';

import Credo from './Credo';

import Actions from '../Actions';

class Credos extends React.Component {
  constructor(props) {
    super(props);

    this.credosStyle = {
      display: 'flex',
      flexDirection: 'column'
    };

    this.editStyle = {
      display: 'none'
    };

    this.state = {
      edit: false,
      newCredoName: ''
    };

  }

  toggleEdit(edit) {
    let style = JSON.parse(JSON.stringify(this.editStyle));
    style.display = edit?'':'none';
    this.editStyle = style;

    this.setState({edit: edit});
  }

  updateInput(e) {
    this.setState({newCredoName: e.target.value});
  }

  addCredo() {
    if(this.props.data.length >=4) {
      alert('You cannot have more than 4 credos');
      return;
    }
    if(this.state.newCredoName === '') {
      alert('Name is mandatory');
      return;
    }

    window.setTimeout(Actions.setCredo.bind(null, 5, this.state.newCredoName, 0, 0), 10);
  }

  render(){
    return(
      <div className='ui segment container' style={this.credosStyle}>
        <h4 className='ui centered header'>
          <div className='content'>
            Credos
            <i className="ui small plus link grey icon"
              onClick={this.toggleEdit.bind(this, !this.state.edit)}/>
              </div>
            </h4>
        <div className='ui three column grid'>
        {this.props.data.map(function(credo, idx) {
          return (
            <Credo data={credo} index={idx} key={idx} />
          )
        })}
      </div>
      <div className='ui item' style={this.editStyle}>
        <div className='ui field'>
          <label>Name</label>
          <input type='text'
            value={this.state.newCredoName}
            onChange={this.updateInput.bind(this)}></input>
          </div>
          <i className="ui red minus link icon"
            onClick={this.toggleEdit.bind(this, false)}/>
          <i className="ui check link green icon"
            onClick={this.addCredo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Credos;
