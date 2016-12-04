'use strict';

import React from 'react';

import Actions from '../Actions';

class Backgrounds extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      addBakStyle: {
        display: 'none'
      }
    };

    this.state = {
      edit: false,
      inputName: '',
      inputDescription: '',
      index: props.data.length
    };
  }

  updateField(key, event) {
    let state = JSON.parse(JSON.stringify(this.state));
    state[key] = event.target.value;
    this.setState(state);
  }

  saveNewBak() {
    window.setTimeout(Actions.addBackground.bind(null, this.state.inputName, this.state.inputDescription, this.state.index), 10);

    this.toggleEdit(false, null, '', '');
  }

  addBak(display) {
    let styles = JSON.parse(JSON.stringify(this.styles));
    styles.addBakStyle.display = display?'': 'none';
    this.styles = styles;
    this.setState({
      edit: display,
      index: this.props.data.length,
      inputName: '',
      inputDescription: ''
    });
  }

  toggleEdit(display, index, name, description) {
    let styles = JSON.parse(JSON.stringify(this.styles));
    styles.addBakStyle.display = display?'': 'none';
    this.styles = styles;

    this.setState({edit: display, inputName: name, inputDescription: description, index: index});
  }

  render() {
    var self = this;
    return(
      <div className='ui container segment'>
        <h4 className='ui centered header'>
          <div className='content'>
            Backgrounds
            <i className="ui small plus link grey icon"
              style={this.styles.readStyle}
              onClick={this.addBak.bind(this, !this.state.edit)} />
              </div>
            </h4>
        {this.props.data.map(function(bak, idx) {
          return <div key={idx} className='ui segment'>
            <h5 className='ui header'>
              {bak.name}
              <i className="ui tiny edit link grey icon"
                onClick={self.toggleEdit.bind(self, true, idx, bak.name, bak.description)}/>
            </h5>
            <div className='ui text'>{bak.description}</div>

          </div>
        })}
        <div style={this.styles.addBakStyle} className='ui segment'>
          <div>
            <input type="text"
              value={this.state.inputName}
              placeholder='Title' onChange={this.updateField.bind(this, 'inputName')}/>
          </div>
          <div>
            <textarea type="text"
              value={this.state.inputDescription}
              placeholder='Type description, effects, etc, here'
              onChange={this.updateField.bind(this, 'inputDescription')}/>
          </div>
          <div>
            <i className="ui small red minus link icon"
            onClick={this.toggleEdit.bind(this, false, null, '', '')}/>
            <i className="ui small check link green icon"
            onClick={this.saveNewBak.bind(this)}/>

          </div>
        </div>
      </div>
    );
  }
}

export default Backgrounds;
