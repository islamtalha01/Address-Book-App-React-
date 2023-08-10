/**
 * @jest-environment jsdom
 */


import React from 'react'
import {render,screen,cleanup, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'; // For jest-dom matchers
import userEvent from '@testing-library/user-event'; 
import UserModal from './UserModal'



afterEach(()=>{


    cleanup();
})





describe('UserModal', () => {
  const mockData = {
    element: {
      location: {
        street: {
          number: 123,
          name: 'Sample Street',
        },
        postcode: '12345',
        state: 'Sample State',
      },
      phone: '123-456-7890',
      cell: '987-654-3210',
      nat: 'US',
    },
  };

  it('renders the modal when isModalOpen is true and display Mock data and buttons', () => {
    const handleOk = jest.fn();
    const handleCancel = jest.fn();

    render(
      <UserModal
        modalData={mockData}
        isModalOpen={true}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></UserModal>
    );

    const modalElement = screen.getByTestId('modal-1');
    expect(modalElement).toBeInTheDocument();

    const streetInfo = screen.getByText(/Street: Sample Street 123/i);
    expect(streetInfo).toBeInTheDocument();

    // ... similar assertions for other data fields
    
    const okButton = screen.getByRole('button', { name: 'OK' });
    expect(okButton).toBeInTheDocument();


     
    fireEvent.click(screen.getByRole('button', { name: 'OK' }));
    expect(handleOk).toHaveBeenCalled();

    
  });

  it('does not render the modal when isModalOpen is false', () => {
    const handleOk = jest.fn();
    const handleCancel = jest.fn();

    render(
      <UserModal
        modalData={mockData}
        isModalOpen={false}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    );

    const modalElement = screen.queryByTestId('modal-1');
    expect(modalElement).not.toBeInTheDocument();


  });
});




