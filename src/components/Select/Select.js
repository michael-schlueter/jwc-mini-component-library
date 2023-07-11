import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      {/* Hide the select element under a presentation element to preserve its functionality but to enable more flexible styling options */}
      <PresentationalBit>
        {displayedValue}
        {/* Use an IconWrapper to position the Icon element */}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  // The element should be as long as the text length of the currently selected option
  width: max-content;
`;

const NativeSelect = styled.select`
  // Position the element "under" the presentational element by taking it out of flow
  position: absolute;
  top: 0;
  left: 0;
  // Element should fill out the container
  width: 100%;
  height: 100%;
  // Element should be completely transparent
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  // Sibling selector
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  // Position the element in our presentational element using absolute positioning
  position: absolute;
  // // Trick to center the icon vertically
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);

  // The element is not clickable. Allows user to click the select icon underneath our presentational element
  pointer-events: none;
`;

export default Select;
