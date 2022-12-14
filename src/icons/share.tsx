import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ShareIcon(props: SvgProps) {
  return (
    <Svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <Path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </Svg>
  );
}

export default ShareIcon;
