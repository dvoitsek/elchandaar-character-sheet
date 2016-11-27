'use strict';

import React from 'react';

class CharacterBasics extends React.Component {
  constructor(props) {
    super(props);

    this.componentStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    };
  }

  render() {
    return(
      <div
        style={this.componentStyle}
        className='ui grid segment'>
        <div>{this.props.data.name}</div>
        <div>{this.props.data.player}</div>
        <div>{this.props.data.origins}</div>
        <div>{this.props.data.birthYear}</div>
        <div>{this.props.data.trade}</div>
        <div>{this.props.data.hair}</div>
        <div>{this.props.data.eyes}</div>
        <div>{this.props.data.firstImpression}</div>
        <div>{this.props.data.lastingImpression}</div>
        <div>{this.props.data.hiddenSide}</div>
      </div>
    );
  }
}

export default CharacterBasics;
