'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const RESULT = [];
  let CURRENT_STATE = { ...state };

  for (const ACTION of actions) {
    switch (ACTION.type) {
      case 'addProperties':
        CURRENT_STATE = { ...CURRENT_STATE, ...ACTION.extraData };
        break;

      case 'removeProperties':
        CURRENT_STATE = { ...CURRENT_STATE };

        for (const KEY of ACTION.keysToRemove) {
          delete CURRENT_STATE[KEY];
        }
        break;

      case 'clear':
        CURRENT_STATE = {};
        break;
    }

    RESULT.push({ ...CURRENT_STATE });
  }

  return RESULT;
}

module.exports = transformStateWithClones;
