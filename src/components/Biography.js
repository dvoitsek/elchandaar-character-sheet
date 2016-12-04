'use strict';

import React from 'react';

import Actions from '../Actions';

class Biography extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      formStyle: {
        display: 'none'
      }
    };

    this.state = {
      edit: false,
      input: '',
      index: null
    };
  }

  updateInput(e) {
    this.setState({input: e.target.value});
  }

  toggleInput(edit, input, index) {
    let styles = JSON.parse(JSON.stringify(this.styles));
    styles.formStyle.display = edit?'':'none';
    this.styles = styles;

    this.setState({
      edit: edit,
      input: input,
      index: index
    });
  }

  saveNewBio() {
    window.setTimeout(Actions.setSimpleListData.bind(null, 'biography', this.state.index, this.state.input), 10);
    this.toggleInput(false, '', null);
  }

  render() {
    var self = this;
    return(
    <div className='ui segment'>
        <h4 className='ui centered header'>
          <div className='content'>
          Biography
          <i className="ui small edit link grey icon"
            style={this.styles.readStyle}
            onClick={this.toggleInput.bind(this, !this.state.edit, '', this.props.data.length)}/>
          </div>
        </h4>
      {this.props.data.map(function(bio, index) {
        return(
          <div className='ui message' key={index}>
            {bio}
            <i className="ui edit link grey icon"
              onClick={self.toggleInput.bind(self, true, bio, index)}/>
          </div>
        );
      })}
      <div className='ui message'
        style={this.styles.formStyle}>
        <textarea
          value={this.state.input}
          onChange={this.updateInput.bind(this)}/>
          <i className="ui red minus link icon"
          onClick={this.toggleInput.bind(this, false, '', null)}/>
          <i className="ui check link green icon"
          onClick={this.saveNewBio.bind(this)}/>
      </div>
    </div>
  );
  }
}

export default Biography;
