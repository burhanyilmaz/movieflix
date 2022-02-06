import fetchMock from 'jest-fetch-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';

fetchMock.enableMocks();
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-bootsplash', () => {
  return {
    show: jest.fn().mockImplementationOnce(() => Promise.resolve()),
    hide: jest.fn().mockImplementationOnce(() => Promise.resolve()),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});
