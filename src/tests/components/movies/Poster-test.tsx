import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import Poster from 'components/movies/Poster';

it('Poster renders correctly', () => {
  const { getByTestId, toJSON } = render(<Poster image="some_url" />);
  const json: { props: { source: { uri: string } } } = toJSON()!;

  expect(getByTestId(TestIds.POSTER_IMAGE)).not.toBeNull();
  expect(json.props.source.uri).toBe('some_url');
});
