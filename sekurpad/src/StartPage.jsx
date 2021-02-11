import React from "react";
import EventButtonStart from "./EventButtonStart";
import uuid from "react-uuid";

export default function StartPage() {
    const pin = 9468;
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
                pin={pin.toString()}/>
        </>
    )
}