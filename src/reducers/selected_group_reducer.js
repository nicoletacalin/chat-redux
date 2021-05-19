
import { GROUP_SELECTED } from '../actions';

const selectedGroupReducer = (state=null, action) => {
  switch (action.type) {
    case GROUP_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default selectedGroupReducer;
