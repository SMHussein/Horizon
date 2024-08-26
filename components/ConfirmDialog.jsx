'use client';

import Button from './Button';
import Heading from './Heading';
import { useFormState } from 'react-dom';

function ConfirmDelete({ resourceName, actionLabel, onConfirm, disabled, onCloseModal, action }) {
    const initialState = {
        success: '',
        error: '',
    };

    const [formState, formAction] = useFormState(action, initialState);

    if (formState?.error) {
        toast.error(formState.error);
    }

    if (formState?.success) {
        toast.success(formState.error);
    }

    return (
        <div className='w-96 flex flex-col gap-3'>
            <Heading type={3}>
                {actionLabel} {resourceName}
            </Heading>
            <p className='text-gray-500 mb-3'>
                Are you sure you want to {actionLabel} this {resourceName} permanently? This action
                cannot be undone.
            </p>

            <div className='flex justify-end gap-3'>
                <Button variation='secondary' disabled={disabled} onClick={onCloseModal}>
                    Cancel
                </Button>
                <form action={() => onConfirm(formAction, onCloseModal)}>
                    <Button variation='primary' className='capitalize flex gap-4 justify-center'>
                        {actionLabel}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ConfirmDelete;
