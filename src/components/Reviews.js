import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Backward, Forward, ReviewBackground, ReviewImage, ReviewContent, ReviewText, ReviewName} from "../style/Reviews.styled";


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

        <ReviewContent>
        <div>
            <ReviewText>{ReviewArray[currentSlide].review}</ReviewText>
            <ReviewName>{ReviewArray[currentSlide].name}</ReviewName>
        </div>

        <div>
            <h5>For custom quotes or any other questions please contact me</h5>
            <button><Link to={{pathname: "/contact"}}> Contact Me</Link></button>
        </div>
        <div>
            <h5>Or to browse though my past rings</h5>
            <button><Link to={{pathname: "/collection"}}> View the Collection</Link></button>
        </div>
        </ReviewContent>

        <Backward onClick={back}><IoChevronBackSharp /></Backward>
        <Forward onClick={forward}><IoChevronForwardSharp/></Forward>
        <div>

        </div>
        </ReviewBackground>

    </div>
    );
}

export default Reviews;
