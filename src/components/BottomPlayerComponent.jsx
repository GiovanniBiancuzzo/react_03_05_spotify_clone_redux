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
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col-lg-10 offset-lg-2">
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                            <div className="row">
                                <a href="#">
                                    {shuffle ? (
                                        <MdShuffleOn className="playerIcons" />
                                    ) : (
                                        <MdShuffle className="playerIcons" />
                                    )}
                                </a>
                                <a href="#">
                                    <MdSkipPrevious className="playerIcons" />
                                </a>
                                <a href="#">
                                    {playing ? (
                                        <MdPause className="playerIcons" />
                                    ) : (
                                        <MdPlayArrow className="playerIcons" />
                                    )}
                                </a>
                                <a href="#">
                                    <MdSkipNext className="playerIcons" />
                                </a>
                                <a href="#">
                                    {repeat ? (
                                        <MdRepeatOn className="playerIcons" />
                                    ) : (
                                        <MdRepeat className="playerIcons" />
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center playBar py-3">
                        <div className="col-8 col-md-6">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomPlayerComponent;
