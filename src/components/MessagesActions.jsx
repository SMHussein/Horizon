'use client';

import { HiTrash, HiPencil } from 'react-icons/hi2';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDialog';
import { deleteMessage, readMessage } from '@utils/actions';
import Button from './Button';

function MessagesActions({ id, isRead }) {
  function handleConfirm(action, onCloseModal) {
    action(id);
    onCloseModal();
  }

  return (
    <Modal>
      <Modal.Open opens="delete">
        <Button className="self-end flex justify-center items-center gap-2">
          Delete <HiTrash aria-hidden="true" />
        </Button>
      </Modal.Open>

      {!isRead && (
        <Modal.Open opens="read">
          <Button
            variation="secondary"
            className="self-end flex justify-center items-center gap-2"
          >
            Mark as Read <HiPencil aria-hidden="true" />
          </Button>
        </Modal.Open>
      )}

      <Modal.Window name="delete">
        <ConfirmDelete
          actionLabel="delete"
          resourceName="message"
          onConfirm={handleConfirm}
          action={deleteMessage}
        />
      </Modal.Window>

      <Modal.Window name="read">
        <ConfirmDelete
          actionLabel="read"
          resourceName="message"
          onConfirm={handleConfirm}
          action={readMessage}
        />
      </Modal.Window>
    </Modal>
  );
}

export default MessagesActions;
