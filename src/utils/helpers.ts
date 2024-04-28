import { RegisterSteps } from "./enums";

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
