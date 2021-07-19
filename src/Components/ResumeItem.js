import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text, text1 }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p> <br />
        <p>{text1}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;

  @media screen and (max-width: 676px) {
    /* display: grid;
    grid-template-columns: 1fr; */
    flex-direction: column;

    p,
    h5,
    h6 {
      font-size: 70%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    max-width: 50%;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    padding-right: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0.5rem;
      top: 15px;
      height: 2px;
      width: 3rem;
      background: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 0.8rem;
      font-style: italic;
      font-weight: 100;
    }
  }
`;

export default ResumeItem;
