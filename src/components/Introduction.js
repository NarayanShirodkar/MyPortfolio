import React from "react";
import { styled } from "styled-components";

import colors from "../constants/colors";
import footerLogo from "../images/footerLogo.png";

const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  color: white;
  margin: 10px 20px;
`;

const Greeting = styled.h2`
  margin: 10px 0;
  color: white;
  font-size: 25px;
`;
const Name = styled.h1`
  margin: 10px 0;
  color: ${colors.theme};
  font-size: 40px;
`;
export default function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <Greeting>Hello !!</Greeting>
        <Name>I am Narayan</Name>
        <p>
          I'm a software engineer with extensive experience for around 2 years
          currently working at Falabella India, Bangalore.
        </p>
        <div>
          <button>Hire Me</button>
          <button>View my resume</button>
        </div>
      </div>
      <div>
        <img src={footerLogo} />
      </div>
    </IntroductionContainer>
  );
}
