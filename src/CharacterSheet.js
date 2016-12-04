'use strict';

import React from 'react';

import CharacterBasics from './components/CharacterBasics';
import Traits from './components/Traits';
import Skills from './components/Skills';
import Credos from './components/Credos';
import Backgrounds from './components/Backgrounds';
import Wounds from './components/Wounds';
import Fate from './components/Fate';
import Offense from './components/Offense';
import Protection from './components/Protection';
import Ideal from './components/Ideal';
import Notes from './components/Notes';
import Biography from './components/Biography';

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

    updateCharacter() {
      this.setState({character: this.props.charstore.getCharacter()});
    }

    componentDidMount() {
      this.props.charstore.addCharacterChangeListener(this.updateCharacter.bind(this));
    }

    componentWillUnmount() {
      this.props.charstore.removeCharacterChangeListener(this.updateCharacter.bind(this));
    }

    render() {
      return (
        <div className='ui container' style={this.containerStyle}>
          <CharacterBasics data={this.state.character.basics} />
          <Traits data={this.state.character.traits} />
          <Skills data={this.state.character.skills} />
          <Fate data={this.state.character.fate} />
          <Credos data={this.state.character.credos} />
          <Backgrounds data={this.state.character.backgrounds} />
          <Wounds
            charstore={this.props.charstore} data={this.state.character.wounds} />
          <Offense data={this.state.character.offense} />
          <Protection data={this.state.character.protection} />
          {this.state.character.ideals.map(function(ideal, index) {
            return <Ideal data={ideal} key={index}/>;
          })}

            <Notes data={this.state.character.notes} />
            <Biography data={this.state.character.biography} />
          </div>
        )
      }
    }

    export default CharacterSheet;
