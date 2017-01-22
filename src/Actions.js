'use strict';

import AppDispatcher from './dispatcher/AppDispatcher';

import Constants from './constants/Constants';

export default {
  selectCharacter: (name) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.CHANGE,
      name: name
    });
  },

  createCharacter: (name) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.CREATE,
      name: name
    });
  },

  updateBasics: (data) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.UPDATE_BASICS,
      data: data
    });
  },

  addBackground: (name, description, index) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.ADD_BACKGROUND,
      name: name,
      description: description,
      index: index
    });
  },

  setSimpleData: (category, key, value) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_SIMPLE_DATA,
      category: category,
      key: key,
      value: value
    });
  },

  setSimpleListData: (list, index, data) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_SIMPLE_LIST_DATA,
      list: list,
      index: index,
      data: data
    });
  },

  setCombatSkillRank: (index, rank) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_COMBAT_SKILL_RANK,
      index: index,
      rank: rank
    });
  },

  addCombatSkill: (name, main, off, armor, rank) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.ADD_COMBAT_STYLE,
      name: name,
      main: main,
      off: off,
      armor: armor,
      rank: rank
    });
  },

  setGeneralSkillRank: (name, rank) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_GENERAL_SKILL,
      name: name,
      rank: rank
    });
  },

  addSpecialistSkill: (name) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.ADD_SPECIALIST_SKILL,
      name: name
    });
  },

  setSpecialistSkillRank: (index, rank) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_SPECIALIST_SKILL_RANK,
      index: index,
      rank: rank
    });
  },

  setCredo: (index, name, rank, points) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_CREDO,
      index: index,
      name: name,
      rank: rank,
      points: points
    });
  }
}
