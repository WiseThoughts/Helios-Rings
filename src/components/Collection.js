import "../style/Collection.styled"
import "../style/collection.css"

import Nav from "./Nav";
import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"
import Ring7 from "../images/ringone.jpg"

import {Images, MappedItems, RImage } from '../style/Collection.styled'
import Footer from "./Footer";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Contact = () => {

    const [RingImage, SetRingImage] = useState()
    const [RingDes, SetRingDes] = useState()

    const rings =[
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


        <Images >
            {rings.map((item, index) =>{
                return(
                <MappedItems key={index}>
                    <RImage src={item.imgsrc} onClick={() => {callImage(item.imgsrc, item.ringdes)}} />
                    <button onClick={() => {callImage(item.imgsrc, item.ringdes)}}><Link to={{pathname: "/ring"}} RingImage={RingImage} RingDes={RingDes}>See More Details</Link></button>
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

export default Contact;



/* <Images>
        <div class="losange">
            <div class="los1">
                <RImage src={Ring2} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring3} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring4} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring5} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring6} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring7} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring2} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring3} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring4} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring5} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring6} alt="ring 1" />
            </div>
        </div>

        <div class="losange">
            <div class="los1">
                <RImage src={Ring7} alt="ring 1" />
            </div>
        </div>
    </Images> */