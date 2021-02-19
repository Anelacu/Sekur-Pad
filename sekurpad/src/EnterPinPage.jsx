import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { Stages, EndStage } from "./Stages";
import { useHistory } from "react-router-dom";
import { logActivity } from "./Logger";

export default function EnterPinPage(props) {
    const [pin, setPin] = useState("");
    const currentStageIndex = props.match.params.stage;
    const mods = Stages[currentStageIndex]["mods"];
    const correctPin = Stages[currentStageIndex]["target"];
    let history = useHistory();

    function nextPage() {
        var newIndex = parseInt(currentStageIndex.toString()) + 1
        if (newIndex === EndStage) {
            history.push('/end');
        } else {
            history.push('/show_pin/' + newIndex.toString());
        }
    }

    function handleButton(e) {
        var newPin = pin + e.target.value;
        setPin(newPin);
        logActivity("Key " + e.target.value + " pressed at stage: " + currentStageIndex +
            ". Current pin: " + newPin);

        if (newPin.length === 4) {
            if (newPin === correctPin) {
                logActivity("Correct pin entered at stage: " + currentStageIndex)
                nextPage();
            } else {
                logActivity("Wrong pin entered at stage: " + currentStageIndex +
                    ". Pin: " + newPin);
                // TODO: display that pin was wrong
            }
            setPin("");
        }
    }


    function handleButtonDel() {
        var newPin = pin.slice(0, -1);
        setPin(newPin);
        logActivity("Delete pressed at stage: " + currentStageIndex +
            ". Current pin: " + newPin);
    }

    function handleButtonClear() {
        setPin("");
        logActivity("Pin cleared at stage: " + currentStageIndex);
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
                            {mods[0]}
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
                            {mods[1]}
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
                            {mods[2]}
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
                            {mods[3]}
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
                            onClick={e => handleButtonClear()}
                        >
                            Clear
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