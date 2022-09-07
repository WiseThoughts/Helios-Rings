import Nav from "./Nav";
import '../style/Home.css';
import Footer from "./Footer";
import Placeholder from "../images/ringplaceholder.jpg"
import {SplitPage, Splitimg, LeftSide, RightSide } from '../style/Home.styled'


function Home() {


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
        <button>Contact me</button>
        </div>
        <div>
          <h5>Or to browse though my past rings</h5>
          <button>View the Collection</button>
        </div>
      </div>
      </RightSide>
      </SplitPage>


    <Footer />

    </div>
  );
}

export default Home;
