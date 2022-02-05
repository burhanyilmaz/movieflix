import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import Chip from 'components/core/Chip';

it('Chip renders correctly', () => {
  const { getByTestId, getByText } = render(<Chip label="Horror" />);

  expect(getByTestId(TestIds.CHIP_LABEL)).not.toBeNull();
  expect(getByText('Horror')).not.toBeNull();
});
