'use strict';

import React from 'react';

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.clearState(this.state);
  }

  clearState(state) {
    state.fields = [];
  }

  changeFieldValue(index, event) {
    let fields = JSON.parse(JSON.stringify(this.state.fields));

    fields[index].value = event.target.value;
    this.setState({fields: fields});
  }

  createField(field, index) {
    return(
      <div className='field' key={index}>
        <label>
          {field.name}
        </label>
        <input type={field.type}
          value={field.value}
          onChange={this.changeFieldValue.bind(this, index)} />
      </div>
    )
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.active && !this.state.active) {
      let data = this.props.modalstore.getData();
      let keys = Object.keys(data);
      nextState.fields = [];
      for(let i = 0; i < keys.length; ++i) {
        nextState.fields.push({
          name: keys[i],
          type: "text",
          value: data[keys[i]]
        });
      }
    }
  }

  render() {
    return(
      <div className='ui modal'>
        <div className='content'>
          <form className='ui form'>
          {this.state.fields.map(this.createField.bind(this))}
          </form>
        </div>
        <div className='actions'>
          <div className='ui negative action'>
            Cancel
          </div>
          <div className='ui positive action'>
            Confirm
          </div>
        </div>
      </div>
    )
  }
}

export default EditModal;
