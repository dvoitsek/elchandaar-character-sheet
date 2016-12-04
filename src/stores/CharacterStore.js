'use strict';

import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';

import CharacterEvents from '../events/CharacterEvents';

import Constants from '../constants/Constants';

import sampleCharacter from '../data/SampleCharacter';
import newCharacter from '../data/NewCharacter';

class CharacterStore extends EventEmitter {
  constructor() {
    super();

    this.character = JSON.parse(JSON.stringify(sampleCharacter));

    AppDispatcher.register((action) => {
      switch(action.type) {
        case Constants.Actions.CHANGE:
        this.character = action.character;
        this.emit(CharacterEvents.UPDATE);
        break;
        case Constants.Actions.UPDATE_BASICS:
        this.character.basics = action.data;
        this.emit(CharacterEvents.UPDATE);
        break;
        case Constants.Actions.ADD_BACKGROUND:
        this.setBackgroundData(action.index, action.name, action.description);
        this.emit(CharacterEvents.UPDATE);
        break;
        case Constants.Actions.SET_SIMPLE_DATA:
        this.setSimpleListData(action.list, action.index, action.data);
        this.emit(CharacterEvents.UPDATE);
        break;
        case Constants.Actions.SET_COMBAT_SKILL_RANK:
        this.setCombatSkillRank(action.index, action.rank);
        this.emit(CharacterEvents.UPDATE);
        break;
        case Constants.Actions.ADD_COMBAT_STYLE:
        this.addCombatSkill(action.name, action.main, action.off, action.armor, action.rank);
        this.emit(CharacterEvents.UPDATE);
        break;
      }
    });
  }

  clearCharacter() {
    this.character = JSON.parse(JSON.stringify(newCharacter));
  }

  getCharacter() {
    return JSON.parse(JSON.stringify(this.character));
  }

  setCharacter(character) {
    this.character = character;
  }

  getBasics() {
    return JSON.parse(JSON.stringify(this.character.basics));
  }

  getTraits() {
    return JSON.parse(JSON.stringify(this.character.traits));
  }

  getSkills() {
    return JSON.parse(JSON.stringify(this.character.skills));
  }

  getBackgrounds() {
    return JSON.parse(JSON.stringify(this.character.backgrounds));
  }

  getCredos() {
    return JSON.parse(JSON.stringify(this.character.credos));
  }

  getFate() {
    return JSON.parse(JSON.stringify(this.character.fate));
  }

  getWounds() {
    return JSON.parse(JSON.stringify(this.character.wounds));
  }

  setSimpleData(category, key, value) {
    this.character[category][key] = value;
  }

  setGeneralSkill(skill, value) {
    this.character.skills.general[skill] = value;
  }

  setSpecialistSkill(index, name, value) {
    if(index > this.character.skills.specialist.length) {
      this.character.skills.specialist.push({name: name, rank: value});
    }
    else {
      this.character.skills.specialist[index].rank = value;
    }
  }

  addCombatSkill(name, main, off, armor, value) {
    this.character.skills.combat.push({
      name: name,
      mainHand: main,
      offHand: off,
      armor: armor,
      rank: value
    });
  }

  setCombatSkillRank(index, value) {
    this.character.skills.combat[index].rank = value;
  }

  setBackgroundData(index, name, description) {
    this.character.backgrounds[index] = {
      name: name,
      description: description
    };
  }

  addBackgroundData(name, description) {
    this.character.backgrounds.push({
      name: name,
      description: description
    });
  }

  addCredo(name, rank, points) {
    this.character.credos.push({
      name: name,
      rank: rank,
      points: points
    });
  }

  changeCredo(index, rank, points) {
    if(rank || rank === 0) {
      this.character.credos[index].rank = rank;
    }
    if(points || points === 0) {
      this.character.credos[index].points = points;
    }
  }

  setFate(max, spent) {
    if(max) {
      this.character.fate.max = max;
    }
    if(spent || spent === 0) {
      this.character.fate.spent = spent;
    }
  }

  setWounds(value) {
    this.character.wounds.current = value;
  }

  setInjury(part, value) {
    this.character.wounds.parts[part] = value;
  }

  setSimpleListData(category, index, text) {
    if(this.character[category].length > index) {
      this.character[category][index] = text;
    }
    else {
      this.character[category].push(text);
    }
  }

  setIdeal(index, name, skills, rank, abilities) {
    if(this.character.ideals.length > index) {
      var ideal = this.character.ideals[index];
      if(name) {
        ideal.name = name;
      }
      if(skills) {
        ideal.skills = skills;
      }
      if(rank) {
        ideal.rank = rank;
      }
      if(abilities) {
        ideal.abilities = abilities;
      }
    }
    else {
      this.character.ideals.push({
        name: name,
        skills: skills,
        rank: rank,
        abilities: abilities
      });
    }
  }

  addCharacterChangeListener(callback) {
    this.on(CharacterEvents.UPDATE, callback);
  }

  removeCharacterChangeListener(callback) {
    this.removeListener(CharacterEvents.UPDATE, callback);
  }
}

export default CharacterStore;
