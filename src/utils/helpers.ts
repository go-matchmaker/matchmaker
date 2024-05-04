import { RegisterSteps } from "./enums";
import { theme } from "./theme";

export const getRegisterProgressBarLabelWidth = (
  activeStep: RegisterSteps
): string => {
  if (activeStep === RegisterSteps.PersonalInfo) {
    return "50%";
  } else {
    return "100%";
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
  } else {
    return "translateX(-100%)";
  }
};

export const registerPageRequiredText = (
  activeStep: RegisterSteps,
  companyValue?: number
) => {
  const requiredText = "The name field is required.";

  if (activeStep === RegisterSteps.PersonalInfo) {
    return {
      name: requiredText,
      surname: requiredText,
      email: requiredText,
      phoneNumber: requiredText,
      password: undefined,
      confirmPassword: undefined,
      job_title: undefined,
    };
  } else {
    return {
      name: undefined,
      surname: undefined,
      email: undefined,
      phoneNumber: undefined,
      password: requiredText,
      confirmPassword: requiredText,
      job_title: undefined,
    };
  }
};
