import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

export default function InstructionPage() {
    let history = useHistory();

    function navigate() {
        history.push('/start');
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
                Lorem Ipsum</h2>
            <p
                style={{
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: '2%'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque non orci id
                porttitor.
                Nunc ac cursus dui. Vestibulum ut lobortis leo, id tempor nulla. Nulla blandit diam urna, at viverra est
                rutrum et. Phasellus ornare arcu eu tortor rhoncus, et pretium justo ultrices. Curabitur id odio
                vulputate,
                pellentesque nisl a, consectetur augue. Mauris a volutpat diam. Sed ut sodales massa. Nullam placerat
                nulla
                ut sapien aliquet, sed venenatis ligula convallis. Ut commodo sagittis felis id convallis. Mauris lectus
                massa, tristique sit amet neque at, rhoncus tincidunt dolor. Aliquam euismod diam tristique dolor
                consectetur,
                et egestas magna lobortis. Ut a nisl rhoncus, luctus sem in, congue ante. Nunc quis vulputate mauris,
                quis condimentum ante. Donec sit amet nunc dui.
            </p>

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