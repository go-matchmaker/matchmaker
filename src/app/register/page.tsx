"use client";
import Input from "@/components/form-elements/Input";
import UserIcon from "@/components/icons/UserIcon";
import { RegisterSteps } from "@/utils/enums";
import {
  getRegisterProgressBarLabelWidth,
  registerPageFormStep,
  registerPageRequiredText,
} from "@/utils/helpers";
import {
  registerPageConfirmPasswordValidation,
  registerPageEmailValidation,
} from "@/utils/validations";
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
    width: 50%;
  }
  ${(props) => props.theme.breakpoints.laptop} {
    width: 50%;
  }
  ${(props) => props.theme.breakpoints.tablet} {
    width: 85%;
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
  height: 50px;
  border-radius: 2em;
  user-select: none;
  margin: 24px 0px;
`;

const ProgressBarLabel = styled.label<{ $activestep: RegisterSteps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  width: ${({ $activestep }) => getRegisterProgressBarLabelWidth($activestep)};
  height: 100%;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.colors.mainGreen};
  border-radius: 2em;
  padding: 0em 2em;
  transition: width 1s;
  color: white;
  font-size: 0.8vw;
  transition: font-size 500ms, width 500ms;

  ${(props) => props.theme.breakpoints.laptopL} {
    font-size: 0.9vw;
  }
  ${(props) => props.theme.breakpoints.laptop} {
    font-size: 1.3vw;
  }
  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 1.8vw;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

const NextButton = styled.button``;
const PreviousButton = styled.button``;

const InputContainer = styled.div<{ $activestep: RegisterSteps }>`
  display: flex;
  transform: ${({ $activestep }) => registerPageFormStep($activestep)};
  transition: transform 500ms;
`;

const PersonalInformationTab = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const AccountInformationTab = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
`;

const RegısterLabel = styled.label`
  font-size: 2vw;
  font-weight: bold;
  letter-spacing: 8px;
`;
const WelcomeLabel = styled.label`
  font-size: 1.5vw;
  font-weight: 500;
  letter-spacing: 4px;
`;
const DescrıptıonLabel = styled.label`
  font-size: 1vw;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Register = () => {
  const { register, handleSubmit, formState, control, watch } = useForm();
  const [activeStep, setActiveStep] = useState(RegisterSteps.PersonalInfo);
  const label = useMemo(() => {
    if (activeStep === RegisterSteps.PersonalInfo) {
      return `PERSONAL INFORMATION`;
    } else {
      return `ACCOUNT INFORMATION`;
    }
  }, [activeStep]);
  const onSubmit: SubmitHandler<any> = (data) => {
    delete data?.confirm_password;
    setActiveStep((prev) => {
      if (prev === RegisterSteps.PersonalInfo) {
        return RegisterSteps.AccountInfo;
      } else {
        return prev;
      }
    });
    if (activeStep !== RegisterSteps.AccountInfo) {
      return;
    }

    console.log("istek atti");
  };

  return (
    <Container>
      <CenterContainer>
        <TopTextContainer>
          <RegısterLabel>REGISTER</RegısterLabel>
          <WelcomeLabel>WELCOME</WelcomeLabel>
          <DescrıptıonLabel>
            Please fill in the information below step by step.
          </DescrıptıonLabel>
        </TopTextContainer>
        <ProgressBarContainer>
          <ProgressBarLabel $activestep={activeStep}>{label}</ProgressBarLabel>
        </ProgressBarContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer $activestep={activeStep}>
            <PersonalInformationTab>
              <Input
                register={register}
                formState={formState}
                name="name"
                LeftIcon={UserIcon}
                placeholder="Name"
                required={registerPageRequiredText(activeStep).name}
              />
              <Input
                register={register}
                formState={formState}
                name="surname"
                LeftIcon={UserIcon}
                placeholder="Surname"
                required={registerPageRequiredText(activeStep).surname}
              />
              <Input
                register={register}
                formState={formState}
                name="email"
                LeftIcon={UserIcon}
                placeholder="E-Mail"
                required={registerPageRequiredText(activeStep).email}
                validate={(fieldValue) =>
                  registerPageEmailValidation(fieldValue, activeStep)
                }
              />
              <Input
                register={register}
                formState={formState}
                name="phone_number"
                LeftIcon={UserIcon}
                placeholder="Phone number"
                type="number"
                required={registerPageRequiredText(activeStep).phoneNumber}
              />
            </PersonalInformationTab>
            <AccountInformationTab>
              <Input
                register={register}
                formState={formState}
                name="password"
                LeftIcon={UserIcon}
                placeholder="Password"
                required={registerPageRequiredText(activeStep).password}
              />
              <Input
                register={register}
                formState={formState}
                name="confirm_password"
                LeftIcon={UserIcon}
                placeholder="confirmPassword"
                required={registerPageRequiredText(activeStep).confirmPassword}
                validate={(fieldValue, formValues) =>
                  registerPageConfirmPasswordValidation(
                    formValues?.password,
                    fieldValue,
                    activeStep
                  )
                }
              />
            </AccountInformationTab>
          </InputContainer>
          {activeStep === RegisterSteps.AccountInfo && (
            <PreviousButton
              type="button"
              onClick={() => {
                setActiveStep((prev) => {
                  if (prev === RegisterSteps.AccountInfo) {
                    return RegisterSteps.PersonalInfo;
                  } else {
                    return prev;
                  }
                });
              }}
            >
              Previous
            </PreviousButton>
          )}

          <NextButton type={"submit"}>
            {activeStep === RegisterSteps.PersonalInfo ? "Next" : "Register"}
          </NextButton>
        </Form>
      </CenterContainer>
    </Container>
  );
};

export default Register;
