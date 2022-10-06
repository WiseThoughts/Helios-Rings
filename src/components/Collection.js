import "../style/Collection.styled"
import "../style/collection.css"

import Nav from "./Nav";
import Ring from "./Ring"
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
    const [RingDes, SetRingDes] = useState();
    const [Modal, SetModal] = useState(false);



    const ringArray =[
        {
        id:1,
        imgsrc:Ring2,
        ringdes:"trail: ring 2"
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


    const callImage = (imgsrc, ringdes)=>{
        SetRingImage(imgsrc);
        SetRingDes(ringdes);
    }



    return ( 
    <div>
        <div>
            <Nav />
        </div>

        <div>
            <RingModal {...{RingImage, RingDes, Modal, SetModal }} />
        </div>

        <Images >
            {ringArray.map((item, index) =>{
                return(
                <MappedItems key={index}>
                    <RImage src={item.imgsrc} onClick={() => {callImage(item.imgsrc, item.ringdes); SetModal(true)}} />
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

