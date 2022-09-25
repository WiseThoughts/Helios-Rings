import { Link } from "react-router-dom";
import Nav from "./Nav";


const Rings = (RingImage, RingDes) => {

    return (
    <div>
        <div>
            <Nav />
        </div>

    <div>
        <img src={RingImage} alt="ring" />
        <div>
            {/* <p>{RingDes}</p> */}
            <button><Link to={{pathname: '/contact'}}>Contact Me</Link></button>
            <button>Shop</button>
        </div>
    </div>
    


    </div>);
}

export default Rings;