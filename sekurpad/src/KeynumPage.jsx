import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";

export default function KeynumPage(props) {
    const [pin, setPin] = useState("");
    const correctPin = props.match.params.pin;

    function handleButton(e) {
        setPin(pin + e.target.value);
        console.log(pin);
        if (pin.length === 4) {
            console.log(correctPin);
            if (pin === correctPin) {
                console.log("yey");
            } else {
                console.log("nae");
            }
            setPin("");
        }
    }

    function handleButtonDel() {
        setPin(pin.slice(0, -1));
    }

    return (
        <Container
            style={{marginTop: '300px', marginLeft: '600px'}}
        >
            <Row
                style={{
                    marginBottom: '30px'
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
                    >{pin}
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
    )
}