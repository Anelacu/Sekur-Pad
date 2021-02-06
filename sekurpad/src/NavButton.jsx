import {Button} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';

export default function NavButton(props) {
    let history = useHistory();

    function navigate() {
        history.push(props.to);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button className="NavButton"
                    variant="primary" size="lg"
                    onClick={navigate}
            >
                Start
            </Button>
        </div>
    )
}