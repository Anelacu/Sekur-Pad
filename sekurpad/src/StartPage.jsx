import React from "react";
import EventButtonStart from "./EventButtonStart";
import uuid from "react-uuid";
import { Stages } from "./Stages";
import { useHistory } from "react-router-dom";

export default function StartPage(props) {
    const currentStageIndex = props.match.params.stage;
    let history = useHistory();
    try {
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
                    uuid={uuid()}
                    to={"/keynum"}
                    stage={currentStageIndex}
                    pin={pin.toString()} />
            </>
        )
    } catch {
        history.push('/end')
    }

}