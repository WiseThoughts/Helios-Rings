import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from "./Nav";
import { FormDiv, Form, Name, Email, Message, Label } from '../style/Contact.styled';

const Collection = () => {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_30gu8dt', 'template_g5o3lm7', form.current, 'sS_kskmFPSceg9T6o')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
    <div>
        <div>
            <Nav />
        </div>

        <FormDiv>
            <Form ref={form} onSubmit={sendEmail}>
                <Label>Name</Label>
                <Name type="text" name="user_name" placeholder='Your Name'/>
                <Label>Email</Label>
                <Email type="email" name="user_email" placeholder='Your Email'/>
                <Label>Message</Label>
                <Message name="message" placeholder='Your Message'/>
                <input type="submit" value="Send" />
            </Form>
        </FormDiv>



    </div>
    );
}

export default Collection;