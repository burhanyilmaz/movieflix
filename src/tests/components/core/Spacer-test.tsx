import { ViewStyle } from 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import Spacer from 'components/core/Spacer';

it('Spacer renders correctly', () => {
  const component = render(<Spacer size={10} />);
  const json: { props: { style: ViewStyle } } = component.toJSON()!;

  expect(json.props.style.width).toBe(0);
  expect(json.props.style.height).toBe(10);

  const componentHorizontal = render(<Spacer size={10} horizontal />);
  const jsonHorizontal: { props: { style: ViewStyle } } = componentHorizontal.toJSON()!;

  expect(jsonHorizontal.props.style.width).toBe(10);
  expect(jsonHorizontal.props.style.height).toBe(0);
});
