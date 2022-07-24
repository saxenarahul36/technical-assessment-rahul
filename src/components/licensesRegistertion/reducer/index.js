import actionType from "./types";
import { intialData } from "./model";

export const licensesRegistertionReducer = (state, action) => {
  switch (action.type) {
    case actionType.INPUT_CHANGE:
      const id = action.payload.id;
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [id]: { ...state.formFields[id], ...action.payload },
        },
      };
    case actionType.FORM_VALIDATION:
      return {
        ...state,
        formFields: { ...action.payload },
      };
    case actionType.RESET_FORM_FIELDS:
      return intialData;
    case actionType.IS_CONFIRMATION:
      return {
        ...state,
        submitForm: { ...state.submitForm, ...action.payload },
      };
    case actionType.SUBMIT_LOADING:
      return {
        ...state,
        isSubmitInprogress: action.payload,
      };
    default:
      return state;
  }
};
