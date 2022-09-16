import { useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import {
    MdPlayArrow,
    MdPause,
    MdShuffle,
    MdShuffleOn,
    MdSkipNext,
    MdSkipPrevious,
    MdRepeat,
    MdRepeatOneOn,
    MdRepeatOn,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { playPauseAction, repeatAction, shuffleAction } from "../redux/actions";

const BottomPlayerComponent = () => {
    const playing = useSelector((state) => state.player.play);
    const shuffle = useSelector((state) => state.player.shuffle);
    const repeat = useSelector((state) => state.player.repeat);

    // const switchRepeat = () => {
    //     switch (repeat) {
    //         case "off":
    //             setRepeat("on");
    //             break;
    //         case "on":
    //             setRepeat("onlyOne");
    //             break;
    //         case "onlyOne":
    //             setRepeat("off");
    //             break;
    //         default:
    //             break;
    //     }
    // };

    return (
        <Container
            fluid
            fixed="bottom"
            className="fixed-bottom bg-container pt-1"
        >
            <Row>
                <Col lg={10} className="offset-lg-2">
                    <Row>
                        <Col
                            xs={6}
                            md={4}
                            lg={2}
                            className="offset-3 offset-md-4 offset-lg-5 mt-1"
                        >
                            <Row className="playerControls">
                                <a href="/" onClick={() => shuffleAction}>
                                    {shuffle ? (
                                        <MdShuffleOn className="playerIcons" />
                                    ) : (
                                        <MdShuffle className="playerIcons" />
                                    )}
                                </a>
                                <a href="/" onClick={() => {}}>
                                    <MdSkipPrevious className="playerIcons" />
                                </a>
                                <a href="/" onClick={() => playPauseAction}>
                                    {playing ? (
                                        <MdPause className="playerIcons" />
                                    ) : (
                                        <MdPlayArrow className="playerIcons" />
                                    )}
                                </a>
                                <a href="/" onClick={() => {}}>
                                    <MdSkipNext className="playerIcons" />
                                </a>
                                <a href="/" onClick={() => repeatAction}>
                                    {repeat ? (
                                        <MdRepeatOn className="playerIcons" />
                                    ) : (
                                        <MdRepeat className="playerIcons" />
                                    )}
                                </a>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center playBar py-3">
                        <Col xs={8} md={6}>
                            <div className="progress">
                                <ProgressBar
                                    animated
                                    variant="success"
                                    now={0} //todo: collega un counter di secondi al click di play
                                    min={0}
                                    max={100}
                                ></ProgressBar>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default BottomPlayerComponent;
