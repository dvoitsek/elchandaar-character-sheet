'use strict';

import React from 'react';

class Fate extends React.Component {
  constructor(props) {
    super(props);

    let rank = [];
    for(let i = 0; i < 10; ++i) {
      if(i < props.data.max) {
        rank.push(1);
      }
      else {
        rank.push(0);
      }
    }

    this.state = {
      rank: rank
    };
  }

  buildFateColumn(fate, index) {
    let rank = fate === 1? <i className='ui circle icon' />: <i className='ui circle thin icon' />;
    let box = this.props.data.spent > index?<i className='ui plus square outline icon' />:<i className='ui square outline icon' />;
    if(index >= this.props.data.max) {
      box = null;
    }
    return(
      <div className='column' key={index}>
        <div>{rank}</div>
        <div>{box}</div>
      </div>
    );
  }

  render() {
    return(
      <div className='ui grid segment'>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Fate
          </h4>
        </div>
        {this.state.rank.map(this.buildFateColumn.bind(this))}
      </div>
    );
  }
}

export default Fate;
