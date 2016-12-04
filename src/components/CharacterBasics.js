'use strict';

import React from 'react';

import Actions from '../Actions';

class CharacterBasics extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {};

    this.styles.readStyle = {
      display: ''
    };

    this.styles.editStyle = {
      display: 'none'
    };

    this.state = {
      data: JSON.parse(JSON.stringify(props.data)),
      edit: false
    };
  }

  toggleEdit(isEdit) {
    var styles = JSON.parse(JSON.stringify(this.styles));
    styles.readStyle.display = isEdit ? 'none' : '';
    styles.editStyle.display = isEdit? '' : 'none';
    this.styles = styles;
    this.setState({edit: isEdit});

    if(!isEdit) {
      window.setTimeout(Actions.updateBasics.bind(null, JSON.parse(JSON.stringify(this.state.data))), 10);
    }
  }

  updateField(key, event) {
    let data = JSON.parse(JSON.stringify(this.state.data));
    data[key] = event.target.value;
    this.setState({data: data});
  }

  render() {
    return(
      <div
        className='ui stackable grid segment '>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            <div className='content'>
              Character Basics
              <i className="ui small edit link grey icon"
                style={this.styles.readStyle}
                onClick={this.toggleEdit.bind(this, true)}/>
                <i className="ui small check link green icon"
                  style={this.styles.editStyle}
                  onClick={this.toggleEdit.bind(this, false)}/>
                </div>
              </h4>
            </div>

            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Name: {this.props.data.name}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Name</label>
                  <input type="text" value={this.state.data.name} onChange={this.updateField.bind(this, 'name')}/>
                </div>
              </div>
            </div>
            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Player: {this.props.data.player}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Player</label>
                  <input type="text" value={this.state.data.player} onChange={this.updateField.bind(this, 'player')}/>
                </div>
              </div>
            </div>
            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Origins: {this.props.data.origins}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Origins</label>
                  <input type="text" value={this.state.data.origins} onChange={this.updateField.bind(this, 'origins')}/>
                </div>
              </div>
            </div>
            <div className='four wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Birth Year: {this.props.data.birthYear}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Birth Year</label>
                  <input type="text" value={this.state.data.birthYear} onChange={this.updateField.bind(this, 'birthYear')}/>
                </div>
              </div>
            </div>
            <div className='four wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Trade: {this.props.data.trade}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Trade</label>
                  <input type="text" value={this.state.data.trade} onChange={this.updateField.bind(this, 'trade')}/>
                </div>
              </div>
            </div>
            <div className='four wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Hair: {this.props.data.hair}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Hair</label>
                  <input type="text" value={this.state.data.hair} onChange={this.updateField.bind(this, 'hair')}/>
                </div>
              </div>
            </div>
            <div className='four wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Eyes: {this.props.data.eyes}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Eyes</label>
                  <input type="text" value={this.state.data.eyes} onChange={this.updateField.bind(this, 'eyes')}/>
                </div>
              </div>
            </div>
            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  First Impression: {this.props.data.firstImpression}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>First Impression</label>
                  <input type="text" value={this.state.data.firstImpression} onChange={this.updateField.bind(this, 'firstImpression')}/>
                </div>
              </div>
            </div>
            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Lasting Impression: {this.props.data.lastingImpression}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Lasting Impression</label>
                  <input type="text" value={this.state.data.lastingImpression} onChange={this.updateField.bind(this, 'lastingImpression')}/>
                </div>
              </div>
            </div>
            <div className='five wide column'>
              <div className='ui center aligned segment'>
                <div className='ui text' style={this.styles.readStyle}>
                  Hidden side: {this.props.data.hiddenSide}
                </div>
                <div className="field" style={this.styles.editStyle}>
                  <label>Hidden Side</label>
                  <input type="text" value={this.state.data.hiddenSide} onChange={this.updateField.bind(this, 'hiddenSide')}/>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    export default CharacterBasics;
