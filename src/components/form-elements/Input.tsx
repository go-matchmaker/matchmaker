import React, { FC, useState } from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { theme } from "@/utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFieldContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  border: ${({ isFocused }) =>
    isFocused
      ? `1px solid ${theme.colors.mainGreen}`
      : `1px solid ${theme.colors.mainGrey}`};
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
  transition: height 500ms;
`;

interface Props {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  name: string;
  required?: boolean;
  placeholder?: string;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type?: React.HTMLInputTypeAttribute;
}

const Input: FC<Props> = ({
  register,
  formState,
  name,
  required,
  placeholder,
  LeftIcon,
  type,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <InputFieldContainer isFocused={isFocused}>
        {LeftIcon && (
          <LeftIcon
            width={20}
            height={20}
            fill={isFocused ? theme.colors.mainGreen : theme.colors.mainGrey}
            style={{ transition: "fill 500ms" }}
          />
        )}
        <InputField
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          type={type}
          {...register(name, { required, onBlur: () => setIsFocused(false) })}
        />
      </InputFieldContainer>
      <ErrorText isError={Boolean(formState.errors?.[name])}>
        This field is required
      </ErrorText>
    </Container>
  );
};

export default Input;
