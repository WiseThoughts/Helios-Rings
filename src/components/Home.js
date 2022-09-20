import Nav from "./Nav";
import Reviews from "./Reviews";
import '../style/Home.css';
import Footer from "./Footer";
import Placeholder from "../images/ringplaceholder.jpg"
import {SplitPage, Splitimg, LeftSide, RightSide } from '../style/Home.styled'
import { Link } from "react-router-dom";

import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"


function Home() {

    const ReviewArray =[
        { productImg: Ring2, review: "Delighted with the ring, will be ordering many more", name: "Jasmin F"},
        { productImg: Ring3, review: "lovely piece", name: "Becky B"},
        { productImg: Ring4, review: "Fantastic craftmenship", name: "James N"},
        { productImg: Ring5, review: "Can't be beaten", name: "Alex D"},
        { productImg: Ring6, review: "My new EDC ring", name: "Benny Y"},
    ];

    return (
        <div>


        <div>
            <Nav />
        </div>

        <SplitPage>
        <LeftSide>
        <Splitimg src={Placeholder} alt="ring placeholder" />
        </LeftSide>
        <RightSide>
        <div>
            <h1>Welcome to SilverDale Rings!</h1>
            <h2>You're One stop shop for Custom one of a kind rings</h2>
        </div>

        <div>
                <div>
                    <h5>For custom quotes or any other questions please contact me</h5>
                    <button><Link to={{pathname: "/contact"}}> Contact Me</Link></button>
                </div>
                <div>
                    <h5>Or to browse though my past rings</h5>
                    <button><Link to={{pathname: "/collection"}}> View the Collection</Link></button>
                </div>
            </div>
            </RightSide>
            </SplitPage>


        <div>
            <h4>Have a Look at what people are saying...</h4>
            <div>
                <Reviews ReviewArray={ReviewArray} />
            </div>
        </div>


        <Footer />

        </div>
    );
}

export default Home;
