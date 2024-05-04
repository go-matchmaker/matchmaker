import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styled from "styled-components";
import AngleDownIcon from "../icons/AngleDownIcon";
import { theme } from "@/utils/theme";

const Container = styled.div`
  width: 100%;
  position: relative;
`;
const SelectedOptionContainer = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ isOpen }) =>
    isOpen
      ? `1px solid ${theme.colors.mainGreen}`
      : `1px solid ${theme.colors.mainGrey}`};
  border-radius: 20px;
  width: 100%;
  height: 50px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.darkGrey};

  transition: border 500ms, background-color 500ms;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.lightGrey};
  }
`;

const ValueInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &::placeholder {
    color: ${theme.colors.mainGrey};
  }
`;
const OptionsContainer = styled.div<{
  isOpen?: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "160px" : "0px")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  border: 1px solid ${theme.colors.mainGreen};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  z-index: 10;
  margin-top: 6px;

  transition: height 500ms, opacity 300ms;
`;

const Option = styled.div<{ selectedOption: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0px;
  height: 50px;
  padding: 6px 12px;
  background-color: ${({ selectedOption }) =>
    selectedOption ? theme.colors.lightGrey : theme.colors.white};
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.lightGrey};
  }

  &:first-child {
    margin-top: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  &:last-child {
    margin-bottom: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

interface Props {
  name: string;
  control: Control<FieldValues>;
  placeholder?: string;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const Select: React.FC<Props> = ({ name, control, placeholder, LeftIcon }) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const options = [
    { value: 1, label: "a" },
    { value: 2, label: "b" },
    { value: 3, label: "c" },
  ];

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref, disabled },
        fieldState,
        formState,
      }) => {
        return (
          <Container ref={ref}>
            <SelectedOptionContainer
              isOpen={open}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((prev) => !prev);
              }}
            >
              {LeftIcon && (
                <LeftIcon
                  width={20}
                  height={20}
                  fill={theme.colors.mainGrey}
                  style={{ transition: "fill 500ms", marginRight: "10px" }}
                />
              )}
              <ValueInput
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                placeholder={placeholder}
              />
              <AngleDownIcon width={"20px"} height={"20px"} />
            </SelectedOptionContainer>
            <OptionsContainer isOpen={open}>
              {options?.map((option) => (
                <Option
                  selectedOption={value?.label === option.label}
                  onClick={() => {
                    setSearchValue(option.label);
                    onChange(option);
                    setOpen(false);
                  }}
                  key={option.value}
                >
                  {option.label}
                </Option>
              ))}
            </OptionsContainer>
          </Container>
        );
      }}
    />
  );
};

export default Select;
