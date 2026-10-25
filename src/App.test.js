// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiMosaic title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiMosaic/i);
    expect(titleElement).toBeInTheDocument();
});
