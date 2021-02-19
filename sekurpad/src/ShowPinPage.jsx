import React from "react";
import { Stages } from "./Stages";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { logActivity } from './Logger'

export default function ShowPinPage(props) {
    const currentStageIndex = props.match.params.stage;
    const pin = Stages[currentStageIndex]["pin"];

    let history = useHistory();

    function navigate() {
        logActivity("Start stage: " + currentStageIndex)
        history.push('/enter_pin/' + currentStageIndex + "/pin=" + pin);
    }

    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    marginTop: '10%',
                    marginBottom: '2%'
                }}
            >
                Your pin number is: {pin}</h2>
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
        </>
    )
}