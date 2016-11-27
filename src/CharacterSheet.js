'use strict';

import React from 'react';

import CharacterBasics from './components/CharacterBasics';
import Traits from './components/Traits';
import Skills from './components/Skills';

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);

    this.containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    };

    this.state = {
      character: this.props.charstore.getCharacter()
    };
  }

  generateWoundBoxes() {
    var wounds = '';
    for(var i = 0; i < this.state.character.wounds.current; ++i) {
      wounds += 'x';
    }

    return (
      <div>
        {wounds}
      </div>);
    }

    componentDidMount() {
    }

    render() {
      return (
        <div className='ui container' style={this.containerStyle}>
          <CharacterBasics data={this.state.character.basics} />
          <Traits data={this.state.character.traits} />
          <Skills data={this.state.character.skills} />
          <div style={this.credosStyle}>
            {this.state.character.credos.map(function(credo, idx) {
              return <div key={idx}>
                <div>{credo.name}</div>
                <div>{credo.rank}</div>
                <div>{credo.points}</div>
              </div>
            })}</div>
            <div style={this.fateStyle}>
              {this.state.character.fate.spent} / {this.state.character.fate.max}
            </div>
            <div style={this.backgroundsStyle}>
              {this.state.character.backgrounds.map(function(bak, idx) {
                return <div key={idx}>
                  <div>{bak.name}</div>
                  <div>{bak.description}</div>
                </div>
              })}
            </div>
            <div style={this.healthStyle}>
              <div>Health</div>
              <div>Wounds</div>
              {this.generateWoundBoxes()}
              <div>Injuries</div>
            </div>
            <div style={this.defenseStyle}></div>
            <div style={this.protectionStyle}></div>
            <div style={this.offenseStyle}></div>
            <div style={this.idealStyle}></div>
            <div style={this.notesStyle}></div>
          </div>
        )
      }
    }

    export default CharacterSheet;
