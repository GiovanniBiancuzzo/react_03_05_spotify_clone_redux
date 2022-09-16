import { Col, Row } from "react-bootstrap";
import SongComponent from "./SongComponent";

const TrackListComponent = ({ tracks }) => {
    return (
        <Col md={8} id="trackList" className="p-5">
            <Row>
                <Col md={10} className="mb-5" id="trackList">
                    {tracks.map((track) => (
                        <SongComponent key={track.id} track={track} />
                    ))}
                </Col>
            </Row>
        </Col>
    );
};

export default TrackListComponent;
