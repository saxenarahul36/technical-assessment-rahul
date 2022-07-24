import React from "react";
import styled from "styled-components";

export const AboutWapper = styled.div`
  margin-top: 20px;
  text-align: center;
  h1 {
    font-size: 50px;
    margin-bottom: 100px;
  }
`;
const About = () => {
  return (
    <AboutWapper>
      <h1>Welcome To About Page</h1>
    </AboutWapper>
  );
};

export default About;
