import { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { ReviewBackground, ReviewImage } from "../style/Reviews.styled";


function Reviews({ReviewArray}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const back = ()=>{
        const firstSlide = currentSlide === 0;
        const newSlide = firstSlide ? ReviewArray.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };
    const forward = ()=>{
        const lastSlide = currentSlide === ReviewArray.length - 1;
        const newSlide = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    return (
    <div>

        <ReviewBackground>
        <div>
            <ReviewImage src={ReviewArray[currentSlide].productImg}></ReviewImage>
        </div>
        <div>
            <h3>{ReviewArray[currentSlide].review}</h3>
            <h5>{ReviewArray[currentSlide].name}</h5>
        </div>
        <div onClick={back}><IoChevronBackSharp /></div>
        <div onClick={forward}><IoChevronForwardSharp/></div>
        <div>

        </div>
        </ReviewBackground>

    </div>
    );
}

export default Reviews;
