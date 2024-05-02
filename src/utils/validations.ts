import { RegisterSteps } from "./enums";

export const registerPageEmailValidation = (
  email: string,
  activeStep: RegisterSteps
) => {
  const emailCheckRegex = /\S+@\S+\.\S+/;
  const isValid = emailCheckRegex.test(email);
  if (!isValid && activeStep === RegisterSteps.AccountInfo) {
    return "Please enter a valid e-mail address.";
  }
  return true;
};

export const registerPageConfirmPasswordValidation = (
  passwordValue: string,
  confirmPasswordValue: string,
  activeStep: RegisterSteps
) => {
  if (
    passwordValue !== confirmPasswordValue &&
    activeStep === RegisterSteps.AccountInfo
  ) {
    return "Password does not match.";
  }
  return true;
};
