import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

it('Should not show dropdown when mounted', () => {
    const { queryByTestId } = render(<Header />)
    const dropdown = queryByTestId('dropdown')

    expect(dropdown).not.toBeTruthy()
})

it('Should show the dropdown when hamburger is clicked', () => {
    const { container, getByTestId, queryByTestId } = render(<Header />)

    const hamburger = getByTestId('hamburger-button')

    fireEvent.click(hamburger)
    const dropdown = queryByTestId('dropdown')

    expect(dropdown).toBeTruthy()

    // expect(container.textContent).toContain('Dropdown menu')
})