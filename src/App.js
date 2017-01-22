'use strict';

import React from 'react';

import CharacterStore from './stores/CharacterStore';

import SheetControls from './SheetControls';
import CharacterSheet from './CharacterSheet';

const charstore = new CharacterStore();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.mainWindowStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    this.leftBarStyle = {
      width: '200px'
    };

    this.centerStyle = {
    };
  }

  render() {
    return(
      <div style={this.mainWindowStyle}>
        <div style={this.leftBarStyle}>
        <SheetControls charstore={charstore}/>
      </div>
      <div style={this.centerStyle}>
        <CharacterSheet charstore={charstore}/>
      </div>
      </div>
    )
  }
}

export default App;
