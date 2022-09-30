import { act } from '@testing-library/react-native';

export const sleep = (ms: number) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const actSleep = async (ms: number = 500) => {
  await act(async () => {
    await sleep(ms);
  });
};
