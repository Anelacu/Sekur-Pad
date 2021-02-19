import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function InstructionPage() {
    let history = useHistory();

    function navigate() {
        history.push('/show_pin/' + '1');
    }

    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    marginTop: '5%',
                    marginBottom: '2%'
                }}
            >
                Instructions for participants</h2>
            <p
                style={{
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: '2%'
                }}
            >
                Thank you for taking part in our experiment! <br/><br/>

                This experiment will involve us showing you a pin and you then entering it on the keypad.
                The pin you will need to enter will either be the same as the one we showed you or a modified one based on 
                arithmetic modifications displayed on the screen. <br/><br/>

                When you click "Start experiment", you will be taken to a page showing you a pin number. You can take as much time as you want to 
                try to memorise it. Then you can press "Start" and you will be taken to a page where you can enter your pin. <br/>
                Please try to not interrupt your process of entering the pin (no need to rush, just don't start doing something 
                else in the meantime 😉). <br/><br/>
                
                If you enter an incorrect pin, we will say so on the screen and then you can reattempt entering the pin. If you enter 
                a correct pin, you will be taken to the next page automatically! <br/><br/>
 
                Note on the modifiers: <br/>
                - If the numbers under the boxes are "+0 +0 +0 +0" it means you should enter the original pin. <br/>
                - Numbers other than "0" indicate how much you need to add or subtract on each digit, for example "+1 +0 +0 -2" means you should add 1 fo the first 
                digit and subtract 2 from the last digit of the pin and enter it as such e.g. 1234 will need to be inputted as 2232. <br/><br/>

                Tip: If you forget the original pin, you can take a look at the link in the browser, it'll be hinted there with "pin=xxxx" at the end.<br/><br/>

                Note on logging: <br/>
                We will be logging the buttons you press and their timestamps but only within our website i.e. only the start and keypad buttons and we will be able to 
                anonymously tie those presses together to one experiment. Nothing else will be logged.<br/><br/>

                Have fun! 😊
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: '2%'
                }}
            >
                <Button className="EventButton"
                    variant="primary" size="lg"
                    onClick={navigate}
                >
                    Start experiment
                </Button>
            </div>
        </>
    )
}