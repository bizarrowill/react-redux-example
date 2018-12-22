import { FETCH_USERS } from "../actions/types";

const initializeState = {
  items: [],
  item: {}
};

export default function(state = initializeState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
