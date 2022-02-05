import * as React from 'react';
import Svg, { SvgProps, Defs, Path, G, Circle } from 'react-native-svg';

const SearchIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Defs>
      <Path id="a" d="M0 0h24v24H0z" />
    </Defs>
    <G transform="translate(-3 -3)" fill={color} fillRule="evenodd">
      <Circle stroke={color || '#2E3A59'} strokeWidth={3} cx={10.388} cy={10.388} r={6.388} />
      <Path stroke={color || '#2E3A59'} strokeWidth={3} d="m14.851 15.47 5.53 5.53" opacity={0.3} />
    </G>
  </Svg>
);

export default SearchIcon;
