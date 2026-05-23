import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { socket } from '../services/socket';
import { setHorses, resetRace } from '../features/horses/horsesSlice';

export const useRaceSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      socket.emit('start');
    });

    socket.on('ticker', (horses) => {
      dispatch(setHorses(horses));
    });

    return () => {
      socket.off('connect');
      socket.off('ticker');
      socket.disconnect();
      dispatch(resetRace());
    };
  }, [dispatch]);
};