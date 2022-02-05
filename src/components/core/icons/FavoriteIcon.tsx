import * as React from 'react';
import Svg, { SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const FavoriteIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Defs>
      <Path id="a" d="M0 0h24v24H0z" />
    </Defs>
    <G transform="translate(-2 -3)" fill="none" fillRule="evenodd">
      <Mask id="b" fill="#fff">
        <Use xlinkHref="#a" />
      </Mask>
      <Path
        d="M2 8.395C2 5.374 4.42 3 7.5 3c1.74 0 3.41.744 4.5 2 1.09-1.256 2.76-2 4.5-2C19.58 3 22 5.374 22 8.395c0 5.356-6.379 9.396-10 12.605C8.387 17.773 2 13.76 2 8.395Z"
        fill={color || '#2E3A59'}
        fillRule="nonzero"
        mask="url(#b)"
      />
    </G>
  </Svg>
);

export default FavoriteIcon;
