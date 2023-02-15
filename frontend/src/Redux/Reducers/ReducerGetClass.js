import { GET_CLASSES, GET_SECTIONS } from "../Constants/Constants";

const initialState = {
  getClasses: [],
};

export const ReducerGetClass = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CLASSES:
      return {
        ...state,
        getClasses: actions.payload,
      };
    default:
      return state;
  }
};
