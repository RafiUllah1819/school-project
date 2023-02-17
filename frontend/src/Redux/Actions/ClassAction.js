import {
  FETCH_CLASSES_REQUEST,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  FETCH_SECTIONS_REQUEST,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
} from "../Constants/Constants";
import { url } from "../api";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(get_classes_request());

    try {
      const response = await axios.get(`${url}/classRoute`);
      console.log("response", response);
      dispatch(get_classes_success(response));
    } catch (error) {
      // console.log("error", error);
      dispatch(get_classes_Failure(error.message));
    }
  };
};

const get_classes_success = (payload) => {
  return {
    type: FETCH_CLASSES_SUCCESS,
    payload,
  };
};

const get_classes_request = (payload) => {
  return {
    type: FETCH_CLASSES_REQUEST,
    payload,
  };
};
const get_classes_Failure = (error) => {
  return {
    type: FETCH_CLASSES_FAILURE,
    error,
  };
};

const get_sections = (sections) => {
  return {
    type: FETCH_SECTIONS_SUCCESS,
    sections,
  };
};

export {
  get_classes_request,
  get_classes_success,
  get_classes_Failure,
  get_sections,
  //  get_AllClasses,
  // fetchUsers,
};
