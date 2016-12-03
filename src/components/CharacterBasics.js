'use strict';

import React from 'react';

import Actions from '../Actions';

class CharacterBasics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        className='ui stackable grid segment '>
        <div className='sixteen wide column'>
          <h4 className='ui centered header'>
            Character Basics
            <i className="ui tiny edit link grey icon"
              onClick={Actions.showModal.bind(null, 'basics', this.props.data)}/>
          </h4>
        </div>

        <div className='five wide column'>
          <div className='ui center aligned segment'>
          Name: {this.props.data.name}
        </div>
        </div>
        <div className='five wide column'>
          <div className='ui center aligned segment'>
          Player: {this.props.data.player}
          </div>
        </div>
        <div className='five wide column'>
          <div className='ui center aligned segment'>
          Origins: {this.props.data.origins}
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui center aligned segment'>
          Birth Year: {this.props.data.birthYear}
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui center aligned segment'>
          Trade: {this.props.data.trade}
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui center aligned segment'>
          Hair: {this.props.data.hair}
          </div>
        </div>
        <div className='four wide column'>
          <div className='ui center aligned segment'>
          Eyes: {this.props.data.eyes}
          </div>
        </div>
        <div className='five wide column'>
          <div className='ui center aligned segment'>
          First Impression: {this.props.data.firstImpression}
          </div>
        </div>
        <div className='five wide column'>
          <div className='ui center aligned segment'>
          Lasting Impression: {this.props.data.lastingImpression}
          </div>
        </div>
        <div className='five wide column'>
          <div className='ui center aligned segment'>
          Hidden side: {this.props.data.hiddenSide}
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterBasics;
