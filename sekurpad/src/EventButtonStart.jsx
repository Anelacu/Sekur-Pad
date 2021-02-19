import { Button } from "react-bootstrap";
import React from "react";
import { useHistory } from 'react-router-dom';
import { logActivity } from './Logger'

export default function EventButtonStart(props) {
    let history = useHistory();

    function navigate() {
        logActivity("Start stage: " + props.stage)
        history.push('/keynum/' + props.stage + "/pin=" + props.pin);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button className="EventButton"
                variant="primary" size="lg"
                onClick={navigate}
            >
                Start
            </Button>
        </div>
    )
}