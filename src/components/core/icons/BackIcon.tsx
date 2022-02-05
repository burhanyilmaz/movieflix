import * as React from 'react';
import Svg, { SvgProps, Defs, Path, G, Mask, Use } from 'react-native-svg';

const BackIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Defs>
      <Path id="a" d="M0 0h24v24H0z" />
    </Defs>
    <G transform="translate(0 -5)" fill="none" fillRule="evenodd">
      <Mask id="b" fill="#fff">
        <Use xlinkHref="#a" />
      </Mask>
      <Path
        d="M6.5 5.5 0 12l6.5 6.5.707-.707L1.914 12.5H24v-1H1.914l5.293-5.293L6.5 5.5Z"
        fill={color || '#2E3A59'}
        fillRule="nonzero"
        mask="url(#b)"
      />
    </G>
  </Svg>
);

export default BackIcon;
