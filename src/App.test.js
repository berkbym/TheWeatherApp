import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './redux/reducers';
import { createStore } from 'redux'

const store = createStore(reducers)

test('Renders logo', () => {
  render(
  <Provider store={store}>
    <App />
  </Provider>
  );
  const linkElement = screen.getByText('TheWeatherApp');
  expect(linkElement).toBeInTheDocument();
});

//data fteched test
//location allow test
//location allow success test
//change current city test
