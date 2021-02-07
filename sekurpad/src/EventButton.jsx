import {Button} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {ApiEndPoints} from "./ApiEndPoints";

export default function EventButton(props) {
    let history = useHistory();

    function navigate() {
        axios.post(ApiEndPoints.createLog, {
            userUuid: props.uuid,
            timestamp: props.timestamp,
            activity: props.activity
        })
            .then(function (res) {
                console.log(res);
            });
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
            <Button className="EventButton"
                    variant="primary" size="lg"
                    onClick={navigate}
            >
                Start
            </Button>
        </div>
    )
}