import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import reducers from '../redux/reducers';
import { createStore } from 'redux'
import { getValue } from '@testing-library/user-event/dist/utils';
import HeroContent from '../components/HeroContent';

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


// it('Default city', () => {
//   const {city} = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//     );
//     const value = render().findByDisplayValue(city)
//     expect(value).toBe('Glasgow')
// })

//data fetched test
//location allow test
//location allow success test
//change current city test