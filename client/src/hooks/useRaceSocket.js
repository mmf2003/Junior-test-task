import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { socket } from '../services/socket';
import {
  setHorses,
  resetRace,
} from '../features/horses/horsesSlice';

export const useRaceSocket = () => {
  const dispatch = useDispatch();

  const handleTicker = useCallback(
    (horses) => {
      dispatch(setHorses(horses));
    },
    [dispatch]
  );

  const handleConnect = useCallback(() => {
    socket.emit('start');
  }, []);

  const startRace = useCallback(() => {
    socket.off('connect', handleConnect);
    socket.off('ticker', handleTicker);

    socket.on('connect', handleConnect);
    socket.on('ticker', handleTicker);

    socket.connect();
  }, [handleConnect, handleTicker]);

  const stopRace = useCallback(() => {
    socket.off('connect', handleConnect);
    socket.off('ticker', handleTicker);
    socket.disconnect();
  }, [handleConnect, handleTicker]);

  const restartRace = useCallback(() => {
    stopRace();
    dispatch(resetRace());

    setTimeout(() => {
      startRace();
    }, 300);
  }, [dispatch, startRace, stopRace]);

  useEffect(() => {
    startRace();

    return () => {
      stopRace();
    };
  }, [startRace, stopRace]);

  return {
    restartRace,
  };
};