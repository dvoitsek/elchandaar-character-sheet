'use strict';

import AppDispatcher from './dispatcher/AppDispatcher';

import Constants from './constants/Constants';

export default {
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

  setSimpleListData: (list, index, data) => {
    AppDispatcher.dispatch({
      type: Constants.Actions.SET_SIMPLE_DATA,
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
  }
}
