import { GETCURRENCY } from '../constants/index';
const init = {
  currencyList:[],
}
export const currencyList = (state = init.currencyList, action = {}) => {
  switch (action.type) {
    case GETCURRENCY:
      return action.data.list;
    default:
      return state
  }
}

