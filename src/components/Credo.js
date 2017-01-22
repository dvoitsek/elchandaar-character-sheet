'use strict';

import React from 'react';

import Actions from '../Actions';

class Credo extends React.Component {
  constructor(props) {
    super(props);

    this.editStyle = {
      display: 'none'
    };

    let draw = this.recalculateDrawn(props);

    this.state = {
      edit: false,
      editedName: this.props.data.name,
      rank: draw[0],
      points: draw[1]
    };
  }

  recalculateDrawn(props) {
    let rank = [];
    for(let i = 0; i < 5; ++i) {
      if(i < props.data.rank) {
        rank.push(1);
      }
      else {
        rank.push(0);
      }
    }

    let points = [];
    for(let i = 0; i < 10; ++i) {
      if(i < props.data.points) {
        points.push(0);
      }
      else {
        points.push(1);
      }
    }

    return [rank, points];
  }

  buildRank(rank, index) {
    return rank===1?
    <i className='ui circle icon' onClick={Actions.setCredo.bind(null, this.props.index, null, this.props.data.rank-1, null)} key={index}/>:
    <i className='ui circle outline icon' onClick={Actions.setCredo.bind(null, this.props.index, null, this.props.data.rank+1, null)} key={index} />;
  }

  buildPoints(point, index) {
    return point===1?
    <i className='ui square outline icon' onClick={Actions.setCredo.bind(null, this.props.index, null, null, this.props.data.points+1)} key={index} />:
    <i className='ui plus square outline icon' onClick={Actions.setCredo.bind(null, this.props.index, null, null, this.props.data.points-1)} key={index} />;
  }

  updateInput(e) {
    this.setState({editedName: e.target.value});
  }

  toggleEdit(edit) {
    let style = JSON.parse(JSON.stringify(this.editStyle));
    style.display = edit?'':'none';
    this.editStyle = style;

    this.setState({
      edit: edit
    });
  }

  componentWillReceiveProps(props) {
    let draw = this.recalculateDrawn(props);

    this.state = {
      rank: draw[0],
      points: draw[1]
    };
  }

  render() {
    return(
      <div className='row'>
        <div className='column'>
          {this.props.data.name}
          <i className="ui small edit link grey icon"
            onClick={this.toggleEdit.bind(this, !this.state.edit)}/>
            <div className='ui field'
              style={this.editStyle}>
              <label>Name</label>
              <input type='text'
                value={this.state.editedName}
                onChange={this.updateInput.bind(this)}></input>
              </div>
              <i className="ui red minus link icon"
                style={this.editStyle}
                onClick={this.toggleEdit.bind(this, false)}/>
              <i className="ui check link green icon"
                style={this.editStyle}
                onClick={Actions.setCredo.bind(null, this.props.index, this.state.editedName, null, null)}/>
          </div>
        <div className='column'>
          {this.state.rank.map(this.buildRank.bind(this))}
        </div>
        <div className='column'>
          {this.state.points.map(this.buildPoints.bind(this))}
        </div>
      </div>
    )
  }
}

export default Credo;
