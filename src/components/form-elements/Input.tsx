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
  width: 100%;
`;

const InputFieldContainer = styled.div<{
  $isfocused: boolean;
  $iserror: boolean;
  $isdisabled: boolean | undefined;
}>`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  border: ${({ $isfocused, $iserror }) =>
    formInputErrorStyle($isfocused, $iserror)?.border};
  border-radius: 20px;
  padding: 6px 12px;
  gap: 10px;
  opacity: ${({ $isdisabled }) => $isdisabled && "0.7"};
  transition: border 500ms, background-color 500ms;

  &:hover {
    background-color: ${({ $isdisabled }) =>
      !$isdisabled && theme.colors.lightGrey};
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: ${theme.colors.darkGrey};
  background-color: transparent;
  &::placeholder {
    color: ${theme.colors.mainGrey};
  }
`;
const ErrorText = styled.span<{
  $iserror: boolean;
}>`
  font-size: 12px;
  height: ${({ $iserror }) => ($iserror ? "14px" : "0px")};
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
  disabled?: boolean;
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
  disabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isError = Boolean(formState.errors?.[name]);

  return (
    <Container>
      <InputFieldContainer
        $isfocused={isFocused}
        $iserror={isError}
        $isdisabled={disabled}
      >
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
            disabled,
          })}
        />
      </InputFieldContainer>
      <ErrorText $iserror={isError}>
        {formState?.errors?.[name]?.message?.toString()}
      </ErrorText>
    </Container>
  );
};

export default Input;
