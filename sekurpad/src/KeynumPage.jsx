import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import axios from "axios";
import {ApiEndPoints} from "./ApiEndPoints";

export default function KeynumPage(props) {
    const [pin, setPin] = useState("");
    const correctPin = props.match.params.pin;

    function handleButton(e) {
        setPin(pin + e.target.value);
        if (pin.length === 4) {
            console.log(correctPin);
            if (pin === correctPin) {
                axios.post(ApiEndPoints.createLog, {
                    userUuid: props.uuid,
                    timestamp: new Date().toLocaleString(),
                    activity: "end"
                })
                    .then(function (res) {
                        console.log(res);
                    });
            } else {
                axios.post(ApiEndPoints.createLog, {
                    userUuid: props.uuid,
                    timestamp: new Date().toLocaleString(),
                    activity: "error"
                })
                    .then(function (res) {
                        console.log(res);
                    });
            }
            setPin("");
        }
    }

    function handleButtonDel() {
        setPin(pin.slice(0, -1));
    }

    return (
        <>
            <Container
                style={{
                    marginLeft: '35%',
                    marginTop: '3%'
                }}
            >
                <Row>
                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "60px",
                            }}
                        >
                            ▯
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "60px",
                            }}
                        >
                            ▯
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "60px",
                            }}
                        >
                            ▯
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "60px",
                            }}
                        >
                            ▯
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "25px",
                            }}
                        >
                            +0
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "25px",
                            }}
                        >
                            +0
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "25px",
                            }}
                        >
                            -2
                        </p>
                    </Col>

                    <Col
                        xs={1}
                    >
                        <p
                            style={{
                                fontSize: "25px",
                            }}
                        >
                            +1
                        </p>
                    </Col>
                </Row>


            </Container>
            <Container
                style={{
                    marginTop: '5%',
                    marginLeft: '30%'
                }}
            >
                <Row
                    style={{
                        marginBottom: '20px'
                    }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h1
                            style={{
                                textAlign: "center",
                            }}
                        >{'>' + pin}
                        </h1>
                    </div>
                </Row>
                <Row>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"1"}
                                onClick={e => handleButton(e)}
                        >
                            1
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"2"}
                                onClick={e => handleButton(e)}
                        >
                            2
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"3"}
                                onClick={e => handleButton(e)}
                        >
                            3
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: '5px'
                    }}>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"4"}
                                onClick={e => handleButton(e)}
                        >
                            4
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"5"}
                                onClick={e => handleButton(e)}
                        >
                            5
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"6"}
                                onClick={e => handleButton(e)}
                        >
                            6
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: '5px'
                    }}
                >
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"7"}
                                onClick={e => handleButton(e)}
                        >
                            7
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"8"}
                                onClick={e => handleButton(e)}
                        >
                            8
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"9"}
                                onClick={e => handleButton(e)}
                        >
                            9
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: '5px'
                    }}
                >
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={""}
                                onClick={e => handleButton(e)}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"0"}
                                onClick={e => handleButton(e)}
                        >
                            0
                        </Button>
                    </Col>

                    <Col
                        xs={2}
                    >
                        <Button variant="primary" size="lg" block
                                value={"9"}
                                onClick={handleButtonDel}
                        >
                            DEL
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}