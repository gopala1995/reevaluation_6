import { SORT_PRODUCT, DATA_PRODUCT } from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case SORT_PRODUCT:
      return {...store}
    case DATA_PRODUCT:
        return {...store}
    default:
      return store
  }
  // add the switch statement for different actions
};
