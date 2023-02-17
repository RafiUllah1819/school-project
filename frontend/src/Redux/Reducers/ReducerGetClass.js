import {
  FETCH_CLASSES_FAILURE,
  FETCH_CLASSES_REQUEST,
  FETCH_CLASSES_SUCCESS,
} from "../Constants/Constants";

const initialState = {
  getClasses: [],
  err: false,
};

export const ReducerGetClass = (state = initialState, actions) => {
  console.log("actions", actions);
  switch (actions.type) {
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        getClasses: actions.payload,
      };

    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        errorMessage: actions.error,
        err: true,
      };

    default:
      return state;
  }
};
