import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/index';
import FormPage from './FormPage';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

test('renders a input btn', () => {
  renderWithRedux(<FormPage />, { initialState: { form: {} } });
  expect(screen.getByTestId('btn-1')).toHaveValue(
    'Creating a new Infrastructure',
  );
});

test('renders a input type number', () => {
  renderWithRedux(<FormPage />, { initialState: { form: {} } });
  expect(screen.getByTestId('number')).not.toHaveValue(
    /d+/,
  );
});

test('renders a input type radio', () => {
  renderWithRedux(<FormPage />, { initialState: { form: {} } });
  const radiobtn = screen.getAllByTestId('radio');
  const checkedBefore = radiobtn.filter((r) => r.checked);
  expect(checkedBefore.length).toEqual(0);
  fireEvent.click(radiobtn[0]);
  const checkedAfter = radiobtn.filter((r) => r.checked);
  expect(checkedAfter.length).toEqual(1);
});
test('renders a select option', () => {
  renderWithRedux(<FormPage />, { initialState: { form: {} } });
  expect(screen.getByTestId('select')).toHaveDisplayValue(/Select currency/);
}); 