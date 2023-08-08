import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowBackIcon = (props: SvgProps) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden={true}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
};
