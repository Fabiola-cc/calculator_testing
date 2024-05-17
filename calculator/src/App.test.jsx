import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import App from './App'


describe('App component', () => {
    test('Renders correctly', () => {
        render(<App />)
        })
    

  
    test('displays number when number button is clicked', () => {
        render(<App />);
        const buttonOne = screen.getByText('1', { selector: 'button' });
        fireEvent.click(buttonOne);
        const display = screen.getByText('1', { selector: 'div.view' });
        expect(display).toBeInTheDocument();
    });

    
    test('displays result when "=" button is clicked', () => {
        render(<App />);
        fireEvent.click(screen.getByText('1', { selector: 'button' }));
        fireEvent.click(screen.getByText('+', { selector: 'button' }));
        fireEvent.click(screen.getByText('1', { selector: 'button' }));
        fireEvent.click(screen.getByText('=', { selector: 'button' }));
        const display = screen.getByText('2', { selector: 'div.view' });
        expect(display).toBeInTheDocument();
    });

    test('displays error when result is negative', () => {
        render(<App />);
        fireEvent.click(screen.getByText('1', { selector: 'button' }));
        fireEvent.click(screen.getByText('-', { selector: 'button' }));
        fireEvent.click(screen.getByText('9', { selector: 'button' }));
        fireEvent.click(screen.getByText('=', { selector: 'button' }));
        const display = screen.getByText('ERROR', { selector: 'div.view' });
        expect(display).toBeInTheDocument();
      });

    test('clears display when "ERASE ALL" button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1', { selector: 'button' }));
    fireEvent.click(screen.getByText('+', { selector: 'button' }));
    fireEvent.click(screen.getByText('1', { selector: 'button' }));
    fireEvent.click(screen.getByText('ERASE ALL'));
    const display = screen.queryByText('', { selector: 'div.view' });
    expect(display).toBeInTheDocument();
    });

    test('displays error when result is bigger than 9 digits', () => {
        render(<App />);
        const two = screen.getByText('2', { selector: 'button' })
        const nine = screen.getByText('9', { selector: 'button' })
        fireEvent.click(two);
        fireEvent.click(two);
        fireEvent.click(two);
        fireEvent.click(two);
        fireEvent.click(two);
        fireEvent.click(screen.getByText('*', { selector: 'button' }));
        fireEvent.click(nine);
        fireEvent.click(nine);
        fireEvent.click(nine);
        fireEvent.click(nine);
        fireEvent.click(nine);
        fireEvent.click(nine);
        fireEvent.click(screen.getByText('=', { selector: 'button' }));
        const display = screen.getByText('ERROR', { selector: 'div.view' });
        expect(display).toBeInTheDocument();
      });

      test('displays result after more than 1 operation', () => {
        render(<App />);
        const two = screen.getByText('2', { selector: 'button' })
        const nine = screen.getByText('9', { selector: 'button' })
        fireEvent.click(two);
        fireEvent.click(screen.getByText('+', { selector: 'button' }));
        fireEvent.click(nine);
        fireEvent.click(screen.getByText('=', { selector: 'button' }));
        fireEvent.click(screen.getByText('*', { selector: 'button' }));
        fireEvent.click(screen.getByText('3', { selector: 'button' }));
        fireEvent.click(screen.getByText('=', { selector: 'button' }));
        const display = screen.getByText('33', { selector: 'div.view' });
        expect(display).toBeInTheDocument();
      });

})
 