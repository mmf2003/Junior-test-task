import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RaceBoard from '../components/RaceBoard/RaceBoard';
import horsesReducer from '../features/horses/horsesSlice';

const renderWithStore = (preloadedState) => {
  const store = configureStore({
    reducer: {
      horses: horsesReducer,
    },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <RaceBoard />
    </Provider>
  );
};

describe('RaceBoard', () => {
  test('shows loading text when horses list is empty', () => {
    renderWithStore({
      horses: {
        items: [],
        isRunning: false,
      },
    });

    expect(screen.getByText(/waiting for race data/i)).toBeInTheDocument();
  });

  test('renders horses list', () => {
    renderWithStore({
      horses: {
        items: [
          { name: 'Princess Diana', distance: 100 },
          { name: 'Cricket', distance: 200 },
        ],
        isRunning: true,
      },
    });

    expect(screen.getByText('Princess Diana')).toBeInTheDocument();
    expect(screen.getByText('Cricket')).toBeInTheDocument();
  });

    test('shows winner banner when horse reaches max distance', () => {
    renderWithStore({
        horses: {
        items: [
            { name: 'Lucy', distance: 1000 },
            { name: 'Cricket', distance: 800 },
        ],
        isRunning: true,
        },
    });

    expect(screen.getByText(/winner/i)).toBeInTheDocument();
    expect(screen.getAllByText('Lucy').length).toBeGreaterThan(0);
    });
});