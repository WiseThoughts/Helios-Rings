import "../style/Collection.styled"

import Nav from "./Nav";
import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"
import Ring7 from "../images/ringone.jpg"
import RingModal from "./Modal/Modal";

import {Images, MappedItems, RImage } from '../style/Collection.styled'
import Footer from "./Footer";
import React, { useState } from "react";




const Collection = () => {


    const [RingImage, SetRingImage] = useState();
    const [RingImage2, SetRingImage2] = useState();
    const [RingImage3, SetRingImage3] = useState();
    const [RingImage4, SetRingImage4] = useState();
    const [RingDes, SetRingDes] = useState();
    const [Modal, SetModal] = useState(false);



    const ringArray =[
        {
        id:1,
        imgsrc:Ring2,
        Img2: Ring3,
        Img3: Ring4,
        Img4: Ring5,
        ringdes:"This is a set of five example rings. They include; a 6mm size 11 tungsten ring with Blue opal, a 6mm size 11 tungsten ring with Orange opal, a 8mm size 11 white ceramic ring with spring-green opal & black fire #2 opal, a 8mm size 11 Black ceramic ring with abolone insert, a 8mm size 10.5 flamed Timascus ring with a carbon fiber liner."
        },
        {
        id:2,
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        id:3,
        imgsrc:Ring4,
        ringdes:"trail"
        },
        {
        id:4,
        imgsrc:Ring5,
        ringdes:"trail"
        },
        {
        id:5,
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        id:6,
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        id:7,
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        id:8,
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {id:9,
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        id:10,
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        id:11,
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        id:12,
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {id:13,
        imgsrc:Ring2,
        ringdes:"trail: ring 2"
        },
        {
        id:14,
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        id:15,
        imgsrc:Ring4,
        ringdes:"trail"
        },
        {
        id:16,
        imgsrc:Ring5,
        ringdes:"trail"
        },
        {
        id:17,
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        id:18,
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        id:19,
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        id:20,
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {id:21,
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        id:22,
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        id:23,
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        id:24,
        imgsrc:Ring3,
        ringdes:"trail"
        }
    ]


    const callImage = (imgsrc, ringdes, Img2, Img3, Img4)=>{
        SetRingImage(imgsrc);
        SetRingDes(ringdes);
        SetRingImage2(Img2);
        SetRingImage3(Img3);
        SetRingImage4(Img4);
    }



    return ( 
    <div>
        <div>
            <Nav />
        </div>

        <div>
            <RingModal {...{RingImage, RingImage2, RingImage3, RingImage4, RingDes, Modal, SetModal, ringArray}} />
        </div>

        <Images >
            {ringArray.map((item, index) =>{
                return(
                <MappedItems key={index}>
                    <RImage src={item.imgsrc} onClick={() => {callImage(item.imgsrc, item.ringdes, item.Img2, item.Img3, item.Img4); SetModal(true)}} />
                </MappedItems>
                )
            })}
        </Images>



    <div>
        <Footer />
    </div>

    </div>
    );
}


export default Collection;

