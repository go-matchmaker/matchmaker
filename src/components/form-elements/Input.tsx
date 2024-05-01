import React, { FC, useState } from "react";
import {
  FieldValues,
  FormState,
  Path,
  UseFormRegister,
  Validate,
} from "react-hook-form";
import styled from "styled-components";
import { theme } from "@/utils/theme";
import { formInputErrorStyle } from "@/utils/helpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFieldContainer = styled.div<{
  isFocused: boolean;
  isError: boolean;
}>`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  border: ${({ isFocused, isError }) =>
    formInputErrorStyle(isFocused, isError)?.border};
  border-radius: 20px;
  padding: 6px 12px;
  gap: 10px;
  transition: border 500ms;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: ${theme.colors.darkGrey};
  &::placeholder {
    color: ${theme.colors.mainGrey};
  }
`;
const ErrorText = styled.span<{
  isError: boolean;
}>`
  font-size: 12px;
  height: ${({ isError }) => (isError ? "14px" : "0px")};
  color: red;
  overflow: hidden;
  font-weight: 500;
  transition: height 500ms;
`;

interface Props {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  name: Path<FieldValues>;
  required?: string;
  placeholder?: string;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type?: React.HTMLInputTypeAttribute;
  validate?:
    | Validate<any, FieldValues>
    | Record<string, Validate<any, FieldValues>>
    | undefined;
}

const Input: FC<Props> = ({
  register,
  formState,
  name,
  required,
  placeholder,
  LeftIcon,
  type,
  validate,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isError = Boolean(formState.errors?.[name]);

  return (
    <Container>
      <InputFieldContainer isFocused={isFocused} isError={isError}>
        {LeftIcon && (
          <LeftIcon
            width={20}
            height={20}
            fill={formInputErrorStyle(isFocused, isError)?.color}
            style={{ transition: "fill 500ms" }}
          />
        )}
        <InputField
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          type={type}
          {...register(name, {
            required,
            onBlur: () => setIsFocused(false),
            validate,
          })}
        />
      </InputFieldContainer>
      <ErrorText isError={isError}>
        {formState?.errors?.[name]?.message?.toString()}
      </ErrorText>
    </Container>
  );
};

export default Input;
