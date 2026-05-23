import { useRaceSocket } from './hooks/useRaceSocket';
import RaceBoard from './components/RaceBoard/RaceBoard';
import './App.css';

function App() {
  useRaceSocket();

  return (
    <main className="app">
      <h1>Horse Racing</h1>
      <RaceBoard />
    </main>
  );
}

export default App;