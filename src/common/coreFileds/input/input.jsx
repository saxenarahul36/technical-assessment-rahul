import React from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { isValidDate } from "../../../utils/validation";

export const InputField = styled.input`
  && {
    padding: 12px;
    ${({ valid }) =>
      !valid
        ? undefined
        : `border: 1px solid red;
    &::placeholder {
      color: red;
      opacity: 1; /* Firefox */
    }`};
  }
`;

export const TextareaField = styled.textarea`
  && {
    padding: 12px;
    ${({ valid }) =>
      !valid
        ? undefined
        : `border: 1px solid red;
    &::placeholder {
      color: red;
      opacity: 1; /* Firefox */
    }`};
  }
`;

export const DatePickerField = styled(DatePicker)`
  && {
    padding: 12px;
    width: 100%;
    ${({ valid }) =>
      !valid
        ? undefined
        : `border: 1px solid red;
    &::placeholder {
      color: red;
      opacity: 1; /* Firefox */
    }`};
  }
`;

const InputFields = (props) => {
  const _onChange = (e) => {
    const input = e.target.value;
    props.onChangeComplete(props.options.id, input);
  };

  const _onDateChange = (date) => {
    props.onChangeComplete(props.options.id, date, props.options.type);
  };
  const opt = props.options;
  if (opt.type === "date") {
    return (
      <DatePickerField
        id={opt.id}
        disabledKeyboardNavigation={false}
        name={opt.name}
        valid={props.valid}
        selected={
          isValidDate(props.input) ? moment(props.input).toDate() : null
        }
        placeholderText={opt.placeholder}
        required={opt.options.required ? true : false}
        value={props.input}
        onBlur={props.onBlur}
        onChange={_onDateChange}
      />
    );
  }
  if (opt.type === "textarea")
    return (
      <TextareaField
        valid={props.valid}
        id={opt.id}
        name={opt.name}
        placeholder={opt.placeholder}
        required={opt.options.required ? true : false}
        value={props.input}
        onChange={_onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        strictParsing={false}
      />
    );

  return (
    <InputField
      valid={props.valid}
      type={opt.type}
      id={opt.id}
      name={opt.name}
      placeholder={opt.placeholder}
      required={opt.options.required ? true : false}
      value={props.input}
      onChange={_onChange}
      onBlur={props.onBlur}
      onClick={props.onClick}
    />
  );
};

export default InputFields;
