import { render, screen } from '@testing-library/react';
import HorseTrack from '../components/HorseTrack/HorseTrack';

describe('HorseTrack', () => {
  test('renders horse name and distance', () => {
    render(
      <HorseTrack
        horse={{ name: 'Lucy', distance: 250 }}
        isWinner={false}
      />
    );

    expect(screen.getByText('Lucy')).toBeInTheDocument();
    expect(screen.getByText('250 / 1000 m')).toBeInTheDocument();
  });

  test('adds winner class when horse is winner', () => {
    const { container } = render(
      <HorseTrack
        horse={{ name: 'Lucy', distance: 1000 }}
        isWinner={true}
      />
    );

    expect(container.querySelector('.winner-track')).toBeInTheDocument();
  });
});