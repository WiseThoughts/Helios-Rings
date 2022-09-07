import Nav from "./Nav";
import Ring1 from "../images/ringdry.jpg"
import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"
import Ring7 from "../images/ringone.jpg"

const Contact = () => {


    return ( 
    <div>
        <div>
            <Nav />
        </div>

        <div>
            <img src={Ring1} alt="ring 1" />
            <img src={Ring2} alt="ring 1" />
            <img src={Ring3} alt="ring 1" />
            <img src={Ring4} alt="ring 1" />
            <img src={Ring7} alt="ring 1" />
            <img src={Ring6} alt="ring 1" />
            <img src={Ring5} alt="ring 1" />
        </div>




    </div>
    );
}

export default Contact;