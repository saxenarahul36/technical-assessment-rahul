import styled from "styled-components";

export const FooterWrper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #494e54;
  // line-height: 1.8;
  // text-align: center;
  padding: 6px 10px;
  color: white;
  margin-top: auto;
  a {
    color: white;
  }
  li a {
    display: block;
    color: white;
    // text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #2196f3;
  }
  li {
    float: left;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .text {
    line-height: 1.3;
  }

  @media (max-width: 648px) {
    .text {
      padding: 9px 7px 0px 15px;
    }
    padding: 8px 2px;

    flex-flow: column;
  }
`;
