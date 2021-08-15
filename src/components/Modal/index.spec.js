import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Modal from './index';

test('modal ekrana çiziliyor mu ?', () => {
  const { getByText, debug } = render(
    <Modal isOpen={true}>modal_placeholder</Modal>,
  );

  expect(getByText('modal_placeholder')).toBeInTheDocument();
});

test('modal state çalışıyor mu ?', () => {
  const { rerender, debug } = render(
    <Modal isOpen={true}>modal_placeholder</Modal>,
  );

  expect(screen.getByTestId('modal-main-container')).not.toHaveClass('hidden');
  rerender(<Modal isOpen={false}>modal_placeholder</Modal>);
  expect(screen.getByTestId('modal-main-container')).toHaveClass('hidden');
});

test('close button çalışıyor mu ?', () => {
  let modalState = true;
  const closeModal = () => (modalState = false);
  const { rerender, debug } = render(
    <Modal isOpen={modalState} onClose={closeModal}>
      modal_placeholder
    </Modal>,
  );
  expect(screen.getByTestId('modal-main-container')).not.toHaveClass('hidden');
  userEvent.click(screen.getByTestId('modal-close-button'));
  rerender(
    <Modal isOpen={modalState} onClose={closeModal}>
      modal_placeholder
    </Modal>,
  );
  expect(screen.getByTestId('modal-main-container')).toHaveClass('hidden');
});

test('outside click çalışıyor mu ?', () => {
  let modalState = true;
  const closeModal = () => (modalState = false);
  const { rerender, debug } = render(
    <Modal isOpen={modalState} onClose={closeModal}>
      modal_placeholder
    </Modal>,
  );
  expect(screen.getByTestId('modal-main-container')).not.toHaveClass('hidden');
  userEvent.click(screen.getByTestId('modal-main-container'));
  rerender(
    <Modal isOpen={modalState} onClose={closeModal}>
      modal_placeholder
    </Modal>,
  );
  expect(screen.getByTestId('modal-main-container')).toHaveClass('hidden');
});
