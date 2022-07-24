import React, { useEffect, useReducer } from "react";
const Loader = require("react-loader");
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Confirmation from "../../common/confirmation";
import InputFields from "../../common/coreFileds/input/input";
import Modal from "../../common/modalBox";
import "./form.css";
import { licensesRegistertionReducer } from "./reducer";
import { intialData } from "./reducer/model";
import actionType from "./reducer/types";
import { postLicensesRegistertion } from "../../services/api/licensesApi";
import { isValidDate } from "../../utils/validation";

const LicensesRegistertionFormWapper = styled.div`
  margin-top: 20px;
  legend {
    padding: 10px 0;
    font-size: 20px;
  }
  form {
    margin: auto;
    max-width: 800px;
    background-color: #e5e5e547;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 17px;
  h1 {
    margin: 15px 0px;
  }
`;
const validate = (value, options, type) => {
  if (type == "date") {
    const valid = isValidDate(value);
    return !valid;
  }
  if (options?.required) {
    if (!value || value === "") return true;
  }
  return false;
};

const LicensesRegistertionForm = (props) => {
  let history = useHistory();
  const [store, setDispatch] = useReducer(
    licensesRegistertionReducer,
    intialData
  );
  const { formFields, submitForm, isSubmitInprogress } = store;
  const onChangeComplete = (id, value, type) => {
    let obj = { id, value };
    if (type === "date") {
      obj = { id, value, valid: false };
    }
    setDispatch({ type: actionType.INPUT_CHANGE, payload: obj });
  };

  const _onBlur = (e) => {
    const { id, value } = e.target;
    const valid = validate(
      value,
      formFields[id]?.options,
      formFields[id]?.type
    );
    setDispatch({
      type: actionType.INPUT_CHANGE,
      payload: { id, value, valid },
    });
  };

  const _submit = (e) => {
    e.preventDefault();
    // loop through all keys
    const keys = Object.keys(formFields);
    const fileds = {};
    const valid = keys.reduce((memo, n) => {
      if (!memo) return memo;
      if (
        (formFields[n]?.options.required && !formFields[n]?.value) ||
        (formFields[n].type === "date" && !isValidDate(formFields[n]?.value))
      ) {
        memo = false;
      }
      return memo;
    }, true);

    if (!valid) {
      const fileds = {};
      keys.forEach((key) => {
        const field = { ...formFields[key] };
        field.valid =
          formFields[key]?.options.required && !formFields[key].value;
        if (
          formFields[key].type === "date" &&
          !isValidDate(formFields[key]?.value)
        ) {
          field.valid = true;
        }
        fileds[key] = field;
      });
      setDispatch({
        type: actionType.FORM_VALIDATION,
        payload: fileds,
      });
      console.log(valid);
    } else {
      ConfrimationModal({ isConfirmation: true });
    }
  };
  const ConfrimationModal = (payload) => {
    setDispatch({
      type: actionType.IS_CONFIRMATION,
      payload,
    });
  };
  const restFomeFieldsHandler = () => {
    setDispatch({
      type: actionType.RESET_FORM_FIELDS,
    });
  };
  const confirmLicenseRegistrationHandler = () => {
    setDispatch({
      type: actionType.SUBMIT_LOADING,
      payload: true,
    });
    postLicensesRegistertion()
      .then((res) => {
        if (res.submited) {
          ConfrimationModal({ isConfirmation: false, isSubmit: true });
          history.push("/success");
        }
      })
      .catch(() => {
        setDispatch({
          type: actionType.SUBMIT_LOADING,
          payload: false,
        });
      });
  };
  return (
    <LicensesRegistertionFormWapper>
      <HeadingWrapper>
        <h1>License Registration</h1>
        <p>Please fill in this form to apply a license.</p>
      </HeadingWrapper>
      <form autocomplete="off">
        <fieldset>
          <legend>{props?.legend}</legend>
          <br />
          {Object.keys(formFields)?.map((key) => (
            <div key={formFields[key].id} className="form-row">
              <label htmlFor={formFields[key].id}>
                {formFields[key].label}
              </label>
              <InputFields
                options={formFields[key]}
                input={formFields[key]?.value}
                valid={formFields[key]?.valid}
                onBlur={_onBlur}
                onChangeComplete={onChangeComplete}
              />
            </div>
          ))}
        </fieldset>
        <div className="submit-row">
          <input type="submit" onClick={_submit} className="form-submit" />
          <button
            type="button"
            onClick={restFomeFieldsHandler}
            class="form-submit"
          >
            {"Rest"}
          </button>
        </div>
      </form>
      <Modal
        open={submitForm.isConfirmation}
        crose={false}
        width={"40%"}
        height={"45%"}
      >
        <Confirmation
          heading={"License Submission"}
          title={`Are you sure you want to submit?`}
          leftButtontext="Yes"
          confirmHandler={confirmLicenseRegistrationHandler}
          cancelHandler={() =>
            ConfrimationModal({ isConfirmation: false, isSubmit: false })
          }
          rightButtontext="Cancel"
        ></Confirmation>
      </Modal>
      {isSubmitInprogress && <Loader />}
    </LicensesRegistertionFormWapper>
  );
};
export default LicensesRegistertionForm;
