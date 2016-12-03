'use strict';

import React from 'react';

import CharacterBasics from './components/CharacterBasics';
import Traits from './components/Traits';
import Skills from './components/Skills';
import Credos from './components/Credos';
import Backgrounds from './components/Backgrounds';

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
          <Credos data={this.state.character.credos} />
            <div style={this.fateStyle}>
              {this.state.character.fate.spent} / {this.state.character.fate.max}
            </div>
          <Backgrounds data={this.state.character.backgrounds} />
          <Wounds data={this.state.character.wounds} />
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
