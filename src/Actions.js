'use strict';

import Constants from './constants/Constants';

export default {
  showModal : (modalName, data) => {
    AppDispatcher.dispatch({
      actionType: Constants.showModal,
      id: modalName,
      data: data
    });
  }
}
