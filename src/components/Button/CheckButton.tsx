import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const CheckButtonContainer = styled.label`
  position: relative;
  display: flex;
  align-items: start;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    border-radius: 20px;
    background-color: #eee;
  }

  &:hover input ~ div > .checkmark {
    background-color: #c1c1c1;
  }

  &:hover input ~ .checkmarkText {
    color: #c1c1c1;
    > div {
      color: #c1c1c1;
    }
  }

  /* When the checkbox is checked, add a lightgreen background */
  & input:checked ~ div > .checkmark {
    background-color: #8aeda5;
  }

  & input:checked ~ .checkmarkText {
    color: #8aeda5;
    > div {
      color: #8aeda5;
    }
  }
`;

export type CheckButtonProps = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  height?: string;
  width?: string;
  lineHeight?: string;
  fontSize?: string;
};

const CheckButton: FC<PropsWithChildren<CheckButtonProps>> = (props) => {
  const {
    checked,
    setChecked,
    children,
    height = "0.6em",
    width = "0.6em",
    lineHeight = "1rem",
    fontSize = "0.7rem",
  } = props;

  return (
    <CheckButtonContainer>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <div
        style={{
          marginRight: "0.5em",
          height: lineHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="checkmark" style={{ height, width }} />
      </div>
      <div className="checkmarkText" style={{ fontSize, lineHeight }}>
        {children}
      </div>
    </CheckButtonContainer>
  );
};

export default CheckButton;
