import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorses } from '../../features/horses/horsesSelectors';
import { MAX_DISTANCE } from '../../constants/race';
import HorseTrack from '../HorseTrack/HorseTrack';

function RaceBoard() {
  const horses = useSelector(selectHorses);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!horses.length) {
      setWinner(null);
      return;
    }

    if (winner) {
      return;
    }

    const finishedHorses = horses.filter(
      (horse) => horse.distance >= MAX_DISTANCE
    );

    if (finishedHorses.length) {
      const raceWinner = finishedHorses.reduce((leader, horse) =>
        horse.distance > leader.distance ? horse : leader
      );

      setWinner(raceWinner);
    }
  }, [horses, winner]);

  if (!horses.length) {
    return <p className="status">Waiting for race data...</p>;
  }

  return (
    <section>
      {winner && (
        <div className="winner-banner">
          🏆 Winner: <strong>{winner.name}</strong>
        </div>
      )}

      {horses.map((horse) => (
        <HorseTrack
          key={horse.name}
          horse={horse}
          isWinner={winner?.name === horse.name}
        />
      ))}
    </section>
  );
}

export default RaceBoard;