'use strict';

import React from 'react';

class Wounds extends React.Component {
  constructor(props) {
    super(props);

    this.iconCellStyle = {
      padding: '1px',
      margin: 0
    };

    var wounds = [];
    var woundRow = [];
    for(var i = 0; i < 100; ++i) {
      if(i>0 && i%10 === 0) {
        wounds.push(woundRow);
        woundRow = [];
      }
      if(i < props.data.current) {
        woundRow.push(1);
      }
      else {
        woundRow.push(0);
      }
    }
    wounds.push(woundRow);

    this.state = {
      wounds: wounds
    };
  }

  buildBox(wound, index) {
    return <td key={index} style={this.iconCellStyle}>{wound === 1? <i className='ui plus square outline icon'/> : <i className='ui square outline icon'/>}</td>;
  }

  buildRow(wounds, index) {
    let rowIndex = index+1;
    let traits = this.props.charstore.getTraits();
    let penalty = 0;
    if(rowIndex > traits.stamina && rowIndex <= traits.stamina + traits.willpower) {
      penalty = -5*(rowIndex - traits.stamina);
    }
    if(rowIndex > traits.stamina + traits.willpower) {
      penalty = 'Out';
    }
    return(
      <tr key={index}>
        <td className='collapsing'>
          {penalty}
        </td>
        {wounds.map(this.buildBox.bind(this))}
      </tr>
    );
  }

  buildInjury(injury) {
    return(
      <div>
        <i className={'ui ' + (injury > 0? 'plus' : '') + ' square outline icon'}/>
        <i className={'ui ' + (injury > 1? 'plus' : '') + ' square outline icon'}/>
        <i className={'ui ' + (injury > 2? 'plus' : '') + ' square outline icon'}/>
      </div>
    );
  }

  render() {
    return(
      <div className='ui segment container'>
        <div className='ui stackable grid'>
          <div className='sixteen wide column'>
            Health
          </div>
          <div className='eight wide column'>
            <table className='ui compact unstackable table'>
              <thead>
                <tr>
                  <th>Penalty</th>
                  <th colSpan='10'>Wounds</th>
                </tr>
              </thead>
              <tbody>
                {this.state.wounds.map(this.buildRow.bind(this))}
              </tbody>
            </table>
          </div>
          <div className='four wide column'>
            <div>
              <div className='ui header'>Injuries</div>
              <div>
                Head
                {this.buildInjury(this.props.data.parts.head)}
              </div>
              <div>
                Torso
                {this.buildInjury(this.props.data.parts.torso)}
              </div>
              <div>
                Left Arm
                {this.buildInjury(this.props.data.parts.leftArm)}
              </div>
              <div>
                Right Arm
                {this.buildInjury(this.props.data.parts.rightArm)}
              </div>
              <div>
                Left Leg
                {this.buildInjury(this.props.data.parts.leftLeg)}
              </div>
              <div>
                Right Leg
                {this.buildInjury(this.props.data.parts.rightLeg)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wounds;
