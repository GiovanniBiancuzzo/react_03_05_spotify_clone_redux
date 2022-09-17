import {
    Button,
    Col,
    Container,
    Form,
    InputGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addQueryAction, addToCatalogueAction } from "../redux/actions";
import { MdCollectionsBookmark, MdHome } from "react-icons/md";
import { BsSpotify } from "react-icons/bs";
import { useEffect, useState } from "react";

const VerticalSidebarComponent = () => {
    const [query, setQuery] = useState("");
    const queryStore = useSelector((state) => state.search.query);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQueryAction(query));
        // dispatch(addToCatalogueAction(query));
    };

    useEffect(() => {
        dispatch(addToCatalogueAction(queryStore));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryStore]);

    return (
        <div className="col-2">
            <nav
                className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                id="sidebar"
            >
                <div className="nav-container">
                    <a className="navbar-brand" href="/">
                        {/* <img
                            src="../public/assets/img/Spotify_Logo.png"
                            alt="Spotify_Logo"
                            width="131"
                            height="40"
                        /> */}
                        <BsSpotify /> Spotify
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <ul>
                                <li>
                                    <a className="nav-item nav-link" href="/">
                                        <MdHome /> &nbsp; Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-item nav-link"
                                        href="/library"
                                    >
                                        <MdCollectionsBookmark />
                                        &nbsp; Your Library
                                    </a>
                                </li>
                                <li>
                                    <div className="input-group mt-3">
                                        <form onClick={handleSubmit}>
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                id="searchField"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                                value={query}
                                                onChange={(e) =>
                                                    setQuery(e.target.value)
                                                }
                                            />
                                            <div
                                                className="input-group-append"
                                                style={{ marginBottom: "4%" }}
                                            >
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    type="submit"
                                                    id="button-addon1"
                                                >
                                                    GO
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="nav-btn">
                    <button className="btn signup-btn" type="button">
                        Sign Up
                    </button>
                    <button className="btn login-btn" type="button">
                        Login
                    </button>
                    <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
                </div>
            </nav>
        </div>
    );
};

export default VerticalSidebarComponent;
