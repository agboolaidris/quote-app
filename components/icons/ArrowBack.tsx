import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowBackIcon = (props: SvgProps) => {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 20"
      aria-hidden={true}
      height="1em"
      width="1em"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
        stroke="none"
      />
    </Svg>
  );
};
