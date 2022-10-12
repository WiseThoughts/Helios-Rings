import { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Backward, Forward, ReviewImage, Pad} from "./ModalSlides.styled";


function ModalSlides({ringPicArray}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const back = ()=>{
        const firstSlide = currentSlide === 0;
        const newSlide = firstSlide ? ringPicArray.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };
    const forward = ()=>{
        const lastSlide = currentSlide === ringPicArray.length - 1;
        const newSlide = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    return (
    <div>
        <Pad>
            <ReviewImage src={ringPicArray[currentSlide].Img}></ReviewImage>
        </Pad>

        <div>
            <Backward onClick={back}><IoChevronBackSharp /></Backward>
            <Forward onClick={forward}><IoChevronForwardSharp/></Forward>
        </div>

    </div>
    );
}


export default ModalSlides;