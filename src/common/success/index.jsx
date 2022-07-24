import React from "react";
import styled from "styled-components";
import { ReactComponent as SuccessIcon } from "../../assets/successIcon.svg";

const SuccessContainer = styled.div`
  text-align: center;
  padding: 30px 20px;
  margin: auto;
  max-width: 800px;
  margin-top: 50px;
  height: 234px;
  background-color: #e5e5e547;
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 10%) 0px 8px 24px,
    rgb(17 17 26 / 10%) 0px 16px 56px;
`;

const TickIconWrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  text-align: center;
  padding: 0 20px;
`;
const Heading = styled.h1`
  margin: 0 auto;
  max-width: 1080px;
  text-align: center;
  padding: 10px 20px;
`;

const SubHeading = styled.h2`
  margin: 0 auto;
  max-width: 1080px;
  text-align: center;
  padding: 0 20px;
`;

const Success = ({ email }) => (
  <SuccessContainer>
    <TickIconWrapper>
      <SuccessIcon />
    </TickIconWrapper>
    <Heading>Thank you!</Heading>
    <SubHeading>
      We have recived your application and will get back to you soon.
    </SubHeading>
  </SuccessContainer>
);

export default Success;
