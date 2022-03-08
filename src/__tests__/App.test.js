import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import reducers from '../redux/reducers';
import { createStore } from 'redux'
import { getValue } from '@testing-library/user-event/dist/utils';
import HeroContent from '../components/HeroContent';
import userEvent from '@testing-library/user-event';

const store = createStore(reducers)

test('Renders logo', () => {
  render(
  <Provider store={store}>
    <App />
  </Provider>
  );
  const headingElement = screen.getByText('TheWeatherApp');
  expect(headingElement).toBeInTheDocument();
});


it('Default location access must be false', () => {
  const {isCurrentLocation} = render(
    <Provider store={store}>
      <HeroContent />
    </Provider>
    );
    expect(getValue(isCurrentLocation)).toBeFalsy()
})
