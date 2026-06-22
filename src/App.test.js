// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeEdge/i);
    expect(titleElement).toBeInTheDocument();
});
