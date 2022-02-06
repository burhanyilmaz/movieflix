import { useEffect, useRef, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { ToastShowParams } from 'react-native-toast-message';
import { dispatch } from 'store';

const useNetInfo = (Toast: {
  show: (params: ToastShowParams) => void;
  hide: (params?: void | undefined) => void;
}) => {
  const [status, setStatus] = useState<boolean | null>();
  const [loaded, setLoaded] = useState<boolean | null>();
  const refInternetConnection = useRef<null | string>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((data) => {
      const { isInternetReachable } = data;
      setStatus(isInternetReachable);
      setLoaded(true);
      dispatch.internetConnection.setInternetConnection(isInternetReachable!);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loaded || status === null) {
      return;
    }

    if (status && refInternetConnection.current) {
      Toast?.show({
        type: 'success',
        text1: `Information`,
        text2: 'You connected to internet',
      });
      refInternetConnection.current = null;
    }

    if (!status) {
      refInternetConnection.current = 'off';
      Toast?.show({
        type: 'error',
        text1: `No internet connection`,
        text2: 'Please check your internet connection',
      });
    }
  }, [status, loaded]);

  return {
    setIsActive: () => {},
  };
};

export default useNetInfo;
