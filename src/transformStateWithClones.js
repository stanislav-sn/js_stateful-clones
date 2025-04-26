'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const RESULT = [];
  let currentState = { ...state };

  for (const ACTION of actions) {
    switch (ACTION.type) {
      case 'addProperties':
        currentState = { ...currentState, ...ACTION.extraData };
        break;

      case 'removeProperties':
        currentState = { ...currentState };

        for (const KEY of ACTION.keysToRemove) {
          delete currentState[KEY];
        }
        break;

      case 'clear':
        currentState = {};
        break;
    }

    RESULT.push({ ...currentState });
  }

  return RESULT;
}

module.exports = transformStateWithClones;
