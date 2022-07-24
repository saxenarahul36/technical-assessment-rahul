import styled from "styled-components";

export const HomeWapper = styled.div`
  margin-top: 20px;
  h1 {
    font-size: 50px;
    text-align: center;
  }
  @media screen and (max-width: 300px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 20px;
  align-items: baseline;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));

  @media (max-width: 648px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 990px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 1296px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    padding: 4px;
  }
  .card {
    border: 1px solid #d2d2d2f2;
    padding: 0.5rem;
    background-color: white;
    box-shadow: rgb(161 170 178 / 27%) 3px 19px 35px;
    h5 {
      font-size: 1.2rem;
      line-height: 1.2rem;
      color: #534c4c;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      color: gray;
    }
    img {
      width: 100%;
      height: 200px;
      margin-bottom: 10px;
    }
  }
  .card > .header {
    margin-bottom: 0.25rem;
    // text: alignt;
  }
  .card > .email {
    font-size: 0.8rem;
    color: #777;
  }
  .nav-link {
    color: black;
    color: #fff;
    min-width: 105px;
    background-color: #2196f3;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    /* margin: auto 12px; */
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .nav-link:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
  .action {
    margin: 16px auto 12px auto;
    display: flex;
    justify-content: space-between;
  }
`;
