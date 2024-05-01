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
