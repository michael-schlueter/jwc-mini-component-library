import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    borderThickness: 1,
    fontSize: 0.875,
    height: 1.5,
    padding: 24,
    iconHeight: 16,
  },
  large: {
    borderThickness: 2,
    fontSize: 1.125,
    height: 2.25,
    padding: 36,
    iconHeight: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      {/* Use an IconWrapper to position the icon "into" the input box with absolute positioning */}
      <IconWrapper style={{ "--iconHeight": styles.iconHeight + "px" }}>
        <Icon id={icon} size={size === "small" ? 16 : 24} />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          // Container/Wrapper automatically takes up the width of its children
          "--width": width + "px",
          "--font-size": styles.fontSize + "rem",
          "--height": styles.height + "rem",
          "--padding": styles.padding + "px",
          "--border-thickness": styles.borderThickness + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  // Allows us to adjust the font-color of the icon & the input together thanks to inheritance
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  // Trick to center the icon vertically
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconHeight);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--padding);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;

  // Pseudo element which allows us to style the placeholder of input elements
  &::placeholder {
    color: ${COLORS.gray500}
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
