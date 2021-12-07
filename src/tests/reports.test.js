import React from "react";
import { Reports } from "../Components/Reports/reports";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reports />, div);
});

describe('Reports Page', () => {
  it('renders the datatable', () => {
    const { getByTestId } = render(<Reports />);
    expect(getByTestId('data')).toBeInTheDocument();
  });
});