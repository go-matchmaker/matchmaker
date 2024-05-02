import { RegisterSteps } from "./enums";
import { theme } from "./theme";

export const getRegisterProgressBarLabelWidth = (
  activeStep: RegisterSteps
): string => {
  switch (activeStep) {
    case RegisterSteps.PersonalInfo:
      return "33.33%";
    case RegisterSteps.CompanyInfo:
      return "66.66%";
    case RegisterSteps.AccountInfo:
      return "100%";
    default:
      return "33.33%";
  }
};

export const formInputErrorStyle = (isFocused: boolean, isError: boolean) => {
  if (isError) {
    return { border: "1px solid red", color: "red" };
  }
  if (isFocused) {
    return {
      border: `1px solid ${theme.colors.mainGreen}`,
      color: theme.colors.mainGreen,
    };
  }
  return {
    border: `1px solid ${theme.colors.mainGrey}`,
    color: theme.colors.mainGrey,
  };
};

export const registerPageFormStep = (activeStep: RegisterSteps) => {
  if (activeStep === RegisterSteps.PersonalInfo) {
    return "translateX(0%)";
  } else if (activeStep === RegisterSteps.CompanyInfo) {
    return "translateX(-100%)";
  } else if (activeStep === RegisterSteps.AccountInfo) {
    return "translateX(-200%)";
  }
  return "translateX(0%)";
};

export const registerPageRequiredText = (activeStep: RegisterSteps) => {
  const requiredText = "The name field is required.";
  switch (activeStep) {
    case RegisterSteps.PersonalInfo:
      return {
        name: requiredText,
        surname: requiredText,
        email: requiredText,
        phoneNumber: requiredText,
        password: undefined,
        confirmPassword: undefined,
      };
    case RegisterSteps.CompanyInfo:
      return {
        name: undefined,
        surname: undefined,
        email: undefined,
        phoneNumber: undefined,
        password: undefined,
        confirmPassword: undefined,
      };
    case RegisterSteps.AccountInfo:
      return {
        name: undefined,
        surname: undefined,
        email: undefined,
        phoneNumber: undefined,
        password: requiredText,
        confirmPassword: requiredText,
      };
    default:
      return {};
  }
};
