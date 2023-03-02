import styled from "styled-components";
import { FC, PropsWithChildren } from "react";
import { GradientButton } from "./Button";

export const GradientBox = styled.div`
  background: linear-gradient(101deg, rgba(185, 131, 247, 0.5), rgb(54, 201, 201, 0.5));

  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 100%;

  //BORDER
  background-origin: border-box;
  border: solid 3px transparent;
  border-radius: 1em;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid #7df7f7;
    box-shadow: 0px 0px 25px #7df7f7;
  }
`;
type GradientBorderButtonProps = {
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  padding?: string;
};

const GradientBorderButton: FC<PropsWithChildren<GradientBorderButtonProps>> = (props) => {
  const { handleClick, padding = "1em", children, ...rest } = props;

  let style = {
    background: "#2B2B2B",
    color: "white",
    padding,
    width: "100%",
    fontSize: "0.8rem",
    height: "auto",
    borderRadius: "0.6rem",
  };

  style = { ...style, ...rest };

  return (
    <GradientBox
      style={{
        marginRight: "10px",
      }}
    >
      <GradientButton background="#2B2B2B" style={style} onClick={handleClick}>
        <div style={{ marginLeft: "10px" }}>{children}</div>
      </GradientButton>
    </GradientBox>
  );
};

export default GradientBorderButton;
