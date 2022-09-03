import React, { useState} from 'react';
import Header from './Header';
import Promises from './Promises';
import EventModal from 'pages/EventModal/EventModal';
import { Wrapper } from './styles';
import { Modal } from 'components/Modal/Modal';

export default function MyPromises() {
    // 여기에 사용자 정보 받아야함.

    const [targetId, setTargetId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setTargetId(null);
    };

    return (
        <Wrapper>
            <Header id='' setShowModal={setShowModal} openModal={openModal}/>
            <Promises />
            <Modal open={showModal} close={closeModal} header='hello'> <EventModal targetId={targetId} setTargetId={setTargetId} /></Modal>
        </Wrapper>
    )
}