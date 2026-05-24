import { useRaceSocket } from './hooks/useRaceSocket';
import RaceBoard from './components/RaceBoard/RaceBoard';
import './App.css';

function App() {
  const { restartRace } = useRaceSocket();

  return (
    <main className="app">
      <h1>Horse Racing</h1>

      <RaceBoard />

      <div className="actions">
        <button onClick={restartRace} className="restart-button">
          Restart Race
        </button>
      </div>
    </main>
  );
}

export default App;