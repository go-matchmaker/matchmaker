"use client";
import Input from "@/components/form-elements/Input";
import UserIcon from "@/components/icons/UserIcon";
import { RegisterSteps } from "@/utils/enums";
import { getRegisterProgressBarLabelWidth } from "@/utils/helpers";
import React, { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  border: 1px solid ${(props) => props.theme.colors.mainGrey};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 20px ${(props) => props.theme.colors.mainGrey};
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
  background-color: ${(props) => props.theme.colors.mainGrey};
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
  background-color: ${(props) => props.theme.colors.mainGreen};
  border-radius: 2em;
  padding: 0em 2em;
  transition: width 1s;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NextButton = styled.button``;
const PreviousButton = styled.button``;

const Register = () => {
  const { register, handleSubmit, watch, formState } = useForm();

  const [activeStep, setActiveStep] = useState(RegisterSteps.PersonalInfo);
  const [nextButtonType, setNextButtonType] = useState<
    "submit" | "reset" | "button" | undefined
  >("button");

  const label = useMemo(() => {
    switch (activeStep) {
      case RegisterSteps.PersonalInfo:
        return `PERSONAL\nINFORMATION`;
      case RegisterSteps.CompanyInfo:
        return `COMPANY\nINFORMATION`;
      case RegisterSteps.AccountInfo:
        return `ACCOUNT\nINFORMATION`;
      default:
        break;
    }
  }, [activeStep]);

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <Container>
      <CenterContainer>
        <ProgressBarContainer>
          <ProgressBarLabel activeStep={activeStep}>{label}</ProgressBarLabel>
        </ProgressBarContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            formState={formState}
            name="name"
            required
            LeftIcon={UserIcon}
            placeholder="Name"
          />
          <Input
            register={register}
            formState={formState}
            name="surname"
            required
            LeftIcon={UserIcon}
            placeholder="Surname"
          />
          <Input
            register={register}
            formState={formState}
            name="email"
            required
            LeftIcon={UserIcon}
            placeholder="E-Mail"
          />
          <Input
            register={register}
            formState={formState}
            name="phone"
            required
            LeftIcon={UserIcon}
            placeholder="Phone"
            type="number"
          />
          <PreviousButton
            type="button"
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
            type={nextButtonType}
            onClick={() => {
              if (activeStep === RegisterSteps.AccountInfo) {
                setNextButtonType("submit");
                return;
              }
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
        </Form>
      </CenterContainer>
    </Container>
  );
};

export default Register;
