import horsesReducer, {
  setHorses,
  resetRace,
} from '../features/horses/horsesSlice';

describe('horsesSlice', () => {
  test('should return initial state', () => {
    const state = horsesReducer(undefined, { type: undefined });

    expect(state).toEqual({
      items: [],
      isRunning: false,
    });
  });

  test('should set horses and mark race as running', () => {
    const horses = [
      { name: 'Princess Diana', distance: 120 },
      { name: 'Cricket', distance: 80 },
    ];

    const state = horsesReducer(undefined, setHorses(horses));

    expect(state.items).toEqual(horses);
    expect(state.isRunning).toBe(true);
  });

  test('should reset race', () => {
    const initialState = {
      items: [{ name: 'Lucy', distance: 500 }],
      isRunning: true,
    };

    const state = horsesReducer(initialState, resetRace());

    expect(state.items).toEqual([]);
    expect(state.isRunning).toBe(false);
  });
});