
import ReservationForm from "../components/ReservationsForm/ResevervationForm"
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Formik, Form } from 'formik';

test('renders ReservationForm and submits values', () => {
    const handleSubmit = jest.fn();

    const { getByLabelText, getByText } = render(

        <ReservationForm />

    );

    fireEvent.change(getByLabelText('Date :'), { target: { value: '2024-01-31' } });
    fireEvent.change(getByLabelText('Heure :'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Nombre de personne :'), { target: { value: '4' } });
    fireEvent.change(getByLabelText('Commentaire :'), { target: { value: 'Test comment' } });

    fireEvent.click(getByText('Réserver'));

    expect(handleSubmit).toHaveBeenCalledWith({
        date: '2024-01-31',
        time: '12:00',
        number_of_people: '4',
        comment: 'Test comment',
    }, expect.anything());
});