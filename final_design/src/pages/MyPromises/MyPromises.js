import React, {useState} from 'react';
import Header from './Header';
import Promises from './Promises';
import CreateEvent from 'pages/EventModal/CreateEvent';
import { Wrapper } from './styles';
import { Modal } from 'components/Modal/Modal';

export default function MyPromises() {
    // 여기에 사용자 정보 받아야함.

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <Wrapper>
            <Header id='' setShowModal={setShowModal} openModal={openModal}/>
            <Promises />
            <Modal open={showModal} close={closeModal} header='hello'><CreateEvent /></Modal>
        </Wrapper>
    )
}