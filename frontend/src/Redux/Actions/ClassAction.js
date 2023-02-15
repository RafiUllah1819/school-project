import { GET_SECTIONS, GET_CLASSES } from "../Constants/Constants";
import { url } from "../api";
import axios from "axios";

const get_AllClasses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/classRoute")
      //   .get(`${url}/classRoute`)

      .then((response) => dispatch(get_classes(response.data)))
      .catch((err) => console.log(err));
  };
};

const get_classes = (payload) => {
  return {
    type: GET_CLASSES,
    payload,
  };
};

const get_sections = (sections) => {
  return {
    type: GET_SECTIONS,
    sections,
  };
};

export { get_classes, get_sections, get_AllClasses };
