import { Col, Row } from "react-bootstrap";
import SongComponent from "./SongComponent";

const TrackListComponent = ({ tracks }) => {
    return (
        <div id="trackList" className="col col-md-8 p-5">
            <Row>
                <Col md={10} className="mb-5" id="trackList">
                    {tracks.map((track) => (
                        <SongComponent key={track.id} track={track} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default TrackListComponent;
