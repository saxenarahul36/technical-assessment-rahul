import React from "react";
import styled from "styled-components";

export const ContactWapper = styled.div`
  margin-top: 20px;
  text-align: center;
  h1 {
    font-size: 50px;
    margin-bottom: 100px;
  }
`;
const Contact = () => {
  return (
    <ContactWapper>
      <h1>Welcome To Contact Page</h1>
    </ContactWapper>
  );
};

export default Contact;
