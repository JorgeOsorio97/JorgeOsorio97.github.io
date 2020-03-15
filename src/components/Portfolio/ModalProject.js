import React from 'react';
import Modal from '@material-ui/core/Modal';

export const ModalProject = (props) => {
    console.log(props);
    
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <p>Holo</p>
        </Modal>
    );
}
