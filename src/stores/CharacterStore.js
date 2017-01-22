  'use strict';

  import {EventEmitter} from 'events';
  var W3CWebSocket = require('websocket').w3cwebsocket;

  import AppDispatcher from '../dispatcher/AppDispatcher';

  import CharacterEvents from '../events/CharacterEvents';

  import Constants from '../constants/Constants';

  import sampleCharacter from '../data/SampleCharacter';
  import newCharacter from '../data/NewCharacter';

  class CharacterStore extends EventEmitter {
    constructor() {
      super();

      this.characterFile = null;
      this.character = JSON.parse(JSON.stringify(sampleCharacter));
      this.listOfCharacters = [];
      this.socket = null;

      AppDispatcher.register((action) => {
        switch(action.type) {
          case Constants.Actions.CHANGE:
          this.characterFile = action.name;
          let msg = {
            action: "subscribe",
            file: action.name
          };
          this.sendMessage(msg);
          // this.character = action.character;
          this.emit(CharacterEvents.LIST_UPDATE);
          break;
          case Constants.Actions.CREATE:
          this.characterFile = action.name;
          let nChar = JSON.parse(JSON.stringify(newCharacter));
          nChar.basics.name = action.name;
          msg = {
            action: "create",
            file: action.name,
            data: nChar
          };
          this.sendMessage(msg);
          break;
          case Constants.Actions.UPDATE_BASICS:
            this.character.basics = action.data;
            this.saveCharacter();
          break;
          case Constants.Actions.ADD_BACKGROUND:
          this.setBackgroundData(action.index, action.name, action.description);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_SIMPLE_DATA:
          this.setSimpleData(action.category, action.key, action.value);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_SIMPLE_LIST_DATA:
          this.setSimpleListData(action.list, action.index, action.data);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_GENERAL_SKILL:
          this.setGeneralSkill(action.name, action.rank);
          this.saveCharacter();
          break;
          case Constants.Actions.ADD_SPECIALIST_SKILL:
          this.setSpecialistSkill(this.character.skills.specialist.length+1, action.name, 0);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_SPECIALIST_SKILL_RANK:
          this.setSpecialistSkill(action.index, null, action.rank);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_COMBAT_SKILL_RANK:
          this.setCombatSkillRank(action.index, action.rank);
          this.saveCharacter();
          break;
          case Constants.Actions.ADD_COMBAT_STYLE:
          this.addCombatSkill(action.name, action.main, action.off, action.armor, action.rank);
          this.saveCharacter();
          break;
          case Constants.Actions.SET_CREDO:
          this.setCredo(action.index, action.name, action.rank, action.points);
          this.saveCharacter();
          break;
        }
      });

      this.openSocket();
    }

    getList() {
      return this.listOfCharacters;
    }

    getFile() {
      return this.characterFile;
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

    setCredo(index, name, rank, points) {
      if(index > this.character.credos.length-1) {
        this.character.credos.push({
        name: name,
        rank: rank,
        points: points
        });
      }
      else {
        if(name) {
          this.character.credos[index].name = name;
        }
        if(rank || rank === 0) {
          this.character.credos[index].rank = rank;
        }
        if(points || points === 0) {
          this.character.credos[index].points = points;
        }
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

    openSocket() {
      if(this.socket === null) {
        this.socket = new W3CWebSocket("ws://vps196831.ovh.net:11130/DataService/sheets", "", "ws://vps196831.ovh.net:11130/DataService/sheets");
        this.socket.onopen = this.connectionOpen.bind(this);
        this.socket.onmessage = this.messageFromServer.bind(this);
        this.socket.onclose = this.connectionClosed.bind(this);
      }
    }

    connectionOpen(event) {

    }

    saveCharacter() {
      let msg = {
        action: "update",
        file: this.characterFile,
        data: this.character
      }
      this.sendMessage(msg);
    }

    messageFromServer(event) {
      console.log("Received message " + event.data);
      let msg = JSON.parse(event.data);

      switch(msg.action) {
        case "list":
        this.listOfCharacters = msg.data;
        this.emit(CharacterEvents.LIST_UPDATE);
        break;
        case "character-created":
          this.characterFile = msg.file;
          this.character = msg.data;
          this.emit(CharacterEvents.UPDATE);
          break;
        case "character-data":
        if(msg.file === this.characterFile) {
          this.character = msg.data;
          this.emit(CharacterEvents.UPDATE);
        }
        break;
        default:
        console.warn("No handler for server action " + msg.action);
      }
    }

    connectionClosed(event) {
      this.socket = null;
    }

    sendMessage(msg) {
      if(this.socket.readyState === this.socket.OPEN) {
        console.log("Sending message " + JSON.stringify(msg));
        this.socket.send(JSON.stringify(msg));
      }
      else {
        window.setTimeout(this.sendMessage.bind(this, msg), 1000);
      }
    }

    addListChangeListener(callback) {
      this.on(CharacterEvents.LIST_UPDATE, callback);
    }

    removeListChangeListener(callback) {
      this.removeListener(CharacterEvents.LIST_UPDATE, callback);
    }

    addCharacterChangeListener(callback) {
      this.on(CharacterEvents.UPDATE, callback);
    }

    removeCharacterChangeListener(callback) {
      this.removeListener(CharacterEvents.UPDATE, callback);
    }
  }

  export default CharacterStore;
