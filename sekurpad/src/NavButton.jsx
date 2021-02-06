import {Button} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';

export default function NavButton(props) {
    let history = useHistory();

    function navigate() {
        history.push(props.to);
    }

    return (
        <Button className="NavButton"
                onClick={navigate}>
        </Button>
    )
}