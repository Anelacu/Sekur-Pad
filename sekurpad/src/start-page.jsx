import {Container} from 'react-bootstrap';
import React from "react";
import NavButton from "./NavButton";

export default function StartPage(props) {
    return (
        <Container>
            <h2>Your pin number is: {props.pin}</h2>
            <NavButton to={"/keynum"}/>
        </Container>
    )
}