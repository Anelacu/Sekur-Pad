import React from "react";
import EventButtonStart from "./EventButtonStart";
import { Stages } from "./Stages";

export default function StartPage(props) {
    const currentStageIndex = props.match.params.stage;
    const pin = Stages[currentStageIndex]["pin"];
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
            <EventButtonStart
                stage={currentStageIndex}
                pin={pin.toString()} />
        </>
    )
}