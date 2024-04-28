"use client";
import { RegisterSteps } from "@/utils/enums";
import { getRegisterProgressBarLabelWidth } from "@/utils/helpers";
import React, { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const CenterContainer = styled.div`
  width: 35%;
  height: 80%;
  border: 1px solid ${(props) => props.theme.colors.menuGrey};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 20px ${(props) => props.theme.colors.menuGrey};
  transition: height 1s, width 1s;

  ${(props) => props.theme.breakpoints.laptopL} {
    width: 40%;
  }
  ${(props) => props.theme.breakpoints.laptop} {
    width: 50%;
  }
  ${(props) => props.theme.breakpoints.tablet} {
    width: 70%;
  }
  ${(props) => props.theme.breakpoints.mobile} {
    width: 90%;
    height: 90%;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.menuGrey};
  width: 100%;
  height: 4em;
  border-radius: 2em;
  user-select: none;
`;

const ProgressBarLabel = styled.label<{ activeStep: RegisterSteps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  width: ${({ activeStep }) => getRegisterProgressBarLabelWidth(activeStep)};
  height: 100%;
  letter-spacing: 1px;
  background-color: red;
  border-radius: 2em;
  padding: 0em 2em;
  transition: width 1s;
`;

const NextButton = styled.button``;
const PreviousButton = styled.button``;

const Register = () => {
  const [activeStep, setActiveStep] = useState(RegisterSteps.PersonalInfo);

  const label = useMemo(() => {
    switch (activeStep) {
      case RegisterSteps.PersonalInfo:
        return `Personal\nInformation`;
      case RegisterSteps.CompanyInfo:
        return `Company\nInformation`;
      case RegisterSteps.AccountInfo:
        return `Account\nInformation`;
      default:
        break;
    }
  }, [activeStep]);

  return (
    <Container>
      <CenterContainer>
        <ProgressBarContainer>
          <ProgressBarLabel activeStep={activeStep}>{label}</ProgressBarLabel>
        </ProgressBarContainer>
        <div style={{ marginTop: "5em" }}>
          <PreviousButton
            onClick={() => {
              setActiveStep((prev) => {
                if (prev === RegisterSteps.CompanyInfo) {
                  return RegisterSteps.PersonalInfo;
                } else if (prev === RegisterSteps.AccountInfo) {
                  return RegisterSteps.CompanyInfo;
                } else {
                  return prev;
                }
              });
            }}
          >
            Previous
          </PreviousButton>
          <NextButton
            onClick={() => {
              setActiveStep((prev) => {
                if (prev === RegisterSteps.PersonalInfo) {
                  return RegisterSteps.CompanyInfo;
                } else if (prev === RegisterSteps.CompanyInfo) {
                  return RegisterSteps.AccountInfo;
                } else {
                  return prev;
                }
              });
            }}
          >
            Next
          </NextButton>
        </div>
      </CenterContainer>
    </Container>
  );
};

export default Register;
