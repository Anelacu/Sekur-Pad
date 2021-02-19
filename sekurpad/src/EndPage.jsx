import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function InstructionPage() {
    let history = useHistory();

    function navigate() {
        history.push('/start/' + '1');
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
                Thank you for participating! </h2>
            
        </>
    )
}