import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background-color: Cornsilk;
  width: 600px;
  height: 600px;
`;

const ModalItem = props => {
    return (
        <Overlay>
            <Modal>Test</Modal>
        </Overlay>
    );

};

export default ModalItem;
