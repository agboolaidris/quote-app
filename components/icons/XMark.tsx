import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const XMarkIcon = (props: SvgProps) => {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  );
};
