import React from "react";
import { Register } from "../Components/Register/register";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});

describe('Register Page', () => {
  it('renders the input fields and register button', () => {
    const { getByTestId } = render(<Register />);
    expect(getByTestId("patientname")).toBeInTheDocument();
    expect(getByTestId('id')).toBeInTheDocument();
    expect(getByTestId('age')).toBeInTheDocument();
    expect(getByTestId('nssf')).toBeInTheDocument();
    expect(getByTestId('register')).toBeInTheDocument();
  });
});