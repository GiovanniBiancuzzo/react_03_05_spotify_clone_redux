import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleAlbumComponent from "./SingleAlbumComponent";

const DashboardComponent = () => {
    const discography = useSelector((state) => state.discography.catalogue);

    return (
        <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <Link to="/" className="links">
                        TRENDING
                    </Link>
                    <Link to="/" className="links">
                        PODCAST
                    </Link>
                    <Link to="/" className="links">
                        MOODS AND GENRES
                    </Link>
                    <Link to="/" className="links">
                        NEW RELEASES
                    </Link>
                    <Link to="/" className="links">
                        DISCOVER
                    </Link>
                </Col>
            </Row>
            {discography && (
                <Row>
                    <Col xs={10}>
                        <div id="searchResults" style={{ display: "none" }}>
                            <h2>Search Results</h2>
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                {discography.map((singleAlbum) => (
                                    <SingleAlbumComponent
                                        key={singleAlbum.id}
                                        album={singleAlbum}
                                    />
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            )}
            <Row>
                <Col xs={10}>
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <Row
                            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        ></Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <Row
                            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                        ></Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <Row
                            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="hipHopSection"
                        ></Row>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default DashboardComponent;
