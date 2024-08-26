'use client';

import { HiPencil, HiTrash, HiArrowDownOnSquare } from 'react-icons/hi2';
import AddEditClientForm from './AddEditClientForm';
import ConfirmDelete from './ConfirmDialog';
import Modal from './Modal';
import Menus from './Menus';
import { archiveClient, deleteClient } from '@utils/actions';

function AdminClientsMenu({ client }) {
    function handleConfirm(action, onCloseModal) {
        action(client);
        onCloseModal();
    }

    return (
        <Modal>
            <Menus>
                <Menus.Menu>
                    <Menus.Toggle id={client.id} />

                    <Menus.List id={client.id}>
                        <Modal.Open opens='edit'>
                            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                        </Modal.Open>

                        <Modal.Open opens='archive'>
                            <Menus.Button icon={<HiArrowDownOnSquare />}>Archive</Menus.Button>
                        </Modal.Open>

                        <Modal.Open opens='delete'>
                            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                        </Modal.Open>
                    </Menus.List>

                    <Modal.Window name='edit'>
                        <AddEditClientForm clientToEdit={client} />
                    </Modal.Window>

                    <Modal.Window name='archive'>
                        <ConfirmDelete
                            actionLabel='archive'
                            resourceName='client'
                            onConfirm={handleConfirm}
                            action={archiveClient}
                        />
                    </Modal.Window>

                    <Modal.Window name='delete'>
                        <ConfirmDelete
                            actionLabel='delete'
                            resourceName='client'
                            onConfirm={handleConfirm}
                            action={deleteClient}
                        />
                    </Modal.Window>
                </Menus.Menu>
            </Menus>
        </Modal>
    );
}

export default AdminClientsMenu;
