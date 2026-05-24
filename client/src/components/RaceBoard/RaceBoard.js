import { useSelector } from 'react-redux';
import { selectHorses } from '../../features/horses/horsesSelectors';
import HorseTrack from '../HorseTrack/HorseTrack';

function RaceBoard() {
    const horses = useSelector(selectHorses);

    if (!horses.length) {
        return <p>Waiting for race data...</p>;
    }

    return (
        <section>
            {horses.map((horse) => (
                <HorseTrack key={horse.name} horse={horse} />
            ))}
        </section>
    );
}

export default RaceBoard;