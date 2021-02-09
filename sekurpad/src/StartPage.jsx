import React from "react";
import EventButtonStart from "./EventButtonStart";

// TODO: get rid of api pop stuff
export default function StartPage() {
    const pin = 9468;
    return (
        <>
            <h2
                style={{
                    textAlign: "center"
                }}
            >
                Your pin number is: {pin}</h2>
            <EventButtonStart
                uuid={"testfromreact"}
                timestamp={"today"}
                activity={"start"}
                to={"/keynum"}
                pin={pin.toString()}/>
        </>
    )
}