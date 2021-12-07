import React from "react";
import { Symptoms } from "../Components/Symptoms/symptoms";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Symptoms />, div);
});

describe('Symptom Page', () => {
  it('renders the symptoms', () => {
    const { getByTestId } = render(<Symptoms />);
    expect(getByTestId('patientname')).toBeInTheDocument();
    expect(getByTestId('taste')).toBeInTheDocument();
    expect(getByTestId('energy')).toBeInTheDocument();
    expect(getByTestId('breath')).toBeInTheDocument();
    expect(getByTestId('temperature')).toBeInTheDocument();
    expect(getByTestId('smell')).toBeInTheDocument();
    expect(getByTestId('register')).toBeInTheDocument();
  });
});