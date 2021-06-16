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
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);


`;

const BannerWrapper = styled.div`
  height: 400px;
  width: 100%;
  background-color:#fff;
  border-radius: 10px;

`;

const Banner = styled.div`
  width: 70%;
  height: 400px;
  background-color: #000;
  background-image: url(${( ({ img }) => img)});
  background-size: cover;
  background-position: center;
  margin: 0 auto 20px;

`;

const ModalItem = ({ openItem, setOpenItem }) => {

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    if (!openItem) {
        return null;
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <BannerWrapper>
                    <Banner img={openItem.img}/>
                    Test
                </BannerWrapper>

            </Modal>
        </Overlay>
    );

};

export default ModalItem;
