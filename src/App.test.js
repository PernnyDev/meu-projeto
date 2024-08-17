// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
  render(<App />);
});

test('renders Logo component', () => {
  render(<App />);
  const logoElement = screen.getByText(/Minha Logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders Menu component', () => {
  render(<App />);
  const menuElement = screen.getByText(/Home/i);
  expect(menuElement).toBeInTheDocument();
});

test('renders Formulario component', () => {
  render(<App />);
  const formElement = screen.getByLabelText(/Name/i);
  expect(formElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  const footerElement = screen.getByText(/Minha Empresa/i);
  expect(footerElement).toBeInTheDocument();
});