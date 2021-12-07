import React from "react";
import { Home } from "../Components/Home/home";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

describe('Home Page', () => {
  it('renders the home page elements', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home')).toBeInTheDocument();
    expect(getByTestId('tabs')).toBeInTheDocument();
  });
});