import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StarIcon = ({ color, ...rest }: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color || '#FFC319'}
      d="m6 9.5-3.527 1.854.674-3.927L.294 4.646l3.943-.573L6 .5l1.763 3.573 3.943.573-2.853 2.781.674 3.927L6 9.5Z"
    />
  </Svg>
);

export default StarIcon;
