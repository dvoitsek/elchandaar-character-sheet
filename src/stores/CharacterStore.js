'use strict';

import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';

import CharacterEvents from '../events/CharacterEvents';

import Constants from '../constants/Constants';

class CharacterStore extends EventEmitter {
  constructor() {
    super();

    this.character = {
      basics: {
        name: 'Nameless Protagonist',
        player: 'Someone',
        origins: 'West Carlenia, Noble',
        birthYear: '600',
        trade: 'Beggar',
        hair: 'short black with wisps of gold',
        eyes: 'mostly green',
        firstImpression: 'bored',
        lastingImpression: 'bland',
        hiddenSide: 'manipulative'
      },
      traits: {
        stamina: 3,
        dexterity: 2,
        perception: 1,
        strength: 2,
        willpower: 6,
        appearance: 3,
        empathy: 1,
        wits: 3
      },
      skills: {
        general: {
          alertness: 0,
          animalRiding: 1,
          animalHandling: 2,
          athletics: 3,
          deceit: 4,
          divination: 5,
          etiquette: 6,
          forgery: 7,
          hunting: 8,
          instruction: 9,
          interaction: 10,
          investigate: 11,
          medicine: 12,
          meditation: 13,
          prestidigitation: 14,
          stealth: 15,
          symbolism: 16,
          tactics: 17,
          universalism: 18
        },
        specialist: [{name: 'Geography', rank: 1}, {name: 'History', rank: 2}, {name: 'Streetwise', rank: 0}],
        combat: [{name: 'Mystery Edge', mainHand: 'Broken Bottle', offHand: 'Empty', armor: 'Light', rank: '0'}]
      },
      backgrounds: [
        {name: 'Nonexistence', description: "You do not exist, therefore you cannot be killed"}
      ],
      credos: [
        { name: 'The plot is always right',
          rank: 3,
          points: 8
        }
      ],
      fate: {
        max: 9,
        spent: 4
      },
      wounds: {
        maxNoPenalty: 3,
        maxPenalty: 2,
        current: 14,
        parts: {
          head: 1,
          torso: 0,
          leftArm: 2,
          rightArm: 3,
          leftLeg: 0,
          rightLeg: 1
        }
      },
      offense: [],
      defense: [],
      ideals: [
        {name: 'Does not exist yet', skills: {alertness: 0, combat: 1, geography: 0}, rank: 3, abilities: []},
      ],
      notes: [
        "Well, these are various notes about the biography, etc"
      ]
    };

    AppDispatcher.register((action) => {
      switch(action.type) {
        case Constants.Actions.CHANGE:
        this.character = action.character;
        this.emit(CharacterEvents.UPDATE);
        break;
      }
    });
  }

  getCharacter() {
    return JSON.parse(JSON.stringify(this.character));
  }

  addCharacterChangeListener(callback) {
    this.on(CharacterEvents.UPDATE, callback);
  }

  removeCharacterChangeListener(callback) {
    this.removeListener(CharacterEvents.UPDATE, callback);
  }
}

export default CharacterStore;
