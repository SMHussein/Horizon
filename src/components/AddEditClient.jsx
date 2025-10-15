'use client';

import Button from './Button';
import AddEditClientForm from './AddEditClientForm';
import Modal from './Modal';
import { HiOutlinePlus } from 'react-icons/hi2';

function Form({ clientToEdit = {} }) {
  return (
    <Modal>
      <Modal.Open opens="client-form">
        <Button
          variation="primary"
          className="flex justify-center gap-4 items-center "
        >
          Add client <HiOutlinePlus aria-hidden="true" className="size-5" />
        </Button>
      </Modal.Open>
      <Modal.Window name="client-form">
        <AddEditClientForm clientToEdit={clientToEdit} />
      </Modal.Window>
    </Modal>
  );
}

export default Form;
