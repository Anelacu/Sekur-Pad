import React from "react";
import NavButton from "./EventButton";

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
            <NavButton
                uuid={"testfromreact"}
                timestamp={"today"}
                activity={"start"}
                to={"/keynum"}/>
        </>
    )
}