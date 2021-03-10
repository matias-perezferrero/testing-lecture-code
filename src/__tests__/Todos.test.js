import React from 'react'
import axios from 'axios'
import { render, act } from '@testing-library/react'
import Todos from '../components/Todos'

it('Should render todos', async () => {
    let component;

    jest
        .spyOn(axios, 'get')
        .mockImplementation(() => {
           return Promise.resolve({ data: [{ id: 1, title: "Take out trash" }] })
        })

    await act( async () => {
        const { container } = render(<Todos />)
        component = container
    })

    expect(component.textContent).toContain("Take out trash")
})