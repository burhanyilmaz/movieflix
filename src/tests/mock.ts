import fetchMock from 'jest-fetch-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

fetchMock.enableMocks();
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
