import {Button} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {ApiEndPoints} from "./ApiEndPoints";

export default function EventButtonStart(props) {
    let history = useHistory();

    function navigate() {
        // TODO: hard code request here instead of using props
        axios.post(ApiEndPoints.createLog, {
            userUuid: props.uuid,
            timestamp: props.timestamp,
            activity: props.activity
        })
            .then(function (res) {
                console.log(res);
            });
        history.push('/keynum/' + props.pin);
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