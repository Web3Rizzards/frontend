import { cloneElement, ElementType, isValidElement, createElement } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants, disableVariants } from "./types";
import { Box, Flex } from "../Box";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (disabled) {
    classNames.push("pancake-button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={disabled}
      {...rest}
    >
      <>
        {isLoading ? (
          <>
            <Flex opacity="0">{children}</Flex>
          </>
        ) : (
          <>{children}</>
        )}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.ARGO,
  scale: scales.MD,
  disabled: false,
};

const disableStyle = {
  [disableVariants.PURPLE]: {
    borderColor: "#57598b",
    background: "#22234b",
    color: "#57598b",
  },
  [disableVariants.GREEN]: {
    borderColor: "#355b67",
    background: "#133640",
    color: "#355b67",
  },
};

export default Button;

export const GradientButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gradients.argo};
`;

export const BorderGradientButton = styled(Button)`
  :disabled {
    border-color: ${({ disableVariant }) => disableStyle[disableVariant || disableVariants.GREEN].borderColor};
    background: ${({ disableVariant }) => disableStyle[disableVariant || disableVariants.GREEN].background};
    color: ${({ disableVariant }) => disableStyle[disableVariant || disableVariants.GREEN].color};
  }

  border-radius: ${({ theme }) => theme.radii.medium};
  border: 2px solid white;
  font-weight: 700;

  width: 100%;
  padding: 0 15px;

  height: 35px;
  font-size: 12px;
  letter-spacing: 1.2px;

  ${({ theme }) => theme.mediaQueries.md} {
    height: 45px;
    font-size: 14px;
    letter-spacing: 1.4px;
  }
`;

export const CleanButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
