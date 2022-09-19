
import { Link } from 'react-router-dom';
import { ModalBackground, ModalButtons, ModalBox, ModalImage, TextBox } from './Modal.styling'




const Modal = ({RingModal, SetRingModal, RingImage, RingDes}) => {


    function scroll(){
        document.body.style.overflow="";
    }


    return RingModal ? (
    <div>
        <ModalBackground />
            <ModalBox>
                <ModalImage src={RingImage} alt="ring" />
                    <TextBox>
                        <p>{RingDes}</p>
                        <ModalButtons><Link to={{pathname: '/contact'}}>Contact Me</Link></ModalButtons>
                        <ModalButtons>Shop</ModalButtons>
                        <ModalButtons onClick={()=>{SetRingModal(false); scroll()}}>Close</ModalButtons>
                    </TextBox>
            </ModalBox>

    </div>

) :null;
}

export default Modal


