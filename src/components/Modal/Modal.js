
import { ModalBackground, CloseButton, ModalBox, ModalImage } from './Modal.styling'




const Modal = ({RingModal, SetRingModal, RingImage}) => {


    function scroll(){
        document.body.style.overflow="";
    }

    return RingModal ? (
    <div>
        <ModalBackground />
            <ModalBox>
            <ModalImage src={RingImage} alt="ring" />

            <CloseButton onClick={()=>{SetRingModal(false); scroll()}}>Close</CloseButton>
            </ModalBox>

    </div>

) :null;
}

export default Modal


