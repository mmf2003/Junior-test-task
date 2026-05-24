import { MAX_DISTANCE } from '../../constants/race';
import './HorseTrack.css';

function HorseTrack({ horse, isWinner }) {
    const progress = Math.min((horse.distance / MAX_DISTANCE) * 100, 100);

    return (
        <div className={`horse-track ${isWinner ? 'winner-track' : ''}`}>
        <div className="horse-info">
            <strong>{horse.name}</strong>
            <span>{horse.distance} / {MAX_DISTANCE} m</span>
        </div>

        <div className="track">
            <div className="track-fill" style={{ width: `${progress}%` }} />
            <div className="finish-line" />
            <div className="horse" style={{ left: `${progress}%` }}>
            🐎
            </div>
        </div>
        </div>
    );
}

export default HorseTrack;