'use strict';

import React from 'react';

class Credo extends React.Component {
  constructor(props) {
    super(props);

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
      if(i < props.data.spent) {
        points.push(1);
      }
      else {
        points.push(0);
      }
    }

    this.state = {
      rank: rank,
      points: points
    };
  }

  buildRank(rank, index) {
    return rank===1?<i className='ui circle icon' key={index}/>:<i className='ui circle outline icon' key={index} />;
  }

  buildPoints(point, index) {
    return point===1?<i className='ui square outline icon' key={index} />:<i className='ui plus square outline icon' key={index} />
  }

  render() {
    return(
      <div className='row'>
        <div className='column'>{this.props.data.name}</div>
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
